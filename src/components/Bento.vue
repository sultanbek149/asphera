<template>
  <div id="bentoWrapper">
    <div class="headingFont cardText" id="card1">
      <span class="headingFont" id="upperText">WHO WE ARE</span>
      <span>ASPHERASY<br />ECOSYSTEM</span>
    </div>
    <div class="card" id="card2"></div>
    <div class="card" id="card3"></div>
    <div class="card" id="card4"></div>
    <div class="card" id="card5"></div>
    <div class="card" id="card6"></div>
  </div>
</template>
<script>
export default {
  name: 'bento'
}
</script>
<style scoped>
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
  @apply ml-1 text-white text-opacity-20 font-normal text-[0.7rem];
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
    @apply justify-start items-start text-5xl flex flex-col gap-2;
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
</style>
