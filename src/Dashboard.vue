<template>
  <RatePanel
    v-for="ratePair in ratePairs"
    :key="ratePair.id"
    :pair="ratePair"
  ></RatePanel>
</template>

<script>
import RatePanel from "./components/RatePanel";

export default {
  name: "App",
  components: { RatePanel },
  computed: {
    ratePairs() {
      return this.$store.state.ratePairs;
    },
  },
};
</script>

<style></style>
