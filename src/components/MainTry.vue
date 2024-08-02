<template>
  <pre-loader></pre-loader>
  <header class="z-100">
    <div class="absolute left-0 w-[45px] h-full">
      <div class="relative w-[45px] h-full max-[722px]:ml-[20px] max-[722px]:mt-[4px]">
        <img id="logoImg" alt="Demos logo" loading="lazy" src="@/assets/icons/asphera_black.png" />
      </div>
    </div>

    <div class="flex flex-row w-[50%] h-fit justify-center items-center">
      <my-button @click="scrollTo('contact')" id="hireSmall">{{ $t('buttons.hireUs') }}</my-button>

      <!-- <button id="menuBtn" aria-label="Menu button"> -->
      <!-- <img id="menuImg" :src="menuBtn" alt="Menu button" @click="toggleMenu" /> -->
      <!-- </button> -->
      <burger-btn :isMenu="isMenu" @toggleMenu="toggleMenu"></burger-btn>

    </div>


    <my-nav @openPreview="openPreview" :isMenu="isMenu" @closeSideBar="toggleMenu" :isHovered="isNavHowered"></my-nav>
  </header>
  <nav-preview @mouseleave="toggleNavHower" :isVisible="isNavHowered"></nav-preview>
  <bottom-cover :isVisible="isNavHowered"></bottom-cover>

  <main>
    <section id="main">
      <div ref="logoWrapper" id="logoWrapper" class="z-50">
        <h1 id="logo" class="headingFont">{{ $t('banner.title') }}</h1>

        <h2 id="slogan" class="fira">{{ slogan + '|' }}</h2>
        <h2 id="logoShort" class="fira">
          {{ $t('banner.subtitle') }}
        </h2>
      </div>

      <div class="glb flex justify-end h-full">
        <div
          class="relative max-[768px]:-right-20 w-[90%] min-[525px]:w-[70%] min-[625px]:w-[60%] min-[1000px]:w-[50%] h-full flex items-center">
          <video autoplay="true" muted="true" loop="true" playsinline>
            <source src="@/assets/asphera_lock_final.mp4" type="video/mp4">
          </video>
        </div>
      </div>

    </section>

    <marquee v-once size="big" direction="toLeft">{{ $t('marquee[0]') }}</marquee>
    <marquee v-once size="medium" direction="toRight">{{ $t('marquee[1]') }}</marquee>
    <marquee v-once size="small" direction="toLeft">{{ $t('marquee[2]') }}</marquee>
    <section ref="cases" id="cases">

      <div ref="casesTitle" id="casesTitleWrapper">
        <h3 class="casesSlogan fira">{{ $t('cases.textAbove') }}</h3>
        <h2 id="casesTitle" class="headingFont">{{ $t('cases.title') }}</h2>
        <h3 class="casesSlogan fira">{{ $t('cases.textBelow') }}</h3>
      </div>

      <div id="casesWrapper" ref="casesWrapper" @scroll="checkScroll">
        <case-card v-for="(item, index) in $tm('cases.items')" ref="case" :key="item.name" class="case" :caseItem="item"
          :index="index" />
      </div>
    </section>

    <section id="services" class="px-[3vw]">
      <h2 ref="offer" class="headingFont uppercase" id="servicesTitle">{{ $t('whatWeOffer.title') }}</h2>
      <services-wrapper />
    </section>
    <section id="about">
      <bentoGrid />
    </section>
    <section id="contact">
      <contact-message ref="contactMessage"></contact-message>
      <div class="w-[80%] mx-auto">
        <legend class="headingFont max-[768px]:!text-start text-center" id="contactTitle">
          {{ $t('feedbackForm.title') }}
        </legend>
        <p
          class="text-[1rem] mt-4 leading-6 min-[768px]:text-[1.5rem] min-[768px]:leading-10 min-[768px]:mt-5 min-[1100px]:ml-5 !font-thin">
          {{ $t('feedbackForm.subtitle') }}
        </p>
      </div>
      <contact-form @send="showSuccessMessage"></contact-form>
    </section>

    <my-footer></my-footer>
  </main>
</template>

<script setup>
// import menuBtn from '@/assets/icons/menuBtn.svg'

// import closeBtn from '@/assets/icons/closeBtn.svg'
// import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three'
// import { ref, onMounted } from 'vue';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import model from '@/assets/asphera3.gltf'
import { gsap } from 'gsap'

import ScrollTrigger from 'gsap/ScrollTrigger'

