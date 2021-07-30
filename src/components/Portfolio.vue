<template>
  <div
    class="
      bg-green-500 bg-opacity-40
      shadow-lg
      rounded-xl
      backdrop-filter backdrop-opacity-50 backdrop-grayscale backdrop-blur-lg
      lg:max-w-lg
      p-4
      text-white
      flex flex-col
      sm:flex-row
      center
    "
  >
    <div class="lg:w-1/3">
      <profile />
    </div>
    <div class="lg:w-2/3">
      <terminal />
    </div>
  </div>
</template>

<script setup>
import Profile from "./Profile.vue";
import Terminal from "./Terminal.vue";
</script>

<style scoped>
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
