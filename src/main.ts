import { createApp } from "vue";

import Dashboard from "./Dashboard.vue";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(Dashboard).use(pinia).mount("#app");
