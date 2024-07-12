<template>
  <transition name="fade">
    <div id="cover" v-if="isVisible"></div>
  </transition>
</template>

<script>
export default {
  name: 'bottom-cover',
  props: {
    isVisible: false
  }

}
</script>


<style scoped>
#cover {
  @apply fixed bottom-0 w-[100vw] h-[100vh] bg-black backdrop-blur-md bg-opacity-20;
  z-index: 100;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.fade-enter-active {
  animation: fadeIn 0.3s ease;
}

.fade-leave-active {
  animation: fadeOut 0.3s ease forwards;
}
</style>
