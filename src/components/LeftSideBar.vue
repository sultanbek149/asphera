<template>
  <transition name="jump">
    <div v-if="isVisible" id="leftSidebarWrapper">
      <h3 id="leftHeading">On this page:</h3>
      <div ref="list" v-html="markdownToHtml"></div>
      <form id="docsSearch" @submit.prevent">
        <fieldset>
          <input @input="searchArticle" v-model="searchQuery" type="text" id="name" required aria-required="true"
            placeholder="Search in docs" />
        </fieldset>
      </form>
    </div>
  </transition>

</template>

<script setup>
import { marked } from 'marked';
</script>

<script>
export default {
  name: 'left-sidebar',
  data() {
    return {
      isVisible: false,
      info: this.$store.getters['docs/getInfoForCurrentPart'],
      articles: this.$store.getters['docs/getArticles'],
      hooks: [],
      headings: [],
      prevHook: null,
      currentHookIndex: 0,
      searchQuery: ''
    }
  },
  methods: {
    getIndexByVal(arr, val) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].textContent === val) {
          console.log(i)
          return i;
        }
      }
    },
    sanitizeInput(input) {
      // Trim spaces from start and end, and replace multiple spaces with a single space
      return input.replace(/\s+/g, ' ').trim();
    },
    searchArticle() {
      for (const article of this.articles) {
        for (const part of article.parts) {
          if (this.sanitizeInput(this.searchQuery) && part.msg.toLowerCase().includes(this.sanitizeInput(this.searchQuery).toLowerCase())) {
            this.$store.commit('docs/setCurrentSectionId', article.id)
            // console.log(this.$store.getters['docs/getCurrentSectionId'])
            this.$store.commit('docs/setCurrentPartId', part.id)
            // console.log('part id: ' + this.$store.getters['docs/getCurrentPartId'])
            this.$store.commit('docs/setCurrentArticle')
            this.$store.commit('docs/setCurrentPageInfo')
            this.$store.commit('docs/setCurrentNavigationHooks')

            this.$emit('searchArticle', part.msg)
          }
        }
      }
    },
    handleElementClick(index) {
      var navHooks = this.$store.getters['docs/getCurrentNavigationHook']

      let textHook = navHooks[index]

      this.$emit('scrolTo', textHook);
    },
    observeHeaders() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            // console.log(entry.target.textContent + ' is fully visible at the top');
            // Call any function you want to execute when the header is at the top
            this.headerIntersected(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px 0px -70% 0px',
        threshold: 0.95
      });
      // let head = document.querySelectorAll('h1')

      // observer.observe(head[1])
      const headings = document.querySelectorAll('h2')

      this.headings = headings

      headings.forEach(h2 => {
        observer.observe(h2);
      });
      // console.log(head[1].innerHTML)

    },
    headerIntersected(target) {
      // this.$nextTick(() => {
      let hookIndex = this.getIndexByVal(this.headings, target.textContent)

      let hookElem = this.hooks[hookIndex]

      let sizeInFocus = document.getElementsByClassName('highlighted').length

      console.log('length: ' + sizeInFocus)

      if (sizeInFocus == 0) {
        hookElem.classList.add('highlighted')
        this.prevHook = hookElem
      }
      if (sizeInFocus >= 1) {
        this.prevHook.classList.remove('highlighted')
        hookElem.classList.add('highlighted')
        this.prevHook = hookElem
      }

      hookElem.classList.add('highlighted');

      // console.log('hiiii ' + this.hooks[hookIndex].textContent)
      console.log(`Header at the top: ${target.textContent}`);
      // });


    }
  },
  computed: {
    markdownToHtml() {
      return marked(this.info);
    },

  },
  mounted() {
    this.isVisible = true;
    // First, get the container div using ref
    this.$nextTick(() => {
      const hooks = document.querySelectorAll('#leftSidebarWrapper li');
      this.hooks = hooks
      this.hooks.forEach(el => console.log('from the hook:   ' + el.textContent))


      const container = document.getElementById('leftSidebarWrapper');
      if (container) {
        const ul = container.querySelector('ul');
        const liElements = ul.querySelectorAll('li');


        // const h2Elements = document.querySelectorAll('h2');
        // console.log(h2Elements); // This will log NodeList of h2 elements
        // h2Elements.forEach(h2 => console.log(h2.textContent));


        for (let i = 0; i < liElements.length; i++) {
          liElements[i].addEventListener('click', (event) => {
            this.handleElementClick(i);
          });

        }
      } else {
        console.log('Element not found');
      }
      this.observeHeaders();
    });

  }
}


