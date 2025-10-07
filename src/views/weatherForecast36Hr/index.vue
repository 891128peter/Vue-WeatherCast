<template>
  <div>
    <div v-if="weather">
      <h1>全台36小時天氣預報</h1>
      <p>資料來源：中央氣象局</p>
      <p class="time-info">
        資料時間：
        <span class="time-range">
          {{ weather[0].periods[timeIndex]?.startTime }}
          <span class="sep"> ~ </span>
          {{ weather[0].periods[timeIndex]?.endTime }}
        </span>
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

      <div class="weather-table">
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
              <td data-label="縣市:">{{ cityWeather.city }}</td>
              <td data-label="天氣:">
                {{ cityWeather.periods[timeIndex]?.weather }}
              </td>
              <td data-label="最低溫:">
                {{ cityWeather.periods[timeIndex]?.minT }} °C
              </td>
              <td data-label="最高溫:">
                {{ cityWeather.periods[timeIndex]?.maxT }} °C
              </td>
              <td data-label="降雨機率:">
                {{ cityWeather.periods[timeIndex]?.pop }} %
              </td>
              <td data-label="舒適度:">
                {{ cityWeather.periods[timeIndex]?.comfort }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
});
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 1rem 0;
  color: #2c3e50;
  font-size: 1.8rem;
}

p {
  text-align: center;
  color: #555;
  margin: 0.2rem 0;
}

.time-info {
  text-align: center;
  color: #555;
}

.time-range {
  white-space: nowrap; /* 桌機時不換行 */
}

.time-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
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

@media (max-width: 768px) {
  .time-info {
    margin-top: 0.3rem;
  }
  .time-range {
    display: block;
    margin-top: 0.3rem;
  }

  button {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }

  .weather-table table,
  .weather-table thead,
  .weather-table tbody,
  .weather-table th,
  .weather-table tr,
  .weather-table td {
    display: block;
  }

  .weather-table thead {
    display: none;
  }

  .weather-table tr {
    background: #f9f9f9;
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
  }

  .weather-table td {
    border: none;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    width: 100%;
    font-size: 1.3rem;
  }

  .weather-table td::before {
    content: attr(data-label);
  }
}
</style>
