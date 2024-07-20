<template>
  <button @touchstart="toggleActive" @touchend="toggleActive" :class="{ active: isActive }" class="w-[10rem] flex items-center pt-[4px] pb-2 rounded-3xl font-bold">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
}
</script>

<script setup>
import {ref} from 'vue'
const isActive = ref(false)

const toggleActive = () => isActive.value = !isActive.value

</script>

<style scoped>
button {
  background: -webkit-linear-gradient(225deg, rgb(251, 175, 21), rgb(251, 21, 242), rgb(21, 198, 251)) 0% 0% / 300% 300%;
  background-size: 200% auto;
  -webkit-animation: gradient_move 3s ease infinite;
  animation: gradient_move 3s ease infinite;
}



@media (hover: hover) {
  button {
    transition: all 0.3s ease;
  }

  button:hover {
    @apply scale-105;
  }

  button:active {
    @apply scale-100;
  }
}

@media (hover: none) {
  .active {
    @apply scale-95;
  }
}



@-webkit-keyframes gradient_move {
  0% {
    background-position: 0% 92%
  }

  50% {
    background-position: 100% 9%
  }

  100% {
    background-position: 0% 92%
  }
}

@keyframes gradient_move {
  0% {
    background-position: 0% 92%
  }

  50% {
    background-position: 100% 9%
  }

  100% {
    background-position: 0% 92%
  }
}
</style>
