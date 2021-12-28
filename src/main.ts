import { createApp } from "vue";

import Dashboard from "./Dashboard.vue";
import { createStore } from "vuex";

createApp(Dashboard)
  .use(
    createStore({
      state() {
        return {
          ratePairs: [
            { id: 1, codeFrom: "HIVE", codeTo: "USD" },
            { id: 2, codeFrom: "Starbits", codeTo: "SWAP.HIVE" },
            { id: 3, codeFrom: "Sim", codeTo: "SWAP.HIVE" },
          ],
        };
      },
    })
  )
  .mount("#app");