</script>

<style scoped>
#leftSidebarWrapper {
  @apply border-l-2 border-l-[#373737] border-opacity-20 fixed top-0 p-5 right-0 w-[20%] h-[100vh];
}

#leftHeading {
  @apply mt-[40%] font-black !important;
}

input {
  @apply w-[100%] h-[2rem] rounded-full border border-white bg-transparent pl-5 !important;
  outline: none;
}


:deep(ul) {
  @apply ml-0 !important;
  list-style: none !important;
}

:deep(ul > li) {
  position: relative;
  @apply h-[1.8rem] font-light mb-10 !important;
  cursor: pointer;
  transition: all 0.3s ease !important;

}


:deep(ul > li::before) {
  @apply w-2 h-2;
  content: "";
  position: absolute;
  left: 3%;
  top: -0.8rem;
  background-color: #373737;
  opacity: 0.4;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

:deep(ul > li::after) {
  @apply border-[#373737] border-l-2 border-opacity-40;
  content: "";
  position: absolute;
  left: 3%;
  top: 100%;
  height: 80%;
  transform: translateX(-50%);
  border-radius: 50%;
}

:deep(ul > li:first-child::before) {
  display: none;
}

:deep(ul > li:last-child::after) {
  display: none;
}

:deep(li:hover) {
  @apply font-medium !important;
}

:deep(.highlighted) {
  @apply h-[1rem] font-medium !important;
  transition: all 0.3s ease !important;
}

/* TODO: optimize the look of search on smaller screens
    adjuts the look of text inside,the width
*/
#docsSearch {
  @apply mr-[2%] h-fit;
}

@media(min-width: 900px) {
  #docsSearch {
    @apply w-[95%] absolute top-[3%] right-0;
  }

}

@media(max-width: 800px) {
  input {
    @apply mt-[5rem] w-[103%] text-[0.8rem] pl-[1rem] !important;
  }

  :deep(ul > li) {
    @apply mb-12 !important;
  }

  :deep(ul > li:last-child) {
    @apply mt-[4rem];
  }
}


@media(max-width: 500px) {
  #leftSidebarWrapper {
    @apply top-0 w-[25%];
  }

  #leftHeading {
    @apply text-[0.9rem] w-fit -ml-[0.9rem] font-black !important;
  }

  :deep(ul > li) {
    @apply -ml-[0.9rem] mb-5 h-fit w-fit text-sm !important;
  }

  :deep(ul > li::before) {
    display: none;
  }

  :deep(ul > li::after) {
    display: none;
  }

  :deep(ul > li:last-child) {
    @apply mt-0;
  }


  :deep(.highlighted) {
    @apply h-fit !important;
  }


  input {
    @apply w-[121%] text-start pl-[0.5rem] -ml-[0.5rem] !important;
  }

}



@media(max-width: 450px) {
  input {
    @apply -ml-[0.9rem] w-[147%] text-[0.6rem] !important;
  }
}

@keyframes goIn {
  0% {
    transform: translateX(150%);
  }

  100% {
    transform: translateX(0%);
  }
}

@keyframes goOut {
  0% {
    transform: translateX(150%);
  }

  100% {
    transform: translateX(0%);
  }
}

.jump-enter-active {
  animation: goIn 0.3s ease;
}

.jump-leave-active {
  animation: goOut 0.3s ease forwards;
}
</style>
