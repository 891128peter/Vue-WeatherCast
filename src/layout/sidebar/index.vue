<template>
  <div class="sidebar">
    <router-link to="/home" class="nav-btn">首頁</router-link>
    <router-link to="/weatherForecast36Hr" class="nav-btn"
      >今明36小時內天氣預報</router-link
    >
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column; /* 直向排列 */
  gap: 10px; /* 元素間距 */
  padding: 20px;
  background-color: #34495e;
  color: #fff;
  height: 100%;
}

.nav-btn {
  display: block;
  padding: 10px 15px;
  text-align: left;
  background-color: #2c3e50;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.nav-btn:hover {
  background-color: #1abc9c;
}
</style>
