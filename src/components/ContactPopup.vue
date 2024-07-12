<template>
  <div v-if="visible" class="inter popup" :class="{ 'fade-in': fadeIn, 'fade-out': fadeOut }">
    Thank you! We'll contact you soon.
  </div>
</template>

<script>
export default {
  name: 'contact-message',
  data() {
    return {
      visible: false,
      fadeIn: false,
      fadeOut: false,
    };
  },
  methods: {
    showPopup() {
      this.visible = true;
      this.fadeIn = true;

      setTimeout(() => {
        this.fadeIn = false;
        this.fadeOut = true;
      }, 500);

      setTimeout(() => {
        this.visible = false;
        this.fadeOut = false;
      }, 2500);
    }
  }
};
</script>

<style scoped>
.popup {
  opacity: 0;
  transition: opacity 0.5s ease;
  position: fixed;
  font-size: 1rem;
  font-weight: 600;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  color: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  z-index: 1000;
}

.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
}
</style>