import { useHead } from '@unhead/vue'

import { computed, ref, onMounted, watch } from 'vue'

import { useI18n } from 'vue-i18n'
import i18n from '@/i18n'


gsap.registerPlugin(ScrollTrigger)

// import model from 'favicon.ico'

// const switchLang = () => {
//   locale.value === 'ja' ? locale.value = 'en' : locale.value = 'ja'
// }

const myPage = ref({ description: 'This is my page' })
const title = ref('Asphera')

useHead({
  // ref (recommended)
  title,
  // computed getter (recommended)
  meta: [{ name: 'description', content: () => myPage.value.description },],
  // computed (not recommended)
  script: [computed(() => ({
    src: 'https://example.com/script.js',
    defer: true,
  }))],
})

const { t } = useI18n({ useScope: 'global' })


const slogan = ref('')
let currentPhraseIndex = 0
let typingSpeed = 70
let deletingSpeed = 80
let isDeleting = false

const phrases = ref([
  t('banner.phrases[0]'),
  t('banner.phrases[1]'),
  t('banner.phrases[2]')
])

watch(i18n.global.locale, () => {
  phrases.value = [
    t('banner.phrases[0]'),
    t('banner.phrases[1]'),
    t('banner.phrases[2]')
  ]
})


const typingSlogan = () => {
  const current = currentPhraseIndex % phrases.value.length
  const fullPhrase = phrases.value[current]

  if (isDeleting) {
    // Remove a character
    slogan.value = fullPhrase.substring(0, slogan.value.length - 1)
  } else {
    // Add a character
    slogan.value = fullPhrase.substring(0, slogan.value.length + 1)
  }

  // Determine the typing speed
  let typeSpeed = typingSpeed
  if (isDeleting) {
    typeSpeed = deletingSpeed
  }

  // If phrase is complete, pause before starting to delete
  if (!isDeleting && slogan.value === fullPhrase) {
    // Pause at end
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && slogan.value === '') {
    isDeleting = false
    currentPhraseIndex++
    // Pause before start typing next phrase
    typeSpeed = 500
  }

  setTimeout(() => typingSlogan(), typeSpeed)
}

onMounted(() => {
  typingSlogan()
})

// const target = ref();

// const scene = new THREE.Scene();
// let mesh
// const loader = new GLTFLoader()
// loader.load(model, (gltf) => {
//   mesh = gltf.scene
//   mesh.position.set(.5, 0.8, -1)

//   scene.add(mesh)
// }, undefined, (err) => {
//   console.log('error')
// })



// Add ambient light
// const light = new THREE.DirectionalLight(0xffffff, 1); // soft white light
// light.position.set(1, 2, 1)
// scene.add(light);

// const light2 = new THREE.DirectionalLight(0xffffff, 1); // soft white light
// light2.position.set(2, 2, 1)
// scene.add(light2);


// const light3 = new THREE.DirectionalLight(0xffffff, 1); // soft white light
// light3.position.set(2, 2, 3)
// scene.add(light3);

// const light4 = new THREE.DirectionalLight(0xffffff, 1); // soft white light
// light4.position.set(-1, -1, 1)
// scene.add(light4);

// const light5 = new THREE.DirectionalLight(0xffffff, 1); // soft white light
// light5.position.set(-1, -1, 5)
// scene.add(light5);


// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(1000, 1000);
// renderer.setClearColor(0xffffff, 0)

// const camera = new THREE.PerspectiveCamera(25, 1000 / 1000, 0.1, 1000);
// // camera.position.set(0, 1, 10)
// camera.position.z = 11;
// scene.add(camera)



// // Add ambient light
// const ambientLight = new THREE.AmbientLight(0xf0f0f0, 2000);
// scene.add(ambientLight);



// function animate() {
//   requestAnimationFrame(animate);

//   if (mesh) mesh.rotation.y += 0.01;

//   renderer.render(scene, camera);
// }

// onMounted(() => {
//   target.value.appendChild(renderer.domElement);
//   animate();
// });



</script>

