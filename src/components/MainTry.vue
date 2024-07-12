<template>
  <!-- <pre-loader></pre-loader> -->
  <header>
    <img id="logoImg" alt="Demos logo" loading="lazy" src="@/assets/icons/logo2.png" />

    <div class="flex flex-row w-[50%] h-fit justify-center items-center">
      <my-button @click="scrollTo('contact')" id="hireSmall">Hire us</my-button>

      <!-- <button id="menuBtn" aria-label="Menu button"> -->
      <!-- <img id="menuImg" :src="menuBtn" alt="Menu button" @click="toggleMenu" /> -->
      <!-- </button> -->
      <burger-btn :isMenu="isMenu" @toggleMenu="toggleMenu"></burger-btn>

    </div>



    <my-nav @openPreview="openPreview" :isMenu="isMenu" @closeSideBar="toggleMenu"></my-nav>
  </header>
  <nav-preview @mouseleave="toggleNavHower" :isVisible="isNavHowered"></nav-preview>
  <bottom-cover :isVisible="isNavHowered"></bottom-cover>

  <main>
    <section id="main">
      <div ref="logoWrapper" id="logoWrapper">
        <h1 id="logo" class="headingFont">Asphera Technologies</h1>

        <h2 id="slogan" class="fira">{{ slogan + '|' }}</h2>
        <h2 id="logoShort" class="fira">
          Singular company. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
          sodales est. Class aptent taciti
        </h2>

      </div>


      <!-- <spline-viewer id="host" v-once
        url="https://prod.spline.design/9yoCKQd-0-E6Tx1j/scene.splinecode">
      </spline-viewer> -->
      <div ref="target" class="glb flex justify-end"></div>

    </section>

    <marquee v-once size="big" direction="toLeft"></marquee>
    <marquee v-once size="medium" direction="toRight"></marquee>
    <marquee v-once size="small" direction="toLeft"></marquee>

    <section ref="cases" id="cases">

      <div ref="casesTitle" id="casesTitleWrapper">
        <h3 class="casesSlogan fira">Honored projects</h3>
        <h2 id="casesTitle" class="headingFont">CASES</h2>
        <h3 class="casesSlogan fira">Our principles. We’re partners, not providers</h3>
      </div>

      <div id="casesWrapper" ref="casesWrapper" @scroll="checkScroll">
        <case-card v-for="i in [1, 2, 3, 4, 5, 6]" ref="case" :key="i" class="case"></case-card>
      </div>
    </section>

    <section id="services">
      <transition name="fade">
        <service-info :title="currentService" @close="toggleServiceInfo" v-if="isService"></service-info>
      </transition>

      <h2 ref="offer" class="headingFont" id="servicesTitle">WHAT WE OFFER?</h2>

      <div id="servicesWrapper">
        <service-card @toggleServiceInfo="toggleServiceInfo" v-for="service in services" :key="service.id"
          :title="service.title" :description="service.desc" :price="service.price" :current="currentService"
          :isService="isService" @infoOpen="currentService = service.title"></service-card>
      </div>
    </section>
    <section id="about">
      <bento></bento>
    </section>
    <section id="contact">
      <contact-message ref="contactMessage"></contact-message>
      <legend class="headingFont" id="contactTitle">
        Our Team Is Ready To Help! Get started now!
      </legend>
      <contact-form @send="showSuccessMessage"></contact-form>
    </section>

    <my-footer></my-footer>
  </main>
</template>

<script setup>
// import menuBtn from '@/assets/icons/menuBtn.svg'

// import closeBtn from '@/assets/icons/closeBtn.svg'
// import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh } from 'three'
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from '@/assets/asphera3.gltf'


import { gsap } from 'gsap'

import ScrollTrigger from 'gsap/ScrollTrigger'

// import model from 'favicon.ico'

gsap.registerPlugin(ScrollTrigger)



const target = ref();

const scene = new THREE.Scene();
let mesh 
const loader = new GLTFLoader()
loader.load(model, (gltf) => {
  mesh = gltf.scene
  mesh.position.set(.5, 0.8, -1)

  scene.add(mesh)
}, undefined, (err) => {
  console.log('error')
})



