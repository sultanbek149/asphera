<template>
  <div id="wrapper">
    <div class="inter w-full" id="companyWrapper">
      <div @click="goToAbout" id="headingWrapper">
        <img class="companyLogo" :src="`./src/assets/icons/ico/${index <= 4 ? index : 4}.png`" alt="company logo" />
        <h3 id="title">{{ caseItem.name }}</h3>
      </div>
      <div ref="social" class="socialCompanyWrapper" v-if="caseItem.social || caseItem.link">
        <a v-if="caseItem.link" target="_blank" class="social pt-[2px]" href="https://discord.com/">
          <img id="global" src="../assets/icons/Union.png" alt="company one website" loading="lazy" />
          <p class="pb-[1.4px]">{{ caseItem.link_name }}</p>
        </a>
        <a v-if="caseItem.sType === 'x'" target="_blank" class="social" :href="caseItem.social">
          <img id="twitter" src="../assets/icons/x.png" alt="company one twitter" loading="lazy" />
          <p class="pb-[1.3px]">{{
        caseItem.social_name }}</p>
        </a>
        <a v-if="caseItem.sType === 'ig'" target="_blank" class="social" :href="caseItem.social">
          <img id="twitter" src="../assets/icons/ins.png" alt="company one twitter" loading="lazy" />
          <p class="pb-[1.5px]">{{
        caseItem.social_name }}</p>
        </a>
      </div>
      <p id="description">
        {{ caseItem.description }}
      </p>

      <div class="mt-4 z-[1000] lg:mt-[auto]">
        <my-button class="learnmore">{{ $t('buttons.learnMore') }}</my-button>
      </div>
    </div>

    <div class="banner">
      <img :src="`./src/assets/icons/${caseItem.img}.png`" alt="web">
      <p>{{ caseItem.hint }}</p>
    </div>

    <div class="mt-4 z-[1000] lg:hidden">
      <my-button class="learnmore mob">{{ $t('buttons.learnMore') }}</my-button>
    </div>
    <!-- <div class="statWrapper" id="stat1">
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
    </div> -->
  </div>
</template>
<script>
import Tr from '@/i18n/translation'
export default {
  name: 'case-card',
  props: { caseItem: Object, index: Number },
  methods: {
    goToAbout() {
      this.$store.commit('docs/setCurrentSectionId', 0);

      //TODO: set the part of the section by the case clicked
      this.$store.commit('docs/setCurrentPartId', 0)
      this.$store.commit('docs/setCurrentArticle')
      this.$store.commit('docs/setCurrentPageInfo')
      this.$store.commit('docs/setCurrentNavigationHooks')

      this.$router.push('/docs')

      this.$router.push(Tr.i18nRoute({ name: 'docs' }))

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
  @apply flex flex-col w-[90%] h-fit bg-[#1E1E1E] rounded-[32px] p-6 md:p-8 text-left lg:flex-row lg:gap-[1rem];
  /* grid-template-rows: auto auto auto; */
  /* transition: all 0.6s ease; */
}

#companyWrapper {
  @apply flex flex-col justify-start items-start lg:justify-normal;
  cursor: pointer;
}

#headingWrapper {
  @apply flex flex-row justify-evenly items-center h-fit w-fit gap-[0.5rem];
}

#title {
  @apply font-semibold text-[1.6rem] md:text-[2rem] lg:text-[1.6rem] xl:text-[1.8rem] uppercase;
}

.learnmore {
  border-radius: 20px;
}

.learnmore:not(.mob) {
  @apply hidden lg:block;
}

.learnmore.mob {
  @apply lg:hidden;
}

:deep(button) {
  @apply lg:!h-[3rem] lg:!w-[12rem];
  height: 2.3rem;
}

:deep(span) {
  @apply lg:!text-xl;
  font-size: 14px;
  padding-top: 0px;
  font-weight: normal;
}

.learnmore::after {
  filter: none;
}

.companyLogo {
  aspect-ratio: 1;
  height: 2rem;
}

.socialCompanyWrapper {
  @apply flex md:flex-row justify-evenly items-center gap-[2rem] mt-3 mb-2;
}

.socialCompanyWrapper p {
  @apply text-[13px] lg:text-[14.5px] xl:text-[1rem];
}

.safariSocial {
  @apply w-[11rem] !important;
}

#twitter {
  aspect-ratio: 1;
  @apply h-[1rem];
}

#global {
  aspect-ratio: 1;
  @apply h-[1rem];
}

.social {
  @apply flex flex-row justify-evenly items-center h-[1rem] w-fit gap-[0.4rem];
}

#description {
  @apply font-normal w-full text-[16px] md:text-[1rem] mt-[0.5rem] lg:mt-1 lg:text-[1rem] xl:text-[1.2rem];
}

@media (max-width: 375px) {
  #title {
    @apply text-[1.5rem];
  }
}

@media (min-width: 722px) {
  #wrapper {
    @apply w-[97%];
  }
}

.banner {
  @apply w-full;
}

.banner img {
  @apply mb-3 w-full rounded-[20px];
}

.banner p {
  padding: 2px 15px 6px;
  width: fit-content;
  border: 1px solid;
  border-radius: 16px;
}
</style>
