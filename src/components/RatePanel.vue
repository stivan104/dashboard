<template>
  <div>Pair container for {{ pair.codeFrom }}-{{ pair.codeTo }}</div>
</template>

<script>
export default {
  name: "RatePanel",
  props: ["pair"],
};
</script>

<style scoped></style>
