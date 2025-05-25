import DefaultTheme from "vitepress/theme";
import { EnhanceAppContext } from "vitepress";
import { inject } from "@vercel/analytics";
import "@catppuccin/vitepress/theme/mocha/rosewater.css";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
    inject();
  },
};
