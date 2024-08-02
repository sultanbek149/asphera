<template>
  <transition name="fade">
    <nav ref="nav" v-show="isMenu" :class="{ isHovered }">
      <img ref="logo" id="logo" src="@/assets/icons/asphera_black.png" alt="Demos logo" loading="lazy" />

      <ul id="links" class="inter">
        <div @mouseenter="openPreview(options[0].id)" @click="scrollTo(options[0].name)" class="linkWrapper">
          <li>
            <a @click.prevent href="#cases">{{ $t('navigation.header.cases') }}</a>
          </li>
          <div class="line"></div>
        </div>
        <div @mouseenter="openPreview(options[1].id)" @click="scrollTo(options[1].name)" class="linkWrapper">
          <li>
            <a @click.prevent href="#services">{{ $t('navigation.header.services') }}</a>
          </li>
          <div class="line"></div>
        </div>
        <div @mouseenter="openPreview(options[2].id)" @click="scrollTo(options[2].name)" class="linkWrapper">
          <li>
            <a @click.prevent href="#about">{{ $t('navigation.header.about') }}</a>
          </li>
          <div class="line"></div>
        </div>


        <a target="_blank" class="social" href="https://x.com/asphera_tech?s=21">
          <img id="twitter" src="../assets/icons/Xblack.png" alt="twitter icon" loading="lazy" />
        </a>
        <a target="_blank" class="social" href="https://t.me/asphera_tech">
          <img id="telegram" src="../assets/icons/tg.png" alt="telegram icon" loading="lazy" />
        </a>
      </ul>
      <div class="flex gap-4 items-center max-[722px]:justify-end max-[722px]:mr-5">
        <language-switcher />
        <my-button @click="scrollTo(options[3].name)" id="hire">{{ $t('buttons.hireUs') }}</my-button>
      </div>
    </nav>
  </transition>
</template>
<script>

export default {
  name: 'my-nav',
  props: {
    isMenu: Boolean,
    isHovered: Boolean,
  },
  data() {
    return {
      options: [
        { id: 0, name: 'cases' },
        { id: 1, name: 'services' },
        { id: 2, name: 'about' },
        { id: 3, name: 'contact' }
      ]
    }
  },
  methods: {
    openPreview(id) {
      if (window.innerWidth >= 722) {
        this.$store.commit('docs/setCurrentSectionId', id);
        this.$emit('openPreview');
      }
    },
    scrollTo(sectionId) {
      this.$emit('closeSideBar')
      const element = document.getElementById(sectionId)
      if (element) {
        let yOffset = -60

        if (window.innerWidth <= 722 && sectionId == this.options[1].name) {
          yOffset = -90;
        }

        if (window.innerWidth <= 722 && sectionId == this.options[0].name) {
          yOffset = 100

        }

        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

        console.log("OFFSET: " + yOffset)

        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    },
    startAnimation() {
      // Check if the screen width is more than 600px
      if (window.innerWidth >= 722) {
        // Trigger animation for large screens
        this.animateLargeScreen()
      }
    },
    animateLargeScreen() {
      const box = this.$refs.nav
      box.style.transition = 'transform 0.3s ease'
      box.style.transform = 'translateY(0%)'
      // Add any additional styling or animation setup here
    }
  },
  mounted() {
    //starts the animation for the navbar
    this.startAnimation()
  }
}
</script>

<style scoped>
nav {
  @apply text-xl bg-black bg-opacity-[0.75] w-[100vw] h-[100vh] fixed mt-[10vh];
  z-index: 1000;
}

#links {
  @apply flex flex-col justify-center items-end p-5;
}

.linkWrapper {
  @apply mb-8;
  transition: all 0.3s ease;
}

#logo {
  @apply hidden;
}

a {
  cursor: pointer;
}

#hire {
  @apply hidden;
}

.social {
  @apply hidden;
}

@media (min-width: 722px) {
  nav {
    @apply bg-black backdrop-blur-md bg-opacity-[21%] h-[4.5rem] mt-0 !important;
    transform: translateY(-50%);
  }

  nav.isHovered {
    @apply !bg-opacity-[1];
  }

  #links {
    @apply flex-row justify-center items-center gap-5;
  }

  .linkWrapper {
    @apply mb-0 rounded-full bg-[#131313] bg-opacity-25 p-2 px-4;
  }

  .line {
    @apply hidden;
  }

  .chosen {
    @apply font-normal;
  }

  @media (hover: hover) {

    .linkWrapper,
    .social:hover {
      @apply scale-110;
    }
  }
}

@media (min-width: 722px) {
  #links {
    @apply p-0 gap-[0.25rem] !important;
    scale: 85%;
  }

  .linkWrapper {
    @apply px-[0.5rem];
    transition: all 0.5s ease;
  }

  .linkWrapper:hover {
    @apply bg-white text-black;
  }

  nav {
    @apply flex justify-between px-[1rem] items-center;
  }

  ul,
  a {
    /* @apply font-bold; */
  }

  .linkWrapper a {
    font-weight: 600;
  }

  /*
  ul {
    @apply bg-black bg-opacity-30 p-1 rounded-full;
  }
  */
  #hire {
    @apply block;
  }

  #logo {
    @apply block w-[45px];
    /* aspect-ratio: 7/1.5; */
  }

  .social:first-child {
    margin-left: 5px;
  }

  .social {
    @apply flex h-[3rem] items-center justify-center text-center;
    aspect-ratio: 1;
    transition: all 0.3s ease;
  }

  .social img {
    @apply w-[30px];
  }
}

@media (min-width: 1000px) {
  #links {
    @apply gap-[1.25rem] !important;
  }

  .linkWrapper {
    @apply px-[1.5rem] !important;
  }
}

.chosen {
  @apply font-black;
}

.line {
  @apply absolute w-[100vw] h-[0.1rem] bg-white right-0 mt-1 bg-opacity-20;
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
  animation: fadeIn 0.2s ease;
}

.fade-leave-active {
  animation: fadeOut 0s ease forwards;
}
</style>
