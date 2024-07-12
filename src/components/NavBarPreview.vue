<template>
  <transition name="fade">
    <div v-show="isVisible" id="previewWrapper">
      <prev-big @click="goToAbout(0)" id="prevFirst" :teaser="getTeaser" :title="getCurrentSection[0].name"></prev-big>
      <prev-big @click="goToAbout(1)" id="prevSecond" class="big" :teaser="getTeaser"
        :title="getCurrentSection[1].name"></prev-big>

      <prev-small @click="goToAbout(2)" :title="getCurrentSection[2].name" id="prevCaseFirst"></prev-small>
      <prev-small @click="goToAbout(3)" :title="getCurrentSection[3].name" id="prevCaseSecond"></prev-small>
      <prev-small @click="goToAbout(4)" :title="getCurrentSection[4].name" id="prevCaseThird"></prev-small>
    </div>

  </transition>
</template>

<script>
export default {
  name: 'nav-preview',
  data() {
    return {
      isOnHover: false,
    }
  },
  props: {
    isVisible: { type: Boolean },
  },
  methods: {

    goToAbout(id) {
      this.$store.commit('docs/setCurrentPartId', id)
      this.$store.commit('docs/setCurrentArticle')
      this.$store.commit('docs/setCurrentPageInfo')
      this.$store.commit('docs/setCurrentNavigationHooks')

      this.$router.push('/about')
    }
  }, computed: {
    getCurrentSection() {
      let section = this.$store.getters['docs/getCurrentSectionParts']
      return section.parts;
    },
    getTeaser() {
      let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est.'
      return lorem;
    }
  }
}
</script>

<style scoped>
#previewWrapper {
  @apply opacity-0 fixed top-0 mt-[4.5rem] h-64 w-full bg-black backdrop-blur-md bg-opacity-[20%] border-y-[#373737] border-y-2;
  z-index: 1000;
  @apply grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
}

#prevFirst {
  grid-column: 1;
  grid-row: 1 / span 3;
}

#prevSecond {
  grid-column: 2;
  grid-row: 1 / span 3;
  @apply border-x-[#373737] border-x-2;
}

#prevCaseFirst {
  grid-column: 3;
  grid-row: 1;
}

#prevCaseSecond {
  grid-column: 3;
  grid-row: 2;
  @apply border-y-[#373737] border-y-2;
}

#prevCaseThird {
  grid-column: 3;
  grid-row: 3;
}









/* 56 */

@media (min-width: 722px) {
  #previewWrapper {
    @apply opacity-100;
  }
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
