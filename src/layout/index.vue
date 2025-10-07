<template>
  <div class="layout">
    <div class="headerBar">
      <button class="sidebarControl" @click="sidebarActive = !sidebarActive">
        &#9776;
      </button>
      <Header class="header" />
    </div>
    <div class="content">
      <Sidebar class="sidebar" :class="{ active: sidebarActive }" />
      <Main class="main" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "./header/index.vue";
import Sidebar from "./sidebar/index.vue";
import Main from "./main/index.vue";

const sidebarActive = ref(false);
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 滿版高度 */
}

.headerBar {
  display: flex;
  align-items: center;
  background-color: #2c3e50;
}

.sidebarControl {
  display: none;
  width: 30px;
  height: 30px;
  margin: 0 20px;
  background-color: #3c556e;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.header {
  height: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.content {
  flex: 1;
  display: flex;
  overflow: hidden;
  position: relative;
}

.sidebar {
  width: 200px;
  background-color: #34495e;
  color: #fff;
  padding: 20px 10px;
  overflow-y: auto;
}

.main {
  flex: 1;
  background-color: #f5f7fa;
  padding: 20px;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .sidebarControl {
    display: block;
  }
  .header {
    padding-left: 0px;
  }
  .sidebar {
    height: 100%;
    position: absolute;
    left: -220px;
    transition: left 0.3s ease;
  }
  .sidebar.active {
    left: 0;
  }
}
</style>
