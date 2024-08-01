<template>
  <div class="prevSmallWrapper">
    <h3 class="prevTitle">{{ title }}</h3>
  </div>

</template>


<script>
export default {
  name: 'prev-small',
  props: {
    title: String
  }

}

</script>


<style scoped>
.prevSmallWrapper {
  @apply font-medium gap-2 flex flex-col justify-center items-start p-5 w-[100%] h-[100%] text-[1.2rem];
  transition: all 0.3s ease;
  cursor: pointer;
}

.prevTitle {
  @apply text-xl text-white;
  transition: all 0.3s ease;
}

.prevSmallWrapper:hover {
  @apply bg-white;
  /* background-image: url('@/assets/icons/grid.png');
    background-repeat: no-repeat;
    background-size: 101%;
    background-position: center center;
    overflow: hidden; */
}

.prevSmallWrapper:hover>.prevTitle {
  @apply text-black;
}
</style>
