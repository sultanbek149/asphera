<template>
    <div id="servicesWrapper" class="flex flex-wrap overflow-visible whitespace-nowrap relative gap-[1rem]">
        <div id="marker" :style="markerStyle"
            class="absolute text-[transparent] bg-white rounded-full p-2 px-4 text-[1rem] md:text-[1.5rem] h-fit font-medium">

        </div>
        <service-card v-for="(service, index) in $tm('whatWeOffer.services')" :key="service" :name="service"
            class="service-card text-[1rem] md:text-[1.5rem] rounded-full bg-[hsla(0,0%,7%,.25)] hover:bg-transparent p-2 px-4 h-fit text-white cursor-pointer font-medium z-10 hover:z-0"
            @mouseover="moveMarker" @mouseleave="resetMarker" id="service" @click="goToAbout(index)" />
        <!-- hover:z-10 transition-all ease duration-500 -->
    </div>
</template>

<script>
export default {
    name: 'services-wrapper'
}
</script>

<script setup>
import { ref } from 'vue'
import store from '@/store'
import router from '@/router'
import Tr from '@/i18n/translation'

const markerStyle = ref({
    top: '0px',
    left: '0px',
    width: '0px',
    height: '0px',
    opacity: '0'
});

const moveMarker = (e) => {
    const target = e.target;
    markerStyle.value = {
        top: `${target.offsetTop}px`,
        left: `${target.offsetLeft}px`,
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        opacity: '1'
        // display: 'block'
    };
    target.style.color = '#000'
    target.style.backgroundColor = '#fff'
};

const resetMarker = (e) => {
    const target = e.target;
    markerStyle.value = {
        ...markerStyle.value,
        opacity: '0'
    };
    target.style.color = '#fff'
    target.style.backgroundColor = 'hsla(0,0%,7%,.25)'
    target.style.zIndex = 100
};

const goToAbout = (id) => {
    store.commit('docs/setCurrentSectionId', 1);

    //TODO: set the part of the section by the case clicked
    store.commit('docs/setCurrentPartId', id)
    // store.commit('docs/setCurrentPageInfo')
    // store.commit('docs/setCurrentNavigationHooks')

    router.push('/docs')

    router.push(Tr.i18nRoute({ name: 'docs' }))
}

</script>

<style scoped>
#servicesWrapper::-webkit-scrollbar {
    display: none;
}

#marker {
    transition: top 200ms linear, left 200ms linear, opacity 100ms linear, width 100ms linear, height 100ms linear;
}

#service {
    white-space: normal;
    transition: background-color 0s linear 0ms;
}

#service:hover {
    transition: color 10ms linear 10ms, background-color 0s linear 300ms;
}


/* transition-[top] duration-200 */
</style>