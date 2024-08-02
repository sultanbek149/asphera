<template>
  <div class="bentoGrid">
    <div class="gridFirst">
      <div class="a">
        {{ $t("whoWeAre.subtitle") }}
      </div>
      <div :style="{ backgroundImage: `url(${Tr.currentLocale === 'en' ? y2En : y2Ru})` }" class="b"></div>
      <div :style="{ backgroundImage: `url(${Tr.currentLocale === 'en' ? plus50En : plus50Ru})` }" class="c"></div>
    </div>
    <div class="gridSecond">
      <div class="one"><img loading="lazy" :src="`${Tr.currentLocale === 'en' ? x3En : x3Ru}`" alt=""></div>
      <div class="two"><img loading="lazy" :src="`${Tr.currentLocale === 'en' ? En14 : Ru14}`" alt=""></div>
      <div class="three"><img loading="lazy" :src="`${Tr.currentLocale === 'en' ? plus20En : plus20Ru}`" alt="">
      </div>
      <div class="four"><img loading="lazy" :src="`${Tr.currentLocale === 'en' ? x25En : x25Ru}`" alt=""></div>
    </div>
  </div>

</template>
<script setup>
import Tr from '@/i18n/translation'
import y2Ru from '@/assets/icons/2yRu.png'
import y2En from '@/assets/icons/2yEn.png'
import plus50Ru from '@/assets/icons/50+Ru.png'
import plus50En from '@/assets/icons/50+En.png'
import x3Ru from '@/assets/icons/3xRu.png'
import x3En from '@/assets/icons/3xEn.png'
import Ru14 from '@/assets/icons/14Ru.png'
import En14 from '@/assets/icons/14En.png'
import plus20Ru from '@/assets/icons/20+Ru.png'
import plus20En from '@/assets/icons/20+En.png'
import x25Ru from '@/assets/icons/2.5xRu.png'
import x25En from '@/assets/icons/2.5xEn.png'
</script>
<script>
export default {
  name: 'bentoGrid'
}
</script>

<style scoped>
/* #1B1B1B */

:is(.gridFirst, .gridSecond)>div {
  @apply rounded-[15px] min-[375px]:rounded-[25px] min-[900px]:rounded-[30px];
}


.gridFirst {
  @apply grid grid-cols-[1fr_100px] grid-rows-[100px_100px] gap-[6px] mb-2 min-[375px]:grid-cols-[1fr_110px] min-[375px]:grid-rows-[100px_120px] min-[425px]:gap-[8px] min-[425px]:mb-3 min-[455px]:grid-rows-[110px_140px] min-[492px]:grid-rows-[110px_150px] min-[492px]:grid-cols-[1fr_120px] min-[600px]:max-w-[500px] min-[900px]:max-w-[1200px] min-[900px]:grid-cols-[31fr_17fr_52fr] min-[900px]:grid-rows-[130px] min-[900px]:gap-3 min-[900px]:grid-rows-[140px] min-[1000px]:grid-rows-[150px] min-[1100px]:grid-rows-[170px] min-[1200px]:grid-rows-[190px] bg-[#000] w-[95%] mx-auto rounded-3xl;
}

.gridFirst>div:not(:first) {
  border: 1px solid hsla(37, 86%, 74%, .1);
}

.a {
  @apply flex items-center text-center font-semibold text-[27px] min-[375px]:text-[35px] min-[675px]:text-[40px] min-[425px]:pt-1 min-[425px]:text-start min-[1100px]:text-[45px] min-[1100px]:pb-[20px] min-[1100px]:pt-0 min-[1200px]:text-[50px] min-[1200px]:leading-[3.3rem] leading-none md:pt-0;
}

.b {
  @apply bg-cover bg-no-repeat bg-center;
}

.c {
  @apply max-[900px]:col-span-full bg-cover bg-no-repeat bg-center;
}

.gridSecond {
  @apply grid grid-cols-[1fr] min-[500px]:grid-cols-[1fr_1fr] min-[600px]:max-w-[500px] min-[900px]:grid-cols-[37fr_37fr_26fr] min-[900px]:grid-rows-[200px_140px] min-[1000px]:grid-rows-[200px_160px] min-[1200px]:grid-rows-[230px_180px] gap-[14px] w-[95%] min-[900px]:max-w-[1200px] mx-auto rounded-3xl bg-black;
}

/* grid-cols-[37fr_37fr_26fr] grid-rows-[220px_180px] */


.gridSecond>div {
  @apply bg-[#1B1B1B];
  border: 1px solid hsla(37, 86%, 74%, .1);
  overflow: hidden;
  display: flex;
  align-items: center;
}




.one {
  @apply min-[900px]:row-[1/-1]
}

.two {
  @apply min-[500px]:col-[1/-1] min-[900px]:col-[2/3] min-[900px]:row-[1/2];
}

.three {
  @apply min-[500px]:col-[2/3] min-[500px]:row-[1/-1] min-[900px]:col-[3/4] min-[900px]:row-[1/-1];
}

.four {
  @apply min-[500px]:col-[1/-1] min-[900px]:col-[2/3] min-[900px]:row-[2/3];
}
</style>
