<template>

  <div @click="toggleBurger" :class="{ open: isMenu }" id="nav-icon4">
    <span></span>
    <span></span>
    <span></span>
  </div>


</template>


<script>
export default {
  name: 'burger-btn',
  props: {
    isMenu: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleBurger() {
      this.isOpen = !this.isOpen
      this.$emit('toggleMenu');
    }

  }
}



</script>

<style scoped>
#nav-icon4 {
  @apply mt-[5.5%] w-20 h-20;
  scale: 59%;
  left: 15vw;
  position: relative;
  /* margin: 1rem auto; */
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

#nav-icon4 span {
  height: 0.3rem;
  display: block;
  position: absolute;
  width: 100%;
  background: white;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}


#nav-icon4 span:nth-child(1) {
  top: 0rem;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(2) {
  top: 1rem;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4 span:nth-child(3) {
  top: 2rem;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon4.open {
  scale: 52%;

}

#nav-icon4.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: -1rem;
  left: 2vw;
}

#nav-icon4.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

#nav-icon4.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 2.5rem;
  left: 2vw;
}

/**/
/* @media(max-width: 375px) { */
/**/
/*   #nav-icon4 span, */
/*   #nav-icon4.open span:nth-child(3), */
/*   #nav-icon4.open span:nth-child(1) { */
/*     left: 17rem; */
/**/
/*   } */
/* } */
/**/
/* @media(max-width: 320px) { */
/**/
/*   #nav-icon4 span, */
/*   #nav-icon4.open span:nth-child(3), */
/*   #nav-icon4.open span:nth-child(1) { */
/*     left: 13rem; */
/**/
/*   } */
/* } */


@media (min-width: 500px) {
  #nav-icon4 {
    @apply hidden;
    z-index: 999;
  }
}
</style>
