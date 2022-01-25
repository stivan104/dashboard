<template>
  <RatePanel
    v-for="ratePair in ratePairs"
    :key="ratePair.id"
    :pair="ratePair"
  ></RatePanel>
</template>

<script>
import RatePanel from "./components/RatePanel";
import { usePairsStore } from "@/store/pairsStore";

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
};
</script>

<style></style>
