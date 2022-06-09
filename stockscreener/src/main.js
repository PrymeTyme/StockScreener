import { createApp } from 'vue'
import App from './App.vue'
import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import Stock from "highcharts/modules/stock";
Stock(Highcharts);

const app = createApp(App)
app.use(HighchartsVue)
app.mount('#app')
