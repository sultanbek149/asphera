<template>
  <div id="pageOverlay">
    <transition name="jump">
      <div id="serviceInfoWrapper">
        <button ref="close" @click="$emit('close')" id="closeBtn" aria-label="Close">
          <img src="/src/assets/icons/closeBtn.svg" alt="close icon" aria-hidden="true" />
        </button>

        <div id="infoWrapper">
          <h2 class="serviceHeadingFont" id="title">{{ title }}</h2>
          <h2 id="fullDesc" class="inter description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac sodales est. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              In hac habitasse platea dictumst. Maecenas semper tempor nulla, id cursus sem mattis
              et. Suspendisse ut purus sit amet arcu ultricies
            </p>
          </h2>
          <ul id="servicesList" class="inter description">
            <li>
              <p>We offer you this</p>
            </li>
            <li>
              <p>And also you would get that</p>
            </li>
            <li>
              <p>Furthemore you’d got this</p>
            </li>
            <li>
              <p>We help you do this</p>
            </li>
          </ul>
          <my-button @click="goToServices" id="moreBtn">Learn more</my-button>
        </div>

        <div id="correspCases" ref="correspContainer">
          <case-card class="case" v-for="i in [1, 2, 3, 4, 5]" :key="i"></case-card>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
</script>
<script>
export default {
  name: 'service-info',
  props: {
    title: { type: String }
  },
  methods: {
    goToServices() {
      this.$router.push('/about')
    },
    createObserver() {
      const options = {
        root: this.$refs.correspContainer,
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
    initScrollTrigger() {
      const container = document.querySelector('#correspCases') // The scrollable container
      const fadingElements = container.querySelectorAll('.case') // Elements that will fade

      if (window.innerWidth >= 1200) {
        let factor = 0
        fadingElements.forEach((fadingElement) => {
          gsap.to(fadingElement, {
            scrollTrigger: {
              trigger: fadingElement,
              scroller: container, // Scrollable container
              start: 'top+=' + 110 * factor + '% top', // Starts fading when the top of the element hits the top of the container
              end: 'top+=' + 110 * factor + '% center', // Complete the fade when the top of the element is at the center of the container
              scrub: true,
              markers: false
            },
            ease: 'none'
          })
        })
        ScrollTrigger.refresh()
      }
    },
    startCardsAnim() {
      const container = document.querySelector('#correspCases') // The scrollable container
      const cards = container.querySelectorAll('.case') // Elements that will fade


      let val = 0;
      cards.forEach((card, index) => {
        if (window.innerWidth < 1200) {
          val = index * -60;
        }
        card.style.transition = 'transform 1.5s ease, opacity 1s ease'
        card.style.transform = 'translateY(' + val + '%)'
      })
    }
  },
  mounted() {
    this.initScrollTrigger()
    this.startCardsAnim()
  }
}
</script>
<style scoped>
#pageOverlay {
  @apply fixed flex justify-center items-center bg-black bg-opacity-40 w-[100vw] h-[100vh] !important;
  top: 0;
  left: 0;
  z-index: 100;
}

#serviceInfoWrapper {
  @apply flex flex-col justify-start items-start w-[90vw] h-[80vh] bg-[#191919] rounded-2xl overflow-scroll pb-16;
}

#infoWrapper {
  @apply flex flex-col justify-center items-center w-full h-fit mt-[20%];
}

#closeBtn {
  @apply absolute;
  scale: 170%;
  right: calc(100% - 88%);
  top: calc(100% - 85%);
  z-index: 100;
}

#title {
  @apply text-5xl;
}

.description {
  @apply font-medium text-center !important;
}

#fullDesc {
  @apply mt-[10%] w-[76%];
}

#servicesList {
  @apply text-left mt-[10%] !important;
}

li {
  list-style-type: disc;
}

#correspCases {
  @apply flex flex-col justify-center items-center w-full mt-10 gap-8;
}

.case {
  scale: 90%;
  @apply w-[100%] shadow-lg shadow-[#6242BD] !important;
  --n: 1;
  transform: translateY(calc(var(--n) * -110%));
}

.case:nth-child(1) {
  --n: 0;
}

.case:nth-child(2) {
  --n: 1;
}

.case:nth-child(3) {
  --n: 2;
}

.case:nth-child(4) {
  --n: 3;
}

.case:nth-child(5) {
  --n: 4;
}

#moreBtn {
  @apply scale-150 font-bold mb-[2rem] mt-[4rem];
}


@media(max-width: 1199px) {
  #correspCases {
    @apply flex justify-between h-[159%];
  }

}

/*800px*/

@media (min-width: 800px) {
  #moreBtn {
    @apply scale-[250%] mb-[5.5rem] mt-[5.5rem];
  }

  #title {
    @apply text-[7rem];
  }

  .description {
    @apply text-[1.5rem];
  }

  #servicesList {
    @apply mt-[5%] !important;
  }

  .case {
    @apply w-[66%] !important;
  }
}

/*1200px*/
@media (min-width: 1200px) {
  #moreBtn {
    @apply scale-150 ml-10 mt-10;
  }

  #closeBtn {
    right: calc(100% - 92%) !important;
  }

  #serviceInfoWrapper {
    @apply flex-row overflow-auto pb-3;
  }

  #infoWrapper {
    @apply mt-0 p-10 items-start;
  }

  #title {
    @apply text-[4rem] text-left !important;
  }

  .description {
    @apply text-left text-[1.55rem] !important;
  }

  #fullDesc {
    @apply w-[96%] !important;
  }

  #servicesList {
    @apply ml-7;
  }

  .case {
    scale: 140%;
  }

  #correspCases {
    @apply mt-[4.5rem] overflow-y-scroll justify-start pt-[5%] h-[88%] pb-[4.5%] w-[114%] mr-[2vw];
  }

  #correspCases::-webkit-scrollbar {
    background-color: black;
    width: 0.6rem;
  }

  #correspCases::-webkit-scrollbar-track {
    background-color: black;
  }

  #correspCases::-webkit-scrollbar-thumb {
    @apply rounded-full bg-[#0C0C0C];
  }
}

@media (min-height: 540px) {
  #correspCases {
    @apply gap-[6rem] !important;
  }
}

@media (min-width: 722px) {
  #serviceInfoWrapper {
    overflow-x: hidden;
  }

  #serviceInfoWrapper::-webkit-scrollbar {
    background-color: black;
    width: 0.6rem;
  }

  #serviceInfoWrapper::-webkit-scrollbar-track {
    background-color: black;
  }

  #serviceInfoWrapper::-webkit-scrollbar-thumb {
    @apply rounded-full bg-[#0C0C0C];
  }
}

@keyframes fadeIn {
  0% {
    transform: translateY(50%);
  }

  100% {
    transform: translateY(0%);
  }
}

@keyframes fadeOut {
  0% {
    transform: translateY(0%);
  }

  100% {
    transform: translateY(50%);
  }
}

.jump-enter-active {
  animation: fadeIn 0.3s ease-out;
}

.jump-leave-active {
  animation: fadeOut 0.3s ease-in forwards;
}
</style>
