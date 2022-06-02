import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "",

  author: {
    name: "j.stella",
    url: "https://github.com/jstella96",
  },

  iconPrefix: "iconfont icon-",

  logo: "/myLogo.png",

  repo: "https://github.com/jstella96",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,
//© 2022 j.stellar powered by vue-press
  footer: "",

  displayFooter: true,
  //"Author",, "ReadingTime"
  pageInfo: [ "Original", "Date", "Category", "Tag"], 

  encrypt: {
    config: {
      "/studylog/designing-data-intensive-application": ["0218"],
      "/studylog/aws": ["0218"],
      "/studylog/javascript/prototype.html": ["0218"],
    },
  },

  plugins: {
    blog: false,
    
    // you can also use Waline -?
    comment: {
      type: "giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
    pwa: {
      favicon: "/myLogo.ico",
      manifest: {
        theme_color:"#BD8F8F", 
      }
    },

  },

  themeColor: {
    //roseBrown: "#BD8F8F",
    spanishGray: "#666666",
  },

});
