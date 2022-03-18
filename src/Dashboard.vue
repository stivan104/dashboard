<template>
  <RatePanel
    v-for="ratePair in ratePairs"
    :key="ratePair.uid"
    :pair="ratePair"
  ></RatePanel>
</template>

<script>
import RatePanel from "./components/RatePanel";
import { usePairsStore } from "@/store/PairsStore";

export default {
  data: () => {
    const pairsStore = usePairsStore();
    return {
      ratePairs: pairsStore.ratePairs,
    };
  },
  components: {
    RatePanel: RatePanel,
  },
  setup: () => {
    //Game cron ^^ - change to setInterval if you want periodic and setTimeout if you want it once for debugging
    setInterval(() => {
      const pairStore = usePairsStore();
      pairStore.updateRates();
    }, 5000);
  },
};
</script>

<style></style>
