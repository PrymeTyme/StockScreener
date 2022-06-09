<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "app-header",
  props: {
    title: String,
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
}
</style>
