const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/";

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "https://beingdev.imgix.net/",
    domains: ["beingdev.imgix.net", "i.ibb.co"],
  },
  env: {
    NEXT_PUBLIC_API_URL: "http://localhost:3000",
  },
};

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;

  nextConfig = {
    ...nextConfig,
    assetPrefix: assetPrefix,
    basePath: basePath,
  };
}

module.exports = nextConfig;
