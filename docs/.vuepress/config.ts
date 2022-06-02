import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/",

  dest: "./dist",

  head: [
  
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    
    ],
    // [
    //   "script",
    //   {
    //     src: "https://kit.fontawesome.com/ca37c296c5.js",
    //     crossorigin: "anonymous",
    //   },
    // ]
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "J.Stella Blog",
      description: "J.Stella Blog",
    },
  },

  themeConfig,
});
