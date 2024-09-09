<template>
  <div>
    <div v-for="section in menuData?.pages[0]?.sections" :key="section.name">
      <h2>{{ section.name }}</h2>
      <div v-for="(item, index) in section.items" :key="`${section.name}-${index}`">
        <template v-if="item.type === 'Logo'">
          <img :src="`/src/assets/${item.logo}.png`" :alt="item.logo" />
        </template>
        <template v-else-if="item.type === 'Item'">
          <div class="menu-item">
            <h3>{{ item.name }} - €{{ item.price }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </template>
        <template v-else-if="item.type === 'Disclaimer'">
          <div class="disclaimer">
            <p>{{ item.name }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

interface Menu {
  pages: {
    name: string
    sections: {
      name: string
      items: (
        | { type: 'Logo'; logo: string }
        | { type: 'Item'; name: string; description?: string; price?: number }
        | { type: 'Disclaimer'; name: string }
      )[]
    }[]
  }[]
}

const route = useRoute()
const restaurantName = ref<string>('')
let menuData = ref<Menu | null>(null)

onMounted(async () => {
  if (route.name === 'Krokodeilos') {
    restaurantName.value = 'Krokodeilos'
    const data = await import('../assets/krokodeilos.json')
    menuData.value = data.default as Menu
  } else if (route.name === 'Sourikata') {
    restaurantName.value = 'Sourikata'
    const data = await import('../assets/sourikata.json')
    menuData.value = data.default as Menu
  }
})
</script>

<style scoped>
.logo {
  font-size: 24px;
  font-weight: bold;
}

.menu-item {
  margin: 10px 0;
}

.disclaimer {
  color: grey;
  font-style: italic;
}
</style>