<script>
export default {
  name: 'my-main',
  data() {
    return {
      chatId: 7017192108,
      token: '7122264496:AAFqPNZz-S_5MxMFUVgljVpr1yzZvvfTeZ4',
      scrollTimeout: null,
      isNavHowered: false,
      animationPlayState: 'running',
      isService: false,
      isMenu: true,
      isBurger: false,
      isMobile: false,
      tl: null,
      currentService: '',
      services: [
        {
          id: 1,
          title: 'Web3',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Maecenas semper tempor nulla, id cursus sem mattis et. Suspendisse ut purus sit amet arcu ultricies.',
          price: 499
        },
        {
          id: 2,
          title: 'Web2',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Maecenas semper tempor nulla, id cursus sem mattis et. Suspendisse ut purus sit amet arcu ultricies.',
          price: 759
        },
        {
          id: 3,
          title: 'Telegram',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Maecenas semper tempor nulla, id cursus sem mattis et. Suspendisse ut purus sit amet arcu ultricies.',
          price: 830
        },
        {
          id: 4,
          title: 'Softs',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Maecenas semper tempor nulla, id cursus sem mattis et. Suspendisse ut purus sit amet arcu ultricies.',
          price: 421
        }
      ]
    }
  },
  methods: {
    showSuccessMessage() {
      this.$refs.contactMessage.showPopup();

    },
    scrollTo(sectionId) {
      this.$emit('closeSideBar')
      const element = document.getElementById(sectionId)
      if (element) {
        const yOffset = -1040
        // const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

        window.scrollTo({ behavior: 'smooth' })
      }
    },
    handleScrollBar() {
      clearTimeout(this.scrollTimeout);

      // Add active class to show scrollbar
      document.documentElement.classList.add('active-scrollbar');

      // Set a timeout to remove the active class after 1 second of inactivity
      this.scrollTimeout = setTimeout(() => {
        document.documentElement.classList.remove('active-scrollbar');
      }, 1000);
    },
    openPreview() {
      this.isNavHowered = true;
    },
    toggleNavHower() {
      console.log('leave')
      if (this.isNavHowered === false) {
        this.isNavHowered = true
        return;
      }
      this.isNavHowered = false
    },
    getPartIdByTitle(title) {
      console.log('here in getpartID ' + title)
      if (title === 'Web3') {
        return 0;
      }
      else if (title === 'Web2') {
        return 1;
      } else if (title === 'Telegram') {
        return 2;
      } else if (title === 'Softs') {
        return 3;
      }
    },
    toggleMenu() {
      if (window.innerWidth < 722) {
        this.isMenu = !this.isMenu
        // this.toggleMenuIcon()
      }
    },
    toggleMenuIcon() {
      if (this.isMenu) {
        this.isBurger = true;
      } else {
        this.isBurger = false
      }
    },
    handleResize() {
      if (window.innerWidth < 722) {
        this.isMenu = false
      } else {
        this.isMenu = true
      }
      if (window.innerWidth < 722) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
      if (this.tl != null) {
        this.tl.scrollTrigger.refresh()
      }
      this.toggleMenuIcon()
    },

    // loadSpline() {
    //   if (
    //     !document.querySelector(
    //       'script[src="https://unpkg.com/@splinetool/viewer@1.1.1/build/spline-viewer.js"]'
    //     )
    //   ) {
    //     console.log('Adding Spline viewer script to the document.')
    //     const script = document.createElement('script')
    //     script.type = 'module'
    //     script.src = 'https://unpkg.com/@splinetool/viewer@1.1.1/build/spline-viewer.js'

    //     script.onload = () => {
    //       console.log('Spline viewer script loaded.')
    //       const shadowHost = document.getElementById('host')
    //       const shadowRoot = shadowHost.shadowRoot
    //       const logoElement = shadowRoot.querySelector('#logo')
    //       const canvas = shadowRoot.querySelector('#container')
    //       logoElement.style.cssText = 'opacity: 0 !important;'

    //       setTimeout(() => {
    //         const shadowHost = document.getElementById('host')

    //         // Access the shadow root from the host element
    //         const shadowRoot = shadowHost.shadowRoot

    //         // Query inside the shadow root for the #logo element
    //         const logoElement = shadowRoot.querySelector('#logo')

    //         logoElement.style.cssText = 'display: none !important;'
    //       }, 1000)
    //     }

    //     document.head.appendChild(script)
    //   }
    // },
    initScrollTrigger() {
      let pinnedContent = this.$refs.casesTitle
      let section = this.$refs.cases
      let offer = this.$refs.offer

      // Create a timeline for the animation
      if (this.isMobile == false) {
        this.tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top-=2% top', // Animation starts when the top of the section hits the top of the viewport
            end: () => `+=${document.body.offsetHeight}`, // Ends when the bottom of the section leaves the top of the viewport
            scrub: true,
            pin: pinnedContent, // Pin the entire content section
            markers: false, // Optional, for debugging
            pinSpacing: false
          }
        })

        this.tl.to(pinnedContent, {
          scrollTrigger: {
            trigger: offer,
            start: 'bottom 90%', // Animation starts when the top of the section hits the top of the viewport
            end: 'bottom 65%', // Ends when the bottom of the section leaves the top of the viewport
            scrub: true,
            markers: false // Optional, for debugging
          },
          opacity: '0'
        })
      }
    },
    createObserver() {
      const options = {
        root: null,
        rootMargin: '-10% 0px -50% 0px',
        threshold: 0.95
      }

      let current = null
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          let sizeInFocus = document.getElementsByClassName('highlighted').length

          if (entry.isIntersecting) {
            if (sizeInFocus == 0) {
              current = entry.target
              current.classList.add('highlighted')
            }
            if (sizeInFocus == 1) {
              current.classList.remove('highlighted')
              entry.target.classList.add('highlighted')
              current = entry.target
            }
          }
        })
      }, options)

      // Observing the root element of each Vue component instance
      if (this.$refs.case && Array.isArray(this.$refs.case)) {
        this.$refs.case.forEach((componentInstance) => {
          observer.observe(componentInstance.$el) // Observing the actual element
        })
      } else {
        console.error('Refs not found or not an array:', this.$refs.case)
      }
    },
    startLogoAnimation() {
      const logoWrapper = this.$refs.logoWrapper
      logoWrapper.style.transition = 'transform 0.3s ease'
      logoWrapper.style.transform = 'translateX(0%)'
    }
  },
  mounted() {
    if (window.innerWidth <= 1024) {
      this.createObserver()
    }
    //starts the animation for the navbar
    this.startLogoAnimation()

    //implementig the width handler so that we can see the navbar on bigger devices and it's not hidden
    window.addEventListener('resize', this.handleResize)
    // window.addEventListener('scroll', this.handleScrollBar)
    this.handleResize()

    //loading the 3d element
    // this.loadSpline()

    //scroll trigger for the cases section
    this.initScrollTrigger()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style>
header {
  @apply flex flex-col w-[100vw] h-[10vh] fixed items-end bg-black bg-opacity-[0.75];
  z-index: 10000;
}

#hireSmall {
  @apply hidden text-[14px] min-[425px]:text-[16px];
}


