<template>
  <div>
    <div v-if="weather">
      <h2>全台36小時天氣預報</h2>
      <p>資料來源：中央氣象局</p>
      <p>
        資料時間：{{ weather[0].periods[timeIndex]?.startTime }} ~
        {{ weather[0].periods[timeIndex]?.endTime }}
      </p>
      <div class="time-buttons">
        <button @click="timeIndex = 0" :class="{ active: timeIndex === 0 }">
          {{ getTime()?.time1 }}
        </button>
        <button @click="timeIndex = 1" :class="{ active: timeIndex === 1 }">
          {{ getTime()?.time2 }}
        </button>
        <button @click="timeIndex = 2" :class="{ active: timeIndex === 2 }">
          {{ getTime()?.time3 }}
        </button>
      </div>

      <table border="1" cellspacing="0" cellpadding="5">
        <thead>
          <tr>
            <th>縣市</th>
            <th>天氣</th>
            <th>最低溫 (°C)</th>
            <th>最高溫 (°C)</th>
            <th>降雨機率 (%)</th>
            <th>舒適度指數</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cityWeather in weather" :key="cityWeather.city">
            <td>{{ cityWeather.city }}</td>
            <td>{{ cityWeather.periods[timeIndex]?.weather }}</td>
            <td>{{ cityWeather.periods[timeIndex]?.minT }}</td>
            <td>{{ cityWeather.periods[timeIndex]?.maxT }}</td>
            <td>{{ cityWeather.periods[timeIndex]?.pop }}</td>
            <td>{{ cityWeather.periods[timeIndex]?.comfort }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>載入中或查無資料</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getAll36HrForecast } from "@/apis/weatherService";
import type { Forecast36Hr } from "@/types/weather";
import { getTime } from "@/utils/times";

const weather = ref<Forecast36Hr[] | null>(null);

const timeIndex = ref(0);

onMounted(async () => {
  const weathers = await getAll36HrForecast();
  weather.value = weathers;
  console.log("全台縣市資料：", weather.value);
});
</script>

<style scoped>
h2 {
  text-align: center;
  margin: 1rem 0;
  color: #2c3e50;
}

p {
  text-align: center;
  color: #555;
  margin: 0.2rem 0 1rem 0;
}

.time-buttons {
  display: flex;
  justify-content: center; /* 水平置中 */
  margin-bottom: 1rem; /* 與下方表格留點間距 */
}

button {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #3498db;
  background: white;
  color: #3498db;
  cursor: pointer;
  border-radius: 4px;
}

button.active {
  background: #3498db;
  color: white;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: auto;
  font-size: 14px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

thead {
  background: #3498db;
  color: white;
}

th,
td {
  padding: 0.75rem;
  text-align: center;
  width: calc(100% / 6); /* 平分 6 欄 */
  word-wrap: break-word; /* 避免內容撐開 */
}

tbody tr:nth-child(even) {
  background: #f8f9fa;
}

tbody tr:hover {
  background: #eaf4ff;
}

td {
  color: #333;
}
</style>
