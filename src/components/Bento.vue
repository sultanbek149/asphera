<template>
  <div class="bentoGrid">
    <div class="gridFirst">
      <div class="a">
        ASPHERA
        ECOSYSTEM
      </div>
      <div :style="{ backgroundImage: `url(${Tr.currentLocale === 'en' ? y2En : y2Ru})` }" class="b"></div>
      <div :style="{ backgroundImage: `url(${fiftyplus})` }" class="c"></div>
    </div>
    <div class="gridSecond">
      <div class="one"><img :src="`./src/assets/icons/${$t('bento.images[3].img')}.png`" alt=""></div>
      <div class="two"><img :src="`./src/assets/icons/${$t('bento.images[4].img')}.png`" alt=""></div>
      <div class="three"><img :src="`./src/assets/icons/${$t('bento.images[0].img')}.png`" alt=""></div>
      <div class="four"><img :src="`./src/assets/icons/${$t('bento.images[5].img')}.png`" alt=""></div>
    </div>
  </div>

</template>
<script setup>
import Tr from '@/i18n/translation'

const y2Ru = new URL(`@/assets/icons/2yRu.png`, import.meta.url).href
const y2En = new URL(`@/assets/icons/2yEn.png`, import.meta.url).href

const fiftyplus = new URL(`@/assets/icons/50+Ru.png`, import.meta.url).href


</script>
<script>
export default {
  name: 'bento-grid'
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
  @apply flex items-center text-center font-semibold text-[27px] min-[375px]:text-[35px] min-[675px]:text-[50px] min-[425px]:pt-1 min-[425px]:text-start min-[1100px]:text-[55px] min-[1100px]:pb-[20px] min-[1100px]:pt-0 leading-none md:pt-0;
}

.b {
  @apply bg-[url('@/assets/icons/2yEn.png')] bg-cover bg-no-repeat bg-center;
}

.c {
  @apply max-[900px]:col-span-full bg-[url('@/assets/icons/50+.png')] bg-cover bg-no-repeat bg-center;
}


/* .one-a {
  @apply basis-[47%] min-[435px]:basis-[30%] font-semibold text-[35px] min-[435px]:text-[55px] leading-none pt-10;
}

.one-b {
  @apply basis-[47%] min-[435px]:basis-[16%] bg-[url('@/assets/icons/2yEn.png')] h-[110px] bg-cover bg-no-repeat bg-center;
}

.one-c {
  @apply basis-[100%] min-[435px]:basis-[100%] h-[110px] bg-[url('@/assets/icons/50+.png')] bg-cover bg-no-repeat bg-center;
} */

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



/* .one {
  @apply bg-[url('@/assets/icons/3x.png')] bg-contain bg-no-repeat bg-center h-[300px];
} */

/* row-[1/3] */

/* .two {
  @apply bg-[url('@/assets/icons/14.png')] bg-cover bg-no-repeat bg-center h-[145px];
} */

/* .three {
  @apply bg-[url('@/assets/icons/20+.png')] bg-contain bg-no-repeat bg-center overflow-hidden h-[400px];
} */
/* row-[1/3] col-[3/4] */




/* bg-[url('@/assets/icons/3x.png')] bg-cover bg-no-repeat bg-center */
</style>
<!-- <style scoped>
#bentoWrapper {
  @apply grid w-full p-7 h-fit gap-[1rem] justify-center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto auto auto;
}

#card1 {
  grid-column: 1 / span 2;
  grid-row: 1;
  @apply text-[2rem] flex flex-col gap-2 justify-center items-center;

  aspect-ratio: 16/8;
  width: 100%;
  /*background-size: cover;
  background-position: center;
  background-image: url('/src/assets/icons/bentoPartners.png');
  */
}
#upperText {
  @apply ml-1 text-white text-opacity-20 text-[0.7rem];
  letter-spacing: 0.2rem;
}
#card2 {
  grid-column: 1;
  grid-row: 2;

  width: 100%;

  aspect-ratio: 1/1;

  background-size: cover;
  background-position: center;
  background-image: url('/src/assets/icons/bentoMarket.png');
}
#card3 {
  grid-column: 2;
  grid-row: 2;
  width: 100%;

  aspect-ratio: 1/1;

  background-size: cover;
  background-position: center;
  background-image: url('/src/assets/icons/bentoNetwork.png');
}
#card4 {
  grid-column: 1 / span 2;
  grid-row: 3;

  aspect-ratio: 16/8;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url('/src/assets/icons/bentoProjects.png');
}
#card5 {
  grid-column: 1 / span 2;
  grid-row: 4 / span 2;

  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;

  background-size: cover;
  background-position: center;
  background-image: url('/src/assets/icons/bentoX.png');
}
#card6 {
  grid-column: 1 / span 2;
  grid-row: 6;

  /*
  aspect-ratio: 5/2;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url('/src/assets/icons/bentoBest.png');
  */

  aspect-ratio: 16/8;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url('/src/assets/icons/bentoPartners.png');
}
.cardText {
  @apply h-[9.8rem] rounded-3xl;
  transition: all 0.7s;
}
.card {
  @apply h-[9.8rem] rounded-3xl;
  transition: all 0.7s;
}
@media (hover: hover) {
  .card:hover {
    @apply shadow-lg shadow-[#6242BD] scale-[105%];
  }
}
@media (max-width: 345px) {
  .card {
    @apply scale-[90%];
  }
  .cardText {
    @apply scale-[90%];
  }
  #bentoWrapper {
    @apply gap-0;
  }
}

@media (min-width: 722px) {
  #bentoWrapper {
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 1fr 1fr 1fr;
  }
  #card1 {
    @apply justify-start items-start text-[2.9rem] leading-none flex flex-col gap-2;
    grid-column: 1 / span 2;
    grid-row: 1;
  }
  #card2 {
    grid-column: 1;
    grid-row: 2;
  }
  #card3 {
    grid-column: 2;
    grid-row: 2;
  }
  #card4 {
    grid-column: 1 / span 2;
    grid-row: 3;
  }
  #card5 {
    height: 21rem;
    width: 23rem;
    grid-column: 3 / span 3;
    grid-row: 1 / span 2;
  }
  #card6 {
    height: 10rem;
    width: 23rem;
    grid-column: 3 / span2;
    grid-row: 3;
  }
}
</style> -->
