<template>
  <footer ref="footer">
    <img ref="logo" id="logo" src="@/assets/icons/asphera_black.png" alt="Demos logo" loading="lazy" />

    <p id="copyright" class="inter">© 2024 ASPHERA</p>

    <div id="socialWrapper" class="max-md:gap-6">
      <a target="_blank" class="social" href="https://t.me/asphera_tech">
        <img id="telegram" src="../assets/icons/tg.png" alt="telegram icon" loading="lazy" />
      </a>
      <a class="social" href="https://x.com/asphera_tech?s=21" target="_blank">
        <img id="twitter" src="../assets/icons/Xblack.png" alt="twitter icon" loading="lazy" />
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
  @apply flex justify-between px-[1rem] items-center w-[100vw] h-[3.5rem];
}

#logo {
  @apply relative min-[768px]:w-[45px] w-[30px];
  /* aspect-ratio: 7/1.5; */
}

#copyright {
  @apply font-thin text-[0.5rem] self-end mb-4;
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
    @apply flex h-[3rem] items-center text-center;
  }

  .social img {
    @apply w-[35px];
  }

  .social + .social {
    margin-left: 10px;
  }
}
</style>
