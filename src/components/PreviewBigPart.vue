<template>
  <div class="prevBigWrapper">
    <h3 class="headingFont prevTitle">{{ title }}</h3>
    <h4 class="headingFont prevTeaser">{{ teaser }}</h4>
  </div>

</template>


<script>
export default {
  name: 'prev-big',
  props: {
    title: '',
    teaser: '',
  }

}

</script>


<style scoped>
.prevBigWrapper {
  @apply font-light gap-2 flex flex-col justify-start items-start p-5 w-[100%] h-[100%];
  transition: all 0.3s ease;
  cursor: pointer;
}

.prevTitle {
  @apply text-2xl text-white;
  transition: all 0.3s ease;
}

.prevTeaser {
  @apply text-xl text-[#9A9A9A];
  transition: all 0.3s ease;
}



.prevBigWrapper:hover>.prevTeaser {
  @apply text-[#171717];
}

.prevBigWrapper:hover {
  @apply bg-white;
}

.prevBigWrapper:hover>.prevTitle {
  @apply text-black;
}
</style>
