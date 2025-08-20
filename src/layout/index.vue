<template lang="">
  <div class="layout">
    <Header class="header" />
    <div class="content">
      <Sidebar class="sidebar" />
      <Main class="main" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./header/index.vue";
import Sidebar from "./sidebar/index.vue";
import Main from "./main/index.vue";
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 滿版高度 */
}

.header {
  height: 60px;
  background-color: #2c3e50; /* 深色 header */
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.content {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.sidebar {
  width: 200px;
  background-color: #34495e; /* 偏灰藍 */
  color: #fff;
  padding: 20px 10px;
  overflow-y: auto;
}

.main {
  flex: 1;
  background-color: #f5f7fa; /* 淺灰背景 */
  padding: 20px;
  overflow-y: auto;
}
</style>
