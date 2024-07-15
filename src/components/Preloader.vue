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
}

.preloader.unshow {
    opacity: 0;
}

.preloader video {
    width: 100%;
    height: 100%;
}

html {
    overflow-y: hidden;
}
</style>