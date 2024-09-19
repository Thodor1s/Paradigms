<template>
  <div class="menu">
    <div v-for="section in menuData?.pages[0]?.sections" :key="section.name" class="section">
      <h2 class="section-title">{{ section.name }}</h2>
      <div v-for="(item, index) in section.items" :key="`${section.name}-${index}`">
        <template v-if="item.type === 'Logo'">
          <div class="logo-container">
            <template v-if="item.link">
              <!-- Internal Link -->
              <router-link v-if="isInternalLink(item.link)" :to="item.link">
                <img :src="`/assets/${item.logo}.png`" :alt="item.logo" class="logo-image" />
              </router-link>
              <!-- External Link -->
              <a v-else :href="item.link" target="_blank" rel="noopener">
                <img :src="`/assets/${item.logo}.png`" :alt="item.logo" class="logo-image" />
              </a>
            </template>
            <template v-else>
              <img :src="`/assets/${item.logo}.png`" :alt="item.logo" class="logo-image" />
            </template>
          </div>
        </template>
        <template v-else-if="item.type === 'Item'">
          <div class="menu-item">
            <h3 class="item-header">
              <span>{{ item.name }}</span>
              <span class="price" v-if="item.price">€{{ item.price.toFixed(2) }}</span>
            </h3>
            <p>{{ item.description }}</p>
          </div>
        </template>
        <template v-else-if="item.type === 'Disclaimer'">
          <div class="disclaimer">
            <p>{{ item.name }}</p>
          </div>
        </template>
        <template v-else-if="item.type === 'Title'">
          <div class="menu-title">
            <h4>{{ item.name }}</h4>
          </div>
        </template>
        <template v-else-if="item.type === 'Titbit'">
          <div class="menu-titbit">
            <h4>{{ item.name }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </template>
        <template v-else-if="item.type === 'MultiPrice'">
          <div class="menu-multi-price">
            <div class="multi-price-header">
              <h3>{{ item.name }}</h3>
              <h3 class="multi-price-list">
                <span v-for="(price, i) in item.prices" :key="i" class="multi-price-price">
                  <span v-if="price.quantity">{{ price.quantity }}</span>
                  <span v-if="price.price"> - €{{ price.price.toFixed(2) }}</span>
                </span>
              </h3>
            </div>
            <p>{{ item.description }}</p>
          </div>
        </template>
        <template v-else-if="item.type === 'Footer'">
          <div class="menu-footer">
            <h5>{{ item.name }}</h5>
            <p>{{ item.description }}</p>
          </div>
        </template>
      </div>
      <vLeaves />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import vLeaves from './v-Leaves.vue'

interface Menu {
  pages: {
    name: string
    sections: {
      name: string
      items: (
        | { type: 'Logo'; logo: string; link?: string }
        | { type: 'Item'; name: string; description?: string; price?: number }
        | { type: 'Disclaimer'; name: string }
        | { type: 'Title'; name: string }
        | { type: 'Titbit'; name: string; description?: string }
        | {
            type: 'MultiPrice'
            name: string
            description?: string
            prices: { quantity?: string; price?: number }[] //Up to 3
          }
        | { type: 'Footer'; name: string; description?: string }
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

// Helper function to check if a link is internal
const isInternalLink = (link: string) => {
  return link.startsWith('/') && !link.startsWith('//') // Internal links typically start with '/'
}
</script>

<style scoped>
.menu {
  overflow: hidden;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.menu-item {
  margin: 10px 0;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  margin-left: 10px; /* Optional: Adds space between the item name and price */
  white-space: nowrap; /* Prevents the price from wrapping */
}

.disclaimer {
  color: grey;
  font-style: italic;
}

.menu-title h4 {
  color: #2f616c;
  margin-top: 10px;
}

.menu-titbit {
  padding: 10px;
  background: #2f616c;
  color: white;
}

.multi-price-header {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.multi-price-list {
  display: flex;
  gap: 10px;
}

.multi-price-price {
  text-align: left;
  width: 120px;
  white-space: nowrap;
}

@media (max-width: 650px) {
  .multi-price-header {
    align-items: flex-start; /* Align items to the left */
    flex-direction: column; /* Stack the prices vertically */
  }

  .multi-price-list {
    margin-left: auto; /* Pushes the multi-price list to the right */
    gap: 5px;
  }

  .multi-price-price {
    width: auto; /* Remove the fixed width for smaller screens */
    text-align: left; /* Align text to the left in smaller viewports */
  }
}

.multi-price-list span {
  white-space: nowrap;
}

.menu-footer h5 {
  font-size: 16px;
  margin-top: 30px;
}

.section {
  margin: 10px;
  border: 10px solid #2f616c; /* 10px border */
  margin-top: 15px; /* 20px space between sections */
  padding: 10px; /* 10px padding inside the section */
  position: relative;
}

.section-title {
  font-weight: 500;
  position: absolute;
  top: -20px; /* Position the title above the top border */
  left: 10px;
  background-color: white; /* Optional: Add a background to the title for better visibility */
  padding: 0 5px; /* Add some padding around the title */
  font-size: 24px;
  color: #2f616c;
}

h2 {
  margin: 0; /* Ensure there is no margin on the title */
}

.menu-item,
.menu-titbit,
.menu-footer,
.menu-multi-price {
  margin: 10px 0; /* Space between the menu items */
}
.logo-container {
  display: flex;
  justify-content: center; /* Centers the image horizontally */
  align-items: center; /* Centers the image vertically (if needed) */
  padding: 10px;
}

.logo-image {
  max-width: 256px;
  max-height: 256px;
  width: auto; /* Maintains aspect ratio */
  height: auto; /* Maintains aspect ratio */
}
</style>
