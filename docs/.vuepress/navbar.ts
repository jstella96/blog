import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  { text: "Today I Learned", icon: "read", link: "/TIL/" },
  { text: "Algorithm", icon: "condition", link: "/algorithm/" },
  { text: "My Toy Project", icon: "build", link: "/toy-project/" },
]);
