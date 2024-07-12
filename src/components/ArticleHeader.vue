<template>
  <div class="socialHeader">
    <a target="_blank" class="social" href="https://web.telegram.org/a/">
      <img id="telegram" src="../assets/icons/telegram.png" alt="telegram icon" loading="lazy" />
    </a>
    <a class="social" href="https://twitter.com/" target="_blank">
      <img id="instagram" src="../assets/icons/twitter.png" alt="instagram icon" loading="lazy" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'art-header'
}
</script>

<style scoped>
.socialHeader {
  @apply fixed bottom-0 bg-black border-t-2 border-opacity-20 border-t-[#373737] pr-2 w-full flex flex-row justify-end items-center gap-5;
  z-index: 10000;
}

.social {
  @apply block h-[3rem];
  aspect-ratio: 1;
  transition: all 0.3s ease;
}
</style>
