<script setup lang="ts">
import { ref } from "vue";
import request from "../serve/index";
defineProps<{ msg: string }>();
const count = ref(0);
request.get("");

const source = new EventSource("api/sse");
debugger;
source.onopen = function (event) {
  debugger;
};

source.onmessage = function (event) {
  
 console.log(event);
 debugger
};
</script>

<template>
  <div class="flex justify-center flex-col items-center mt-5">
    <h1 class="bg-red-500 cursor-pointer text-lg font-mono">{{ msg }}</h1>
    <p class="text-center mt-10">{{ count }}</p>
    <button
      class="
        rounded-full
        h-24
        w-24
        flex
        items-center
        justify-center
        bg-indigo-500
        mt-10
      "
      type="button"
      @click="count++"
    >
      加1
    </button>
  </div>
</template>
