import { defineStore } from "pinia";

export const usePairsStore = defineStore("pairsStore", {
  state: () => {
    return {
      /** @type {{ id: number, codeFrom: string, codeTo: string }[]} */
      ratePairs: [
        { id: 1, codeFrom: "HIVE", codeTo: "USD" },
        { id: 2, codeFrom: "Starbits", codeTo: "SWAP.HIVE" },
        { id: 3, codeFrom: "Sim", codeTo: "SWAP.HIVE" },
      ],
    };
  },
});
