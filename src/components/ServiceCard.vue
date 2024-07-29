<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  name: 'service-card',
  // emits: ['toggleServiceInfo', 'infoOpen'],
  data() {
    return {
      isOpen: false
    }
  },
  props: {
    name: String
  }
}
</script>
