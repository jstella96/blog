import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Display&family=Noto+Sans+KR&display=swap",
      },
    ],
  ],
  base: "/blog/",
  title: "J.Stella Blog",
  description: "J.Stella Blog",
  theme: hopeTheme({
    navbar:  [
      "/",
      { text: "Study Log", icon: "read", link: "/studylog/" },
      { text: "Algorithm", icon: "condition", link: "/algorithm/" },
      { text: "My Toy Project", icon: "build", link: "/toy-project/" },
    ],
    
    sidebar: {
      "/studylog/": "structure",
      "/algorithm/":"structure"
    },

    iconAssets: "iconfont",
    hostname: "",

    author: {
      name: "j.stella",
      url: "https://github.com/jstella96",
    },

    iconPrefix: "iconfont icon-",

    logo: "/myLogo.png",

    repo: "https://github.com/jstella96",

    docsDir: "demo/src",
    copyright: false, 
    editLink:false,
    lastUpdated:false,
    contributors:false,
  //
    footer: "© 2022 j.stellar powered by vue-press",

  
    
    displayFooter: true,
    //"Author",, "ReadingTime"
    pageInfo: [  "Date", "Category", "Tag"], 

    encrypt: {
      config: {
        "/studylog/aws": ["0218"],
        "/studylog/javascript/prototype.html": ["0218"],
      },
    },

    plugins: {
      blog: false,
      // you can also use Waline -?
      comment: {
        type: "giscus",
        repo: "jstella96/tech-blog",
        repoId: "R_kgDOHC3Xyg",
        category: "Announcements",
        categoryId: "DIC_kwDOHC3Xys4CPa5x",
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

  })

});
