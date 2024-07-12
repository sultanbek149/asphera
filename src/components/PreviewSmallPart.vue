<template>
  <div class="prevSmallWrapper">
    <h3 class="headingFont prevTitle">{{ title }}</h3>
  </div>

</template>


<script>
export default {
  name: 'prev-small',
  props: {
    title: '',
  }

}

</script>


<style scoped>
.prevSmallWrapper {
  @apply font-light gap-2 flex flex-col justify-start items-start p-5 w-[100%] h-[100%];
  transition: all 0.3s ease;
  cursor: pointer;
}

.prevTitle {
  @apply text-2xl text-white;
  transition: all 0.3s ease;
}

.prevSmallWrapper:hover {
  @apply bg-white;
}

.prevSmallWrapper:hover>.prevTitle {
  @apply text-black;
}
</style>