// Add ambient light
const light = new THREE.DirectionalLight(0xffffff, 1); // soft white light
light.position.set(1, 2, 1)
scene.add(light);

const light2 = new THREE.DirectionalLight(0xffffff, 1); // soft white light
light2.position.set(2, 2, 1)
scene.add(light2);


const light3 = new THREE.DirectionalLight(0xffffff, 1); // soft white light
light3.position.set(2, 2, 3)
scene.add(light3);

const light4 = new THREE.DirectionalLight(0xffffff, 1); // soft white light
light4.position.set(-1, -1, 1)
scene.add(light4);

const light5 = new THREE.DirectionalLight(0xffffff, 1); // soft white light
light5.position.set(-1, -1, 5)
scene.add(light5);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(1000, 1000);
renderer.setClearColor(0xffffff, 0)

const camera = new THREE.PerspectiveCamera(25, 1000 / 1000, 0.1, 1000);
// camera.position.set(0, 1, 10)
camera.position.z = 11;
scene.add(camera)



// // Add ambient light
// const ambientLight = new THREE.AmbientLight(0xf0f0f0, 2000);
// scene.add(ambientLight);



function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}

onMounted(() => {
  target.value.appendChild(renderer.domElement);



  animate();
});
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
      phrases: [
        'Making dreams togehter.',
        'Helping all the way.',
        'Where Ideas Meet Impact.',
        'Beyond the Code.'
      ],
      currentService: '',
      slogan: '',
      currentPhraseIndex: 0,
      typingSpeed: 70,
      deletingSpeed: 80,
      isDeleting: false,
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
        const yOffset = -140
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

        window.scrollTo({ top: y, behavior: 'smooth' })
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
      if (this.isNavHowered == false) {
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
    toggleServiceInfo() {
      this.isService = !this.isService

      this.$nextTick(() => {
        let partId = this.getPartIdByTitle(this.currentService)
        console.log('part: ' + partId)

        this.$store.commit('docs/setCurrentSectionId', 1)
        console.log(this.$store.getters['docs/getCurrentSectionId'])
        this.$store.commit('docs/setCurrentPartId', partId)
        console.log('part id: ' + this.$store.getters['docs/getCurrentPartId'])
        this.$store.commit('docs/setCurrentArticle')
        this.$store.commit('docs/setCurrentPageInfo')
        this.$store.commit('docs/setCurrentNavigationHooks')
      });

    },
    toggleMenu() {
      if (window.innerWidth < 500) {
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
      if (window.innerWidth < 500) {
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
    typingSlogan() {
      const current = this.currentPhraseIndex % this.phrases.length
      const fullPhrase = this.phrases[current]

      if (this.isDeleting) {
        // Remove a character
        this.slogan = fullPhrase.substring(0, this.slogan.length - 1)
      } else {
        // Add a character
        this.slogan = fullPhrase.substring(0, this.slogan.length + 1)
      }

      // Determine the typing speed
      let typeSpeed = this.typingSpeed
      if (this.isDeleting) {
        typeSpeed = this.deletingSpeed
      }

      // If phrase is complete, pause before starting to delete
      if (!this.isDeleting && this.slogan === fullPhrase) {
        // Pause at end
        typeSpeed = 2000
        this.isDeleting = true
      } else if (this.isDeleting && this.slogan === '') {
        this.isDeleting = false
        this.currentPhraseIndex++
        // Pause before start typing next phrase
        typeSpeed = 500
      }

      setTimeout(() => this.typingSlogan(), typeSpeed)
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
            start: 'top-=10% top', // Animation starts when the top of the section hits the top of the viewport
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
    this.typingSlogan()

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
  @apply hidden;
}


#logoImg {
  @apply absolute left-0 top-0 w-[75px];
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

  background-image: url('@/assets/icons/sun.svg');
  background-repeat: no-repeat;
  background-size: 150%;
  background-position: top right;
  background-position-x: -50%;
  background-position-y: 70%;
}

#logoWrapper {
  @apply mt-[20vh] absolute flex flex-col justify-center items-start gap-5 ml-6;
  transform: translateX(-40%);
}

#logoWrapper>#logo {
  @apply text-4xl ml-[0.1rem] w-[50%];
  font-weight: 200;
}

#logoShort {
  @apply ml-1 text-[#777777] text-[0.6rem] font-light w-[74%];
}

#slogan {
  @apply text-[#777777] font-light text-lg w-[70%] pl-1;
}

#host {
  @apply absolute right-0;
  /*mobile*/
  @apply scale-[120%] w-[200%] -mr-[110vw] mt-[6rem];
}

