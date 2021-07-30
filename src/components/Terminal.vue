<template>
  <div class="flex flex-col bg-black rounded-lg overflow-hidden h-full">
    <div
      class="bg-gray-800 text-sm p-2 flex justify-center items-center relative"
    >
      <div class="absolute top-4 left-2 flex items-center space-x-1">
        <div class="bg-yellow-500 p-1 rounded-full"></div>
        <div class="bg-green-500 p-1 rounded-full"></div>
        <div class="bg-red-500 p-1 rounded-full"></div>
      </div>
      <div class="flex">
        <span class="text-center">hannan@hannanmiah.me</span>
      </div>
    </div>
    <div v-if="consoleText" class="">
      <div
        v-for="display in consoleText"
        :key="display.id"
        class="flex flex-col bg-black p-1"
      >
        <h1 class="flex items-center before:block before:mr-2 before:h-3
            before:w-3
            before:border-l-0 before:border-b-0 before:border-t-2 before:border-r-2 before:border-blue-500
            before:transform
            before:rotate-45">{{ display.name }}</h1>
        <h2>{{ display.text }}</h2>
      </div>
    </div>
    <div class="bg-black flex p-1 items-center">
      <div class="bg-blue-500 text-sm">~/home</div>
      <div class="arrow"></div>
      <input
        @keyup.enter="execute"
        autofocus
        v-model="command"
        type="text"
        class="border-0 focus:ring-0 p-0 bg-black caret-red-600 text-green-500"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const command = ref("");
const consoleText = ref([]);
const commands = {
  about: "fullstack software developer",
  skills: "html,css,javascript,php,laravel,vuejs",
  contact: "hannanhridoy@gmail.com",
};

function execute() {
  if (!command.value) return;

  if (command.value in commands) {
    consoleText.value.push({
      id: new Date().getTime(),
      name: command.value,
      text: commands[command.value],
    });
  } else if (command.value === "clear") {
    consoleText.value = [];
  } else {
    consoleText.value.push({
      id: new Date().getTime(),
      name: command.value,
      text: "Invalid command or arguments passed! type help for options!",
    });
  }

  command.value = "";
}
</script>

<style scoped>
.arrow {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 10px solid rgb(59, 130, 246);
  border-bottom: 10px solid transparent;
  margin-right: 4px;
}
</style>
