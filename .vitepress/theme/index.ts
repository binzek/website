import DefaultTheme from "vitepress/theme-without-fonts";
import { EnhanceAppContext } from "vitepress";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import "@catppuccin/vitepress/theme/mocha/rosewater.css";
import "./fonts.css";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    DefaultTheme.enhanceApp(ctx);
    inject();
    injectSpeedInsights();
  },
};
