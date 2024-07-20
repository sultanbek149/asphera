<template>
    <transition>
        <div v-if="show" ref="preloader" class="preloader">
            <video autoplay="true" muted="true">
                <source src="@/assets/white.mp4" type="video/mp4">
            </video>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'pre-loader',
    data() {
        return {
            show: true
        }
    },
    mounted() {
        console.log('HELL YA')
        document.querySelector('html').style.overflowY = 'hidden'
        this.showToggle()
    },
    methods: {
        showToggle() {
            setTimeout(() => {
                this.$refs.preloader.classList.add('unshow')
            }, 4000)
            setTimeout(() => {
                this.show = false
                document.querySelector('html').style.overflowY = 'scroll'
            }, 5000);
        }
    }
}
</script>

<style>
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: black;
    transition: all ease .8s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.preloader.unshow {
    opacity: 0;
}

.preloader video {
    @apply min-[1000px]:h-[70%] min-[1000px]:w-[70%] w-full h-full; 
}
</style>