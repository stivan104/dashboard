import { defineStore } from "pinia";
import { RatePair } from "@/model/RatePair";
import { BogusRateProvider } from "@/model/RateProviders/BogusRateProvider";

export const usePairsStore = defineStore({
  //TODO: Move id to first param of defineStore when compatible with IntelliJ IDEs
  id: "pairsStore", //Old way of defining store, but required to enable intellisense on IntelliJ IDEs
  state: () => {
    return {
      //TODO: Find a way to make this guaranteed unique
      ratePairs: [
        new RatePair("HIVE", "USD", new BogusRateProvider()),
        new RatePair("Starbits", "SWAP.HIVE", new BogusRateProvider()),
        new RatePair("Sim", "SWAP.HIVE", new BogusRateProvider()),
      ],
    };
  },
  actions: {
    updateRates(): void {
      for (const pair of this.ratePairs) {
        pair.updateRate();
      }
    },
  },
});
