<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="flowers">
    <div
      class="flower"
      v-parallax-speed
      :style="{
        width: `30000px`,
        opacity: 100
      }"
      :styles="['width', 'left']"
      :speed="-0.2"
    >
      🌸🌺💐💮🌹🌺🏵️💐🌹💮🌺💐🌸🌹💐🌸🌺💮💐🌺🏵️💮🏵️💐💮🌹🌺🏵️💐🌸🌸🌺💐💮🌹🌺🏵️💐🌹💮🌺💐🌸🌹💐🌸🌺💮💐🌺🏵️💮🏵️💐💮🌹🌺🏵️💐🌸🌸🌺💐💮🌹🌺🏵️💐🌹💮🌺💐🌸🌹💐🌸🌺💮💐🌺🏵️💮🏵️💐💮🌹🌺🏵️💐🌸🌸🌺💐💮🌹🌺🏵️💐🌹💮🌺💐🌸🌹💐🌸🌺💮💐🌺🏵️💮🏵️💐💮🌹🌺🏵️💐🌸🌸🌺💐💮🌹🌺🏵️💐🌹💮🌺💐🌸🌹💐🌸🌺💮💐🌺🏵️💮🏵️💐💮🌹🌺🏵️💐🌸🌸🌺💐💮🌹🌺🏵️💐🌹💮🌺💐🌸🌹💐🌸🌺💮💐🌺🏵️💮🏵️💐💮🌹🌺🏵️💐🌸🌸🌺💐💮🌹🌺🏵️💐🌹💮🌺💐🌸🌹💐🌸🌺💮💐
    </div>
  </div>
</template>

<script>
export default {
  name: 'vFlowers',
  mounted() {}
}
</script>

<style scoped>
.flowers {
  position: absolute;
  top: -75px;
  left: -200px;
  z-index: -1;
  font-size: 100px;
  line-height: 100px;
  white-space: nowrap; /* Prevent line breaks */
  opacity: 20%;
}

.flower {
  margin-bottom: 8px;
  background-color: transparent;
  width: 300px;
  height: 54px;
  position: relative;
}
</style>
