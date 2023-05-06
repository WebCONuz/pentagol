<script setup>
import Sidebar from "../components/Sidebar/Sidebar.vue";
</script>

<template>
  <div class="flex">
    <div class="w-[20%]">
      <Sidebar />
    </div>
    <div class="w-[80%] p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<style></style>
