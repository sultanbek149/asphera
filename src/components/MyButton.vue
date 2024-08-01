<template>
  <button @touchstart="toggleActive" @touchend="toggleActive" :class="{ active: isActive }">
    <span class='text'>
      <slot></slot>
    </span>
    <span></span>
  </button>
</template>

<script>
export default {
  name: 'my-button',
}
</script>

<script setup>
import { ref } from 'vue'
const isActive = ref(false)

const toggleActive = () => isActive.value = !isActive.value

</script>

<style scoped>
@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

button {
  @apply w-[10rem] h-[2.7rem] flex items-center justify-center rounded-[9px] font-[500];
  background: #191c29;
  cursor: pointer;
  position: relative;
  transition: all .3s ease;
}

button::before,
button::after {
  content: "";
  position: absolute;
  inset: -.09rem;
  z-index: -1;
  background: conic-gradient(from var(--gradient-angle), #707070, #707070, #6BA5A8, #4B71FF);
  border-radius: inherit;
  animation: rotation 2s linear infinite;
}

button span:not(.text) {
  @apply max-[500px]:pt-[0.09rem];

  display: block;
  background: #000;
  z-index: 10;
  height: 100%;
  width: 100%;
  z-index: 10;
  border-radius: inherit;
  transition: all .3s ease;
}

.text {
  position: absolute;
  top: 47%;
  left: 0;
  line-height: 0;
  height: fit-content;
  width: 100%;
}

button::after {
  filter: blur(3.5rem);
}

@keyframes rotation {
  0% {
    --gradient-angle: 0deg;
  }

  100% {
    --gradient-angle: 360deg
  }
}

/*button {
  background: -webkit-linear-gradient(225deg, rgb(251, 175, 21), rgb(251, 21, 242), rgb(21, 198, 251)) 0% 0% / 300% 300%;
  background-size: 200% auto;
  -webkit-animation: gradient_move 3s ease infinite;
  animation: gradient_move 3s ease infinite;
} */

button:hover {
  @apply scale-105;
}

button:hover::after,
button:hover::before {
  animation: none;
  background: white;
}

button:hover span {
  font-weight: 700;
  background-color: #fff;
  color: #000;
  transition: all .3s ease;
}

button:active {
  @apply scale-95;
}

@media (hover: none) {
  .active {
    @apply scale-95;
  }
}
</style>
