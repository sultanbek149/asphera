<template>
  <div class="prevBigWrapper">
    <h3 class="prevTitle">{{ title }}</h3>
    <h4 class="prevTeaser">{{ teaser }}</h4>
  </div>

</template>


<script>
export default {
  name: 'prev-big',
  props: {
    title: String,
    teaser: String,
  }

}

</script>


<style scoped>
.prevBigWrapper {
  @apply gap-2 flex flex-col justify-start items-start p-5 h-[100%];
  /* transition: background-image 1s ease; */
  cursor: pointer;
  border: 2px solid #2A2A2C;
  border-radius: 20px;
}

.prevBigWrapper:first {
  @apply ml-5;
}


.prevTitle {
  @apply text-2xl text-white font-normal;
  transition: all 0.3s ease;
}

.prevTeaser {
  @apply text-xl text-[#9A9A9A];
  transition: all 0.3s ease;
}



.prevBigWrapper:hover>.prevTeaser {}

.prevBigWrapper:hover {
  background-image: url('@/assets/icons/grid.png');
  background-repeat: no-repeat;
  background-size: 101% 101%;
  background-position: center center;
  overflow: hidden;
}

.prevBigWrapper:hover>.prevTitle {
  /* @apply text-black; */
}
</style>
