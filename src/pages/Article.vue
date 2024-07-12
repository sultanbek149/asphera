<template>
  <div id="wrapper">
    <div class="headingFont" id="articleWrapper">
      <side-bar @changeArticle="rerender"></side-bar>
      <article>
        <div v-html="markdownToHtml"></div>
      </article>
      <left-sidebar @searchArticle="searchArticle" @scrolTo="scrollToWord"></left-sidebar>
    </div>
    <art-header></art-header>
  </div>
</template>

<script setup>
import { marked } from 'marked';
</script>

<script>
export default {
  name: 'my-article',
  data() {
    return {
      msg: this.$store.getters['docs/getCurrentArticle']
    }
  },
  methods: {
    rerender() {
      window.location.reload();
    },
    searchArticle(article) {
      if (article === "empty") {
        this.msg = this.$store.getters['docs/getCurrentArticle']
      }
      this.msg = article
    },
    scrollToWord(text) {
      console.log(text)
      const elements = Array.from(document.querySelectorAll('*'))
        .filter(el => el.textContent.includes(text));


      let n = 7;
      if (elements.length >= 14) {
        n = 14;
      }
      if (elements.length > n) {
        const element = elements[n];

        //By playing with yOffest you can adjust where to scroll
        const yOffset = 5
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      } else {
        console.error('No element found or index out of range');
      }
    }
  },
  computed: {
    markdownToHtml() {
      return marked(this.msg);
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
}

</script>
<style scoped>
#wrapper {
  @apply flex flex-col justify-around items-center;
}

#articleWrapper {
  @apply mb-20 text-white flex flex-row justify-start items-start w-[100vw] h-fit;
  overflow-y: auto;
  scrollbar-color: yellow;
}

:deep(article) {
  @apply mt-10 p-2 flex flex-col justify-center w-[50%] h-fit;
}

:deep(h1) {
  @apply mb-10 font-medium text-6xl;
}

:deep(h2) {
  @apply mb-10 font-normal text-4xl;

}

:deep(h3) {
  @apply mb-10 font-light text-xl;
}

:deep(strong) {
  @apply font-bold text-purple-500;
  display: inline-block;
}

:deep(ul) {
  @apply ml-10 mb-10;
  list-style-type: disc;
}

:deep(ul > li) {
  @apply text-lg mb-2;
}

@media (max-width: 500px) {
  :deep(article) {
    @apply ml-[1rem] w-[72%];
  }
}

@media(max-width: 800px) {
  :deep(h1) {
    @apply text-5xl;
  }

  :deep(h2) {
    @apply text-3xl;
  }

  :deep(h3) {
    @apply text-lg;
  }
}

@media(min-height: 950px) {
  :deep(article) {
    @apply ml-[26%];
  }
}

@media(min-width:1300px) {
  :deep(article) {
    @apply ml-[26%];
  }
}
</style>