#logoImg {
  @apply absolute top-[44%] w-[45px] -translate-y-1/2;
  /* aspect-ratio: 7/1.5; */
}

#menuBtn {
  /* @apply scale-[200%] p-8; */
  z-index: 999;
}

section {
  @apply relative w-[100vw] h-[100vh] overflow-hidden !important;
}

#main {
  @apply -mb-[9rem] relative;

  /* background-image: url('@/assets/icons/sun.svg'); */
  background-repeat: no-repeat;
  background-size: 150%;
  background-position: top right;
  background-position-x: -50%;
  background-position-y: 70%;
  z-index: 1000;
}

#logoWrapper {
  @apply mt-[20vh] absolute flex flex-col justify-center items-start gap-5 ml-6;
  transform: translateX(-40%);
}

#logoWrapper>#logo {
  @apply text-4xl ml-[0.1rem] w-[70%] font-medium;
  /* font-weight: 200; */
}

#logoShort {
  @apply ml-1 text-[#777777] text-[.9rem] w-[80%];
}

#slogan {
  @apply text-[#777777] text-2xl w-[90%] pl-1;
}

#host {
  @apply absolute right-0;
  /*mobile*/
  @apply scale-[120%] w-[200%] -mr-[110vw] mt-[6rem];
}

#cases {
  @apply h-fit mb-[5rem] md:gap-12 lg:gap-6 !important;
}

#casesTitle {
  @apply text-[4rem] self-center text-white text-center mt-[15rem];
  font-weight: 600;
}

#casesTitleWrapper {
  @apply flex flex-col justify-start items-start md:w-[25vw];
}

.casesSlogan {
  @apply hidden;
}

#casesWrapper {
  @apply flex flex-col gap-14 justify-start items-center h-full pt-[1vh] mt-[9rem];
}

.case {
  transition: all 0.3s ease;
}

@media (hover: hover) {
  #casesWrapper>.case:hover {
    @apply shadow-[#4B71FF] shadow-md !important;
    scale: 101%;
  }
}

#casesWrapper::-webkit-scrollbar {
  display: none;
}

#services {
  @apply h-fit pb-[20rem] !important;
}



#servicesTitle {
  @apply text-[2rem] text-center;
  font-weight: 600;
}

