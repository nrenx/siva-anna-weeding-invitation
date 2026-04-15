import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBase = isGithubActions && repoName ? `/${repoName}/` : "/";

export default defineConfig({
	cloudflare: isGithubActions ? false : undefined,
	tanstackStart: isGithubActions
		? {
				spa: {
					enabled: true,
					prerender: {
						outputPath: "/index.html",
						crawlLinks: false,
						retryCount: 0,
					},
				},
			}
		: undefined,
	vite: {
		base: process.env.VITE_BASE_PATH || githubPagesBase,
	},
});
