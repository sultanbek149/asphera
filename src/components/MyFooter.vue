<template>
  <footer ref="footer">
    <img ref="logo" id="logo" src="../assets/icons/logo.png" alt="Demos logo" loading="lazy" />

    <p id="copyright" class="inter">© 2024 ASPHERA</p>

    <div id="socialWrapper">
      <a target="_blank" class="social" href="https://telegram.com/a">
        <img id="telegram" src="../assets/icons/telegram.png" alt="telegram icon" loading="lazy" />
      </a>
      <a class="social" href="https://twitter.com/" target="_blank">
        <img id="twitter" src="../assets/icons/twitter.png" alt="twitter icon" loading="lazy" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'my-footer'
}
</script>

<style scoped>
footer {
  @apply flex justify-between px-[1rem] items-center w-[100vw] h-[2.5rem];
}

#logo {
  @apply block h-[35%] w-auto;
  aspect-ratio: 7/1.5;
}

#copyright {
  @apply font-thin text-[0.5rem] self-end mb-3;
}

#socialWrapper {
  @apply flex justify-center items-center;
}

.social {
  @apply block h-[2rem];
  aspect-ratio: 1;
  transition: all 0.3s ease;
}

@media (hover: hover) {
  .social:hover {
    @apply scale-110;
  }
}

@media (min-width: 1024px) {
  footer {
    @apply h-[4.5rem];
  }

  #copyright {
    @apply text-[0.8rem];
  }

  .social {
    @apply h-[4rem];
  }
}
</style>
