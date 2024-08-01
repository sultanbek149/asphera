<template>
    <!-- <div class="relative h-full mb-0 rounded-full bg-[#131313] bg-opacity-25 hover:bg-white cursor-pointer p-2 px-3 flex items-center"
        @mouseover="colorSvg = '#000'" @mouseout="colorSvg = '#fff'">
        <svg :fill="colorSvg" width="35px" height="34px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M478.33,433.6l-90-218a22,22,0,0,0-40.67,0l-90,218a22,22,0,1,0,40.67,16.79L316.66,406H419.33l18.33,44.39A22,22,0,0,0,458,464a22,22,0,0,0,20.32-30.4ZM334.83,362,368,281.65,401.17,362Z" />
            <path
                d="M267.84,342.92a22,22,0,0,0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73,39.65-53.68,62.11-114.75,71.27-143.49H330a22,22,0,0,0,0-44H214V70a22,22,0,0,0-44,0V90H54a22,22,0,0,0,0,44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-31.41-41.68-43.08-68.65-43.17-68.87a22,22,0,0,0-40.58,17c.58,1.38,14.55,34.23,52.86,83.93.92,1.19,1.83,2.35,2.74,3.51-39.24,44.35-77.74,71.86-93.85,80.74a22,22,0,1,0,21.07,38.63c2.16-1.18,48.6-26.89,101.63-85.59,22.52,24.08,38,35.44,38.93,36.1a22,22,0,0,0,30.75-4.9Z" />
        </svg>
        <div class="absolute bg-[white] -bottom-20 right-1 transition rounded-md px-4 py-2 font-[500]">
            <p class="text-black flex justify-start items-center" v-for="sLocale in supportedLocales"
                :key="`Locale is ${sLocale}`">{{ $t(`locales.${sLocale}`) }}</p>
        </div>
    </div> -->

    <div class="flex items-center gap-2">
        <button v-for="sLocale in supportedLocales" :key="sLocale" @click="switchLanguage(sLocale)"
            :class="{ active: currentLocale === sLocale }"
            class="flex items-center gap-1 border-2 border-[#717171] rounded-[10px] px-[.6rem] pt-[1px] pb-[4px] uppercase">
            <svg class="pt-[2.95px]" width="20" height="20" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    :stroke="currentLocale === sLocale ? '#000' : '#fff'" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M2 12H22" :stroke="currentLocale === sLocale ? '#000' : '#fff'" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z"
                    :stroke="currentLocale === sLocale ? '#000' : '#fff'" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg> <span class="pt-[4.5px]">{{ sLocale }}</span>
        </button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Tr from "../i18n/translation"

import { ref } from "vue"

const currentLocale = ref(Tr.currentLocale)

const supportedLocales = ref(Tr.supportedLocales)

const router = useRouter()

// const store = useStore()

const switchLanguage = async (newLocale) => {

    currentLocale.value = newLocale

    console.log(currentLocale.value, newLocale)
    await Tr.switchLanguage(newLocale)

    console.log('switchLAng')

    // await store.dispatch('changeLocale', newLocale);

    try {
        await router.replace({ params: { locale: newLocale } })
    } catch (e) {
        console.log(e)
        router.push("/")
    }
}


</script>

<script>
export default {
    name: 'language-switcher'
}
</script>

<style scoped>
button.active {
    @apply bg-white text-black font-medium border-white;
}
</style>