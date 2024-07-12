<template>
    <transition>
        <div v-if="show" class="preloader">
            <video autoplay="true" muted>
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
                this.show = false
                document.querySelector('html').style.overflowY = 'scroll'
            }, 4500);
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
}

.preloader video {
    width: 100%;
    height: 100%;
}

html {
    overflow-y: hidden;
}
</style>