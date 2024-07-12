<template>
  <div id="wrapper">
    <div class="inter" id="companyWrapper">
      <div @click="goToAbout" id="headingWrapper">
        <img class="companyLogo" src="/src/assets/icons/company1.png" alt="company logo" />
        <h3 id="title">COMPANY</h3>
      </div>
      <div ref="social" class="socialCompanyWrapper">
        <a target="_blank" class="social" href="https://discord.com/">
          <img id="global" src="../assets/icons/global.png" alt="company one website" loading="lazy" />
          <p>company.com</p>
        </a>
        <a class="social" href="https://twitter.com/" target="_blank">
          <img id="twitter" src="../assets/icons/twitter.png" alt="company one twitter" loading="lazy" />
          <p>company.com</p>
        </a>
      </div>
      <p id="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales aptent taciti
        sociosq
      </p>
    </div>
    <div class="statWrapper" id="stat1">
      <p class="headingFont statTitle">3X</p>
      <p class="statDesc">
        engagement <br />
        boost
      </p>
    </div>
    <div class="statWrapper" id="stat2">
      <p class="headingFont statTitle">+1K</p>
      <p class="statDesc">
        users in the <br />
        community
      </p>
    </div>
    <div class="statWrapper" id="stat3">
      <p class="headingFont statTitle">TOP 10</p>
      <p class="statDesc">
        blockcahin <br />
        startup
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'case-card',
  methods: {
    goToAbout() {
      this.$store.commit('docs/setCurrentSectionId', 0);

      //TODO: set the part of the section by the case clicked
      this.$store.commit('docs/setCurrentPartId', 0)
      this.$store.commit('docs/setCurrentArticle')
      this.$store.commit('docs/setCurrentPageInfo')
      this.$store.commit('docs/setCurrentNavigationHooks')

      this.$router.push('/about')
    }
  },
  mounted() {
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    if (isSafari) {
      let wrapper = this.$refs.social
      wrapper.classList.add('safariSocial')
    }
  }
}
</script>
<style scoped>
#wrapper {
  @apply grid w-[90%] h-fit bg-[#1E1E1E] rounded-2xl p-4 text-left gap-[0.3rem];
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  transition: all 0.6s ease;
}

#companyWrapper {
  @apply flex flex-col justify-start items-start gap-[0.5rem];
  grid-column: 1;
  grid-row: 1 / span 3;
  cursor: pointer;
}

#headingWrapper {
  @apply flex flex-row justify-evenly items-center h-fit w-fit gap-[0.5rem];
}

#title {
  @apply font-semibold text-[1.8rem];
}

.companyLogo {
  aspect-ratio: 1;
  height: 2rem;
}

.socialCompanyWrapper {
  @apply flex flex-row justify-evenly items-center w-[1rem] gap-[3rem];
  scale: 65%;
}

.safariSocial {
  @apply w-[11rem] !important;
}

#twitter {
  aspect-ratio: 1;
  @apply h-[2rem];
}

#global {
  aspect-ratio: 1;
  @apply h-[1rem];
}

.social {
  @apply flex flex-row justify-evenly items-center h-[1rem] w-fit gap-[0.4rem];
}

#description {
  @apply font-normal text-xs mt-[0.5rem];
}

.statWrapper {
  @apply flex flex-row justify-end items-center gap-[1rem];
}

.statTitle {
  @apply text-[1.4rem] text-right;
  font-weight: 900;
}

.statDesc {
  @apply text-xs;
  width: 4rem;
}

#stat1 {
  grid-column: 2;
  grid-row: 1;
}

#stat2 {
  grid-column: 2;
  grid-row: 2;
}

#stat3 {
  grid-column: 2;
  grid-row: 3;
}

@media (max-width: 375px) {
  #title {
    @apply text-[1.5rem];
  }

  #description {
    font-size: 0.65rem;
  }

  .statTitle {
    @apply text-[1.2rem];
  }

  .statDesc {
    font-size: 0.65rem;
    width: 3.4rem;
  }
}

.highlighted {
  @apply shadow-[#6242BD] shadow-lg !important;
  scale: 102%;
}

@media (min-width: 722px) {
  #wrapper {
    @apply w-[97%];
  }
}

@media (min-width: 1000px) {
  .statDesc {
    width: 5rem;
  }
}
</style>
