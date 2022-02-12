<template>
  <div class="pair">
    Pair container for {{ pair.uid }}:
    <b>{{ pair.rate }}</b>
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
  padding: 10px;
  margin: 10px;
  border: 2px solid black;
}
</style>
