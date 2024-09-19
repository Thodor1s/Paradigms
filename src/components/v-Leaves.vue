<template>
  <div class="leafGroup">
    <img
      class="triangle"
      v-for="(leaf, index) in leafGroups"
      :key="index"
      :src="`/assets/${leaf.image}.png`"
      v-parallax-speed
      :styles="['transform', 'opacity']"
      :contentScrollPositionStyleValue="`rotate(${leaf.rotation}deg)`"
      :speed="[leaf.speedX, leaf.speedY, leaf.speedOpacity]"
      :style="{
        [leaf.positionX]: `${leaf.positionXValue}px`,
        [leaf.positionY]: `${leaf.positionYValue}px`,
        width: `${leaf.size}px`,
        height: `${leaf.size}px`,
        position: 'absolute',
        opacity: 0.3
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'vLeaves',
  data() {
    return {
      leafGroups: this.generateLeafGroups()
    }
  },
  methods: {
    generateLeafGroups() {
      const leafImages = ['leaf1', 'leaf2', 'leaf3', 'leaf4']
      const positionsX = ['left', 'right'] // Randomly choose between 'left' or 'right'
      const positionsY = ['top', 'bottom'] // Randomly choose between 'top' or 'bottom'

      return Array.from({ length: 4 }, () => {
        const randomLeaf = leafImages[Math.floor(Math.random() * leafImages.length)]
        const randomPosX = positionsX[Math.floor(Math.random() * positionsX.length)] // Pick 'left' or 'right'
        const randomPosY = positionsY[Math.floor(Math.random() * positionsY.length)] // Pick 'top' or 'bottom'

        return {
          image: randomLeaf,
          rotation: Math.floor(Math.random() * 200), // Random rotation between 0-60 degrees
          speedX: Math.random() * 0.05 * [-1, 1][Math.floor(Math.random() * 2)], // Random horizontal speed
          speedY: Math.random() * 0.15, // Random vertical speed
          speedOpacity: 0.005,
          positionX: randomPosX, // Either 'left' or 'right'
          positionXValue: Math.floor(Math.random() * 100), // Random X position between 0 and 200
          positionY: randomPosY, // Either 'top' or 'bottom'
          positionYValue: Math.floor(Math.random() * 100), // Random Y position between 0 and 200
          size: Math.floor(Math.random() * 100) + 150 // Random size between 100 and 200
        }
      })
    }
  }
}
</script>

<style scoped>
.leafGroup {
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: -1;
  width: 100%;
  opacity: 0.2;
}
</style>
