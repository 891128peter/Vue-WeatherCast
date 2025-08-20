<template>
  <div class="home-page">
    <h1>🌤️ 歡迎來到天氣小幫手！</h1>
    <p class="subtitle">查看最新的 36 小時內天氣資訊，隨時掌握天氣動態。</p>

    <div class="actions">
      <router-link to="/weatherForecast36Hr" class="btn"
        >查看天氣預報</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;
  text-align: center;
  background: linear-gradient(135deg, #89f7fe, #66a6ff); /* 漸層背景 */
  color: #2c3e50;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #34495e;
}

.actions .btn {
  background-color: #1abc9c;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.actions .btn:hover {
  background-color: #16a085;
}
</style>
