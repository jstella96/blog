import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  { text: "Study Log", icon: "read", link: "/studylog/" },
  { text: "Algorithm", icon: "condition", link: "/algorithm/" },
  { text: "My Toy Project", icon: "build", link: "/toy-project/" },
]);
