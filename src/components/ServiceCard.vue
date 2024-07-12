<template>
  <button
    @click="$emit('toggleServiceInfo'), $emit('infoOpen'), expandWrapper()"
    class="shortService"
  >
    <h3 class="serviceHeadingFont" id="wrapperTitle">{{ title }}</h3>
    <img
      class="arrow"
      ref="arrow"
      src="../assets/icons/expandArrow.svg"
      alt="expand service arrow"
      loading="lazy"
    />
  </button>
  <div class="line"></div>
</template>

<script>
export default {
  name: 'service-card',
  emits: ['toggleServiceInfo', 'infoOpen'],
  data() {
    return {
      isOpen: false
    }
  },
  props: {
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    current: { type: String },
    isService: { type: Boolean }
  },
  watch: {
    isService(newValue, oldValue) {
      if (newValue == false && this.current == this.title) {
        this.expandWrapper()
      }
    }
  },
  methods: {
    expandWrapper() {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.rotateArrowUp()
      } else {
        this.rotateArrowDown()
      }
    },
    rotateArrowUp() {
      let arrow = this.$refs.arrow
      arrow.style.rotate = '-90deg'
    },
    rotateArrowDown() {
      let arrow = this.$refs.arrow
      arrow.style.rotate = '0deg'
    }
  }
}
</script>

<style scoped>
.line {
  @apply -mb-[1rem] bg-[rgb(9,9,9)] w-[100vw] h-1;
}
.arrow {
  transition: all 0.7s ease;
}
#wrapperTitle {
  @apply text-[2rem];
}
.shortService {
  @apply flex justify-between px-[2rem] items-center w-[100vw] h-[2rem];
  cursor: pointer;
}
.expanded {
  max-height: 90rem;
}
@media (min-width: 1200px) {
  .shortService {
    @apply my-[2rem] px-[4rem];
  }
  .line {
    @apply -mb-[2rem];
  }
  #wrapperTitle {
    @apply text-[3rem];
  }
  .arrow {
    scale: 200%;
  }
}
</style>
