<template>
  <p @click="setNewActive" :class="{ active: isActive() }" class="headingFont innerLink">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'inner-link',
  props: {
    id: { type: Number },
    parentSectionId: { type: Number }
  },
  methods: {
    setNewActive() {
      this.$store.commit('docs/setCurrentPartId', this.id)
      this.$store.commit('docs/setCurrentArticle')
      this.$store.commit('docs/setCurrentPageInfo')
      this.$store.commit('docs/setCurrentNavigationHooks')

    },
    isActive() {
      let partId = this.$store.getters['docs/getCurrentPartId']

      let parentId = this.$store.getters['docs/getCurrentSectionId']


      let isSameParent = parentId == this.parentSectionId
      let isSamePart = partId == this.id

      return isSameParent == true && isSamePart == true
    }

  },
  computed: {
  }

}

</script>


<style scoped>
.innerLink {
  @apply text-[#373737] px-2 py-1;
  transition: all 0.3s ease;
}

@media(max-width: 800px) {
  .innerLink {
    @apply text-[0.9rem];
  }
}

@media (hover:hover) {
  .innerLink:hover {
    @apply text-white;
    font-weight: 400;
  }

  .innerLink:active {
    font-weight: 300;

  }
}

.active {
  @apply text-white;
  font-weight: 400;
}
</style>
