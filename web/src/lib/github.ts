import { unstable_cache } from "next/cache";
import { featuredProjects } from "@/content/projects";

const USERNAME = "adityachauhan0";
const REST_API_BASE = "https://api.github.com";
const GRAPHQL_API = "https://api.github.com/graphql";
const CACHE_SECONDS = 60 * 60;

type GitHubUser = {
  login: string;
  name: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

type GitHubRepo = {
  name: string;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
  language: string | null;
  description: string | null;
  fork: boolean;
};

type GraphQLPinnedRepoNode = {
  name: string;
  url: string;
  stargazerCount: number;
  updatedAt: string;
  description: string | null;
  primaryLanguage: {
    name: string;
  } | null;
};

export type LiveRepoStat = {
  stars: number;
  updatedAt: string;
  url: string;
  language: string | null;
};

export type LiveRepoStatMap = Record<string, LiveRepoStat>;

export type GitHubPinnedRepo = {
  name: string;
  url: string;
  stars: number;
  updatedAt: string;
  language: string | null;
  description: string | null;
  source: "api" | "fallback";
};

export type GitHubSnapshot = {
  profile: {
    username: string;
    name: string;
    profileUrl: string;
    publicRepos: number;
    followers: number;
    following: number;
  };
  metrics: readonly {
    label: string;
    value: string;
  }[];
  repoStats: LiveRepoStatMap;
  pinned: GitHubPinnedRepo[];
  fetchedAt: string;
};

function githubHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-website",
  };

  const token = process.env.GITHUB_TOKEN;
  if (token && token.trim().length > 0) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      ...githubHeaders(),
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed (${response.status}) for ${url}`);
  }

  return (await response.json()) as T;
}

const getUser = unstable_cache(
  async (): Promise<GitHubUser> => {
    return fetchJson<GitHubUser>(`${REST_API_BASE}/users/${USERNAME}`);
  },
  [`github-user-${USERNAME}`],
  { revalidate: CACHE_SECONDS },
);

const getRepos = unstable_cache(
  async (): Promise<GitHubRepo[]> => {
    const repos = await fetchJson<GitHubRepo[]>(
      `${REST_API_BASE}/users/${USERNAME}/repos?per_page=100&sort=updated`,
    );

    return repos.filter((repo) => !repo.fork);
  },
  [`github-repos-${USERNAME}`],
  { revalidate: CACHE_SECONDS },
);

async function getPinnedFromGraphQL(): Promise<GitHubPinnedRepo[]> {
  const token = process.env.GITHUB_TOKEN;
  if (!token || token.trim().length === 0) {
    return [];
  }

  const query = `
    query PinnedRepos($login: String!) {
      user(login: $login) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              url
              stargazerCount
              updatedAt
              description
              primaryLanguage {
                name
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch(GRAPHQL_API, {
    method: "POST",
    headers: {
      ...githubHeaders(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { login: USERNAME },
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL request failed (${response.status})`);
  }

  const data = (await response.json()) as {
    data?: {
      user?: {
        pinnedItems?: {
          nodes?: Array<GraphQLPinnedRepoNode | null>;
        };
      };
    };
    errors?: unknown;
  };

  if (!data.data?.user?.pinnedItems?.nodes) {
    return [];
  }

  return data.data.user.pinnedItems.nodes
    .filter((node): node is GraphQLPinnedRepoNode => Boolean(node))
    .map((node) => ({
      name: node.name,
      url: node.url,
      stars: node.stargazerCount,
      updatedAt: node.updatedAt,
      language: node.primaryLanguage?.name ?? null,
      description: node.description,
      source: "api",
    }));
}

const getPinnedCached = unstable_cache(
  async (): Promise<GitHubPinnedRepo[]> => getPinnedFromGraphQL(),
  [`github-pinned-${USERNAME}`],
  { revalidate: CACHE_SECONDS },
);

function fallbackSnapshot(): GitHubSnapshot {
  return {
    profile: {
      username: USERNAME,
      name: "Aditya Chauhan",
      profileUrl: `https://github.com/${USERNAME}`,
      publicRepos: 63,
      followers: 0,
      following: 0,
    },
    metrics: [
      { label: "Public repos", value: "63+" },
      { label: "Featured AI projects", value: String(featuredProjects.length) },
      { label: "Live GitHub stars", value: "N/A" },
    ],
    repoStats: {},
    pinned: [],
    fetchedAt: new Date().toISOString(),
  };
}

function withFallbackPinned(
  pinnedFromApi: GitHubPinnedRepo[],
  repos: GitHubRepo[],
): GitHubPinnedRepo[] {
  if (pinnedFromApi.length > 0) {
    return pinnedFromApi;
  }

  const repoByName = new Map(repos.map((repo) => [repo.name.toLowerCase(), repo]));
  const preferredNames = featuredProjects.map((project) => project.name.toLowerCase());

  const preferred = preferredNames
    .map((name) => repoByName.get(name))
    .filter((repo): repo is GitHubRepo => Boolean(repo))
    .map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
      language: repo.language,
      description: repo.description,
      source: "fallback" as const,
    }));

  if (preferred.length >= 6) {
    return preferred.slice(0, 6);
  }

  const seen = new Set(preferred.map((repo) => repo.name.toLowerCase()));
  const additional = repos
    .filter((repo) => !seen.has(repo.name.toLowerCase()))
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, Math.max(0, 6 - preferred.length))
    .map((repo) => ({
      name: repo.name,
      url: repo.html_url,
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
      language: repo.language,
      description: repo.description,
      source: "fallback" as const,
    }));

  return [...preferred, ...additional];
}

function buildRepoStats(repos: GitHubRepo[]): LiveRepoStatMap {
  return repos.reduce<LiveRepoStatMap>((acc, repo) => {
    acc[repo.name.toLowerCase()] = {
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
      url: repo.html_url,
      language: repo.language,
    };
    return acc;
  }, {});
}

export const getGitHubSnapshot = unstable_cache(
  async (): Promise<GitHubSnapshot> => {
    try {
      const [user, repos, pinnedFromApi] = await Promise.all([
        getUser(),
        getRepos(),
        getPinnedCached().catch(() => []),
      ]);

      const repoStats = buildRepoStats(repos);
      const pinned = withFallbackPinned(pinnedFromApi, repos);

      const featuredStars = featuredProjects.reduce((sum, project) => {
        const stat = repoStats[project.name.toLowerCase()];
        return sum + (stat?.stars ?? 0);
      }, 0);

      return {
        profile: {
          username: user.login,
          name: user.name ?? user.login,
          profileUrl: user.html_url,
          publicRepos: user.public_repos,
          followers: user.followers,
          following: user.following,
        },
        metrics: [
          { label: "Public repos", value: String(user.public_repos) },
          { label: "Featured AI projects", value: String(featuredProjects.length) },
          { label: "Live GitHub stars", value: String(featuredStars) },
        ],
        repoStats,
        pinned,
        fetchedAt: new Date().toISOString(),
      };
    } catch {
      return fallbackSnapshot();
    }
  },
  [`github-snapshot-${USERNAME}`],
  { revalidate: CACHE_SECONDS },
);
