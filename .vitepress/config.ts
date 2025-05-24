import { defineConfig } from "vitepress";

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ["tunnel-3000.binzek.com"],
    },
  },

  title: "binzek",
  description: "",

  themeConfig: {
    logo: "/icon.png",

    nav: [
      { text: "Digital Garden", link: "/wiki/" },
      { text: "Projects", link: "/projects/" },
      { text: "Blog", link: "/blog/" },
      { text: "Contact", link: "/contact/" },
    ],

    sidebar: [
      {
        items: [{ text: "Introduction", link: "/wiki/" }],
      },
    ],
  },
});
