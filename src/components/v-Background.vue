<template>
  <div>
    <v-vanta :effect="effect" :options="options"></v-vanta>
  </div>
</template>

<script>
import VVanta from 'vue-vanta-revamp'
export default {
  components: { VVanta },
  data() {
    return {
      effect: 'halo',
      options: {
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        baseColor: 0x0,
        backgroundColor: 0x0,
        amplitudeFactor: 2.4,
        size: 2.7
      }
    }
  }
}
</script>

<style>
#vanta-bg {
  z-index: -1000;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
