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
    nav: [
      { text: "Home", link: "/" },
      { text: "Digital Garden", link: "/wiki/" },
    ],

    sidebar: [
      {
        items: [{ text: "Introduction", link: "/wiki/" }],
      },
    ],
  },
});
