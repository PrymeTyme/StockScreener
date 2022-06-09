<template>
  <div class="outerLayout">
    <Header title="Stock Screener" />
    <div class="mainCol">
      <div class="chartCol">
        <Chart />
        <Chart />
      </div>
      <div class="vertL">
        <div v-for="item in items" :key="item">{{ item }}</div>
      </div>
    </div>
    <div class="footer">Horizontal List</div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Chart from "./components/Chart.vue";
import Item from "./components/VerticalList.vue";
import { getData } from "./data.js";

export default {
  name: "app",
  data() {
    return {
      Item,
      items: getData(50),
    };
  },
  components: {
    Header,
    Chart,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap");
body {
  font-family: "Poppins", sans-serif;
}
.outerLayout {
  display: grid;
  grid-template-rows: 10% 70% 20%;
  overflow: auto;
  border: 1px solid steelblue;
  border-radius: 5px;
  padding: 5px;
  margin: 5%;
  margin-top: 5px;
}

.mainCol {
  display: grid;
  grid-template-columns: 70% 30%;
  border: 1px solid steelblue;
  border-radius: 5px;
}

.chartCol {
  height: fit-content;
  display: grid;
  grid-template-columns: 50% 50%;
}

.footer {
  height: fit-content;
}

.vertL {
  overflow-y: scroll;
  max-height: 400px;
}
</style>
