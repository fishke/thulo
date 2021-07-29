import { createApp } from "vue";
import "./css/tailwind.css";
import router from "./routes";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
