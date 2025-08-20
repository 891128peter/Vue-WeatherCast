<template>
  <RouterView v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<script setup lang="ts"></script>

<style scoped></style>
