<template>
  <div class="pair">
    Pair container for {{ pair.codeFrom }}-{{ pair.codeTo }}
  </div>
</template>

<script>
export default {
  name: "RatePanel",
  props: ["pair"],
};
</script>

<style scoped>
.pair {
  border: 2px solid black;
}
</style>
