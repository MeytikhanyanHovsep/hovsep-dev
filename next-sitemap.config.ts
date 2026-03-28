import type { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://hovsep-dev.vercel.app",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
};

export default config;
