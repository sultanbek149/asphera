<template>
  <div ref="sideBar" id="sideBarWrapper">
    <h1 id="sideTitle" class="headingFont">Asphera docs</h1>

    <button id="expandBtn" loading="lazy" aria-label="Expand side bar button" @click="toggleSideBar">
      <img id="arrowImg" ref="arrow" src="../assets/icons/expandArrow.svg" alt="Arrow icon" />
    </button>
    <div id="sideLinksWrapper">
      <my-dropdown :id="section.id" :name="section.name" v-for="section in sectionNames">
        <inner-link @click="changeArticle" :parentSectionId="section.id" :id="part.id"
          v-for="part in getCurrentParts()">{{ part.name
          }}</inner-link>
      </my-dropdown>
    </div>

  </div>


</template>

<script>
export default {
  name: 'side-bar',
  data() {
    return {
      sectionNames: [
        { 'id': 0, 'name': 'Cases' },
        { 'id': 1, 'name': 'Services' },
        { 'id': 2, 'name': 'About' }
      ],
      isSideBarOpen: false,

    }
  },
  methods: {
    toggleSideBar() {
      let sidebar = this.$refs.sideBar

      if (this.isSideBarOpen === false) {
        sidebar.style.transform = 'translateX(0%)'
        this.rotateArrowUp()
      } else {
        sidebar.style.transform = 'translateX(-100%)'
        this.rotateArrowDown()
      }

      this.isSideBarOpen = !this.isSideBarOpen

    },
    rotateArrowUp() {
      let arrow = this.$refs.arrow
      arrow.style.rotate = '-180deg'
    },
    rotateArrowDown() {
      let arrow = this.$refs.arrow
      arrow.style.rotate = '0deg'
    },

    changeArticle() {
      this.$emit('changeArticle')
    },
    getCurrentParts() {
      let section = this.$store.getters['docs/getCurrentSectionParts']
      console.log(section.parts)
      return section.parts;
    }

  }
}

</script>


<style scoped>
#sideBarWrapper {
  /* @apply fixed left-0 top-0 mb-20 flex flex-col justify-start items-start gap-10 font-light h-fit w-[20%] p-5 ml-10; */
  @apply mb-20 flex flex-col justify-start items-start gap-10 font-light h-fit w-[25%] p-5;
}

#sideTitle {
  @apply font-bold text-xl text-white;
}

#sideLinksWrapper {
  @apply mt-2 flex flex-col justify-between items-start gap-3 h-fit w-full;
}

#expandBtn {
  @apply hidden;
}

#arrowImg {
  transform: rotate(-55deg);
  transition: all 0.5s ease;
}

@media(max-width: 500px) {
  #sideBarWrapper {
    @apply w-[50%] h-[100vh] fixed bg-black;
    z-index: 1000;
    transform: translateX(-100%);
    transition: all 0.5s ease;
  }

  #sideLinksWrapper {
    @apply -ml-[2.75rem] !important;
  }

  #expandBtn {
    @apply bg-black rounded-r-md w-10 h-10 pr-2 flex justify-end items-center absolute top-[1%] right-[-16%] !important;
    transition: all 0.5s ease;
  }
}

@media(min-height: 950px) {
  #sideBarWrapper {
    @apply fixed;

  }
}

@media (max-width: 1200px) {
  #sideBarWrapper {
    @apply ml-0;
  }

  #sideLinksWrapper {
    @apply -ml-7;
  }
}

@media(min-width:1300px) {
  #sideBarWrapper {
    @apply fixed;
  }
}
</style>
