<template>
  <ul :class="{ expanded: id === $store.getters['docs/getCurrentSectionId'] }" class="headingFont font-[500]"
    id="dropdownWrapper">
    <p class="transition font-[700]" @click="expand">{{ name }}</p>
    <slot></slot>
  </ul>


</template>

<script>
export default {
  name: 'my-dropdown',
  props: {
    name: { type: String },
    id: { type: Number }
  },
  methods: {
    expand() {
      this.$store.commit('docs/setCurrentSectionId', this.id)
      this.$store.commit('docs/setCurrentPartId', -1)
    }
  },
}

</script>


<style scoped>
#dropdownWrapper {
  @apply p-2 border-l-2 border-l-[#373737] text-lg text-[#373737] h-10 overflow-hidden;
  cursor: pointer;
  transition: all 0.5s ease;
}

.expanded {
  @apply text-white h-fit !important;
  /* box-shadow: -13px 0px 20px -10px #373737; */
  transition: all 0.5s ease;
}

@media(max-width: 1200px) {
  .expanded {
    @apply h-[36rem] !important;
  }

}

@media(max-width: 500px) {
  .expanded {
    @apply h-[19rem] !important;
  }
}
</style>