#about {
  @apply h-fit !important;
}

#contact {
  @apply flex flex-col mt-[10rem] h-fit pb-20 justify-start items-center gap-10 !important;
}

#contactTitle {
  @apply text-center text-3xl font-[400];
}


/* max-width */
/* 499px */



@media (max-width: 722px) {
  #hireSmall {
    @apply block fixed w-[30%] h-9 top-5 right-[20%];
    z-index: 100;
  }

  #hireSmall .text {
    top: 51% !important;
  }

}

@media (max-width: 721px) {
  #cases {
    @apply -mt-[5rem] !important;
  }

  #casesWrapper {
    @apply gap-[1.5rem] mt-[2rem];
  }
}

@media(max-width: 1000px) {
  #services {
    @apply pb-[6rem] !important;
  }
}

@media (max-width: 500px) {
  #services {
    @apply pb-[3rem] !important;
  }
}

@media(max-width: 360px) {
  #hireSmall {
    @apply w-[28%] right-[25%];
  }
}

/*min-width*/

/*500px*/

@media (min-width: 722px) {
  #logoImg {
    @apply hidden;
  }

  header {
    @apply h-fit;
  }

  #menuBtn {
    @apply hidden;
  }
}

/*560px*/

@media (min-width: 560px) {
  #logoWrapper {
    @apply mt-[10vh];
  }
}

/*722px*/

@media (min-width: 722px) {
  #logoWrapper>#logo {
    width: 100%;
  }

  #logoWrapper {
    @apply ml-[8.5rem] mt-[16vh];
    scale: 134%;
  }

  #slogan {
    @apply w-[80%];
  }

  #host {
    @apply scale-[100%] w-[100%] -mr-[20vw] mt-[6rem] !important;
  }

  #cases {
    @apply flex justify-between mt-[10rem] px-[1rem] !important;
  }

  #casesWrapper {
    @apply w-[55vw] gap-[1.5rem];
  }

  #casesTitleWrapper {
    @apply w-[30vw] mt-[9rem];
  }

  #casesTitle {
    @apply mt-0 self-start;
  }

  .casesSlogan {
    @apply block font-light text-[#777777];
  }
}

/*1000px*/

@media (min-width: 1000px) {
  #cases {
    @apply gap-[1rem] pb-[10rem] !important;
  }

  #casesTitleWrapper {
    @apply ml-[1%];
  }

  #about {
    @apply mb-[30rem];
  }

  #casesTitle {
    @apply text-[5rem];
  }

  .casesSlogan {
    @apply text-[1.3rem];
    width: 100% !important;
  }
}

/*1024px*/

@media (min-width: 1024px) {
  #logoWrapper>#logo {
    font-weight: 500;
    font-size: 4.3rem;
  }

  #logoWrapper {
    @apply mt-[170px] ml-[2rem];
    scale: 100%;
  }

  #logoShort {
    @apply w-[50%] text-[20px];
    height: fit-content;
  }

  #slogan {
    @apply w-[60rem] text-[2.1rem] pl-0 mt-6;
    margin-bottom: 5px;
  }
}

/*1100px*/

@media (min-width: 1100px) {
  #casesTitleWrapper {
    @apply w-[37vw] !important;
  }

  #casesWrapper {
    @apply mt-[9rem];
  }

  #contact {
    @apply flex-row items-start mb-[10rem] !important;
  }

  #contactTitle {
    @apply text-[3rem] text-left ml-5;
    line-height: 3.9rem !important;
  }

  #casesTitle {
    @apply text-[5.5rem];
  }

  .casesSlogan {
    @apply text-[1.3rem];
    width: 170% !important;
  }
}

/*1200px*/

@media (min-width: 1200px) {
  #servicesTitle {
    @apply text-left text-[3rem] mb-[2rem] px-[2vw];
  }

  #about {}

  #contactTitle {
    @apply text-[3rem];
    line-height: 3.8rem !important;
  }

  #casesTitle {
    @apply text-[5.9rem];
  }

  .casesSlogan {
    @apply text-[1.3rem];
    width: 170% !important;
  }
}

/*1400*/
@media (min-width: 1400px) {
  #about {}
}


@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translateY(0%);
  }

  100% {
    opacity: 0;
    transform: translateY(50%);
  }
}

.fade-enter-active {
  animation: fadeIn 0.4s ease;
}

.fade-leave-active {
  animation: fadeOut 0.4s ease forwards;
}
</style>