#cases {
  @apply h-fit mb-[10rem] !important;
}

#casesTitle {
  @apply text-[4rem] self-center text-white text-center mt-[15rem];
  font-weight: 600;
}

#casesTitleWrapper {
  @apply flex flex-col justify-start items-start;
  width: 100% !important;
}

.casesSlogan {
  @apply hidden;
}

#casesWrapper {
  @apply flex flex-col gap-14 justify-start items-center w-full h-full pt-[1vh] pb-[50vh] mt-[9rem];
}

.case {
  transition: all 0.3s ease;
}

@media (hover: hover) {
  #casesWrapper>.case:hover {
    @apply shadow-[#6242BD] shadow-lg !important;
    scale: 102%;
  }
}

#casesWrapper::-webkit-scrollbar {
  display: none;
}

#services {
  @apply h-fit pb-[20rem] !important;
}

#servicesWrapper {
  @apply flex flex-col justify-center items-center gap-[1rem] pt-20;
}

#servicesWrapper::-webkit-scrollbar {
  display: none;
}

#servicesTitle {
  @apply text-[2.2rem] text-center;
  font-weight: 600;
}

#about {
  @apply h-fit !important;
}

#contact {
  @apply flex flex-col mt-[10rem] h-fit pb-20 justify-start items-center gap-10 !important;
}

#contactTitle {
  @apply text-center w-[80%] text-3xl;
}


/* max-width */
/* 499px */



@media (max-width: 499px) {
  #hireSmall {
    @apply block fixed w-[30%] h-9 top-5 right-[20%];
    z-index: 1000;
  }

}

@media (max-width: 721px) {
  #cases {
    @apply -mb-[77%] -mt-[5rem] !important;
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

@media (min-width: 500px) {
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
  #services {
    @apply -mt-[30rem];
  }

  #logoWrapper>#logo {
    width: 100%;
  }

  #logoWrapper {
    @apply ml-[8.5rem] mt-[16vh];
    scale: 134%;
  }

  #logoShort {
    @apply -mt-[3rem];
  }

  #slogan {
    @apply w-[80%] h-[10vh];
  }

  #host {
    @apply scale-[100%] w-[100%] -mr-[20vw] mt-[6rem] !important;
  }

  #cases {
    @apply flex justify-center mt-[10rem] px-[1rem] !important;
  }

  #casesWrapper {
    @apply w-[55vw] gap-[1.5rem];
  }

  #casesTitleWrapper {
    @apply mt-[9rem];
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
    @apply gap-[5rem] !important;
  }

  #casesTitleWrapper {
    @apply ml-[1%];
  }

  #about {
    @apply mb-[30rem] scale-[120%];
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
  #logoWrapper {
    @apply mt-[23vh] ml-[23.5rem];
    scale: 200%;
  }

  #logoShort {
    @apply -mt-[3.5rem] w-[50%];
  }

  #slogan {
    @apply w-[18rem];
  }
}

/*1100px*/

@media (min-width: 1100px) {
  #casesTitleWrapper {
    @apply w-[37%] ml-0 !important;
  }

  #casesWrapper {
    @apply w-[37vw] mt-[18rem] !important;
    scale: 120%;
  }

  #contact {
    @apply flex-row items-start mb-[10rem] !important;
  }

  #contactTitle {
    @apply text-[3rem] w-[100%] text-left ml-5;
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
  #servicesWrapper {
    @apply overflow-visible gap-[2rem];
    white-space: nowrap;
  }

  #servicesTitle {
    @apply text-left text-[3rem] mb-[2rem] pl-[2vw];
  }

  #about {
    @apply scale-[140%];
  }

  #contactTitle {
    @apply text-[4rem];
    line-height: 4.9rem !important;
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
  #about {
    @apply scale-[150%];
  }

  #logoShort {
    @apply -mt-[10%];
  }
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
