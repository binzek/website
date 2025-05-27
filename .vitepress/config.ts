import { defineConfig } from "vitepress";

export default defineConfig({
  title: "binzek",
  titleTemplate: false,
  description:
    "Explore the digital home of Abdul Wajid [binzek] - a space for curated ideas in the digital garden, rare long-form writings, a showcase of variety of projects, and more.",

  head: [
    ["link", { rel: "icon", href: "/icon.png" }],
    [
      "meta",
      {
        name: "og:title",
        content:
          "Abdul Wajid [binzek] ~ A thinker who builds, a builder who cares.",
      },
    ],
  ],

  themeConfig: {
    logo: "/icon.png",

    nav: [
      { text: "Digital Garden", link: "/wiki/" },
      { text: "Projects", link: "/projects/" },
      { text: "Blog", link: "/blog/" },
      { text: "Contact", link: "/contact/" },
    ],

    search: {
      provider: "local",
    },

    sidebar: {
      "/wiki/": [
        {
          text: "Introduction",
          items: [
            { text: "👋 Welcome", link: "/wiki/" },
            { text: "🌻 Digital Garden", link: "/wiki/digital-garden" },
            { text: "🙋‍♂️ About Me", link: "/wiki/about-me" },
          ],
        },
      ],

      "/blog/": [
        {
          items: [{ text: "Mindful Laughter", link: "/blog/mindful-laughter" }],
        },
      ],
    },

    footer: {
      message:
        "Powered by <a href='https://vitepress.dev/' target='_blank' rel='noopener'>VitePress</a>",
    },
  },

  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },
});
