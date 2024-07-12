<template>
  <button @touchstart="toggleActive" @touchend="toggleActive()" :class="{ active: isActive }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style scoped>
button {
  @apply w-[10rem] h-9 rounded-3xl;
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
