import { defineConfig } from "vitepress";

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ["tunnel-3000.binzek.com"],
    },
  },

  title: "Abdul Wajid [binzek] ~ A thinker who builds, a builder who cares.",
  titleTemplate: false,
  description:
    "Explore the digital home of Abdul Wajid [binzek] - a space for curated ideas in the digital garden, rare long-form writings, a showcase of variety of projects, and more.",

  head: [["link", { rel: "icon", href: "/icon.png" }]],

  themeConfig: {
    logo: "/icon.png",
    siteTitle: "binzek",

    nav: [
      { text: "Digital Garden", link: "/wiki/" },
      { text: "Projects", link: "/projects/" },
      { text: "Blog", link: "/blog/" },
      { text: "Contact", link: "/contact/" },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      {
        items: [{ text: "Introduction", link: "/wiki/" }],
      },
    ],

    footer: {
      message: "Powered by <a href='https://vitepress.dev/'>VitePress</a>",
    },
  },
});
