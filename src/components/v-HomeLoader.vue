<template>
  <div class="land">
    <!-- Black screen with typing effect -->
    <transition name="fade" mode="out-in">
      <div v-if="showIntro" class="black-screen">
        <p v-html="displayedText"></p>
      </div>
    </transition>

    <!-- Home Page content -->
    <transition name="fade" mode="out-in">
      <div v-if="!showIntro">
        <VBackground />
        <ParadigmsHome />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import VBackground from './v-Background.vue'
import ParadigmsHome from '@/components/v-ParadigmsHome.vue'
import { ref, onMounted } from 'vue'

// State to control the intro screen visibility
const showIntro = ref(true)

// Text to display letter by letter
const introText = `   we\n     make\nethical\n  software`
const displayedText = ref('')

// Function to handle the typing effect
const typeText = async () => {
  let index = 0
  const interval = 50 // Adjust typing speed

  while (index < introText.length) {
    if (introText[index] === ' ') {
      displayedText.value += '&nbsp;' // Add non-breaking spaces
    } else if (introText[index] === '\n') {
      displayedText.value += '<br>' // Handle line breaks
    } else {
      displayedText.value += introText[index]
    }
    index++
    await new Promise((resolve) => setTimeout(resolve, interval))
  }

  // Highlight the word "ethical" after typing is complete
  setTimeout(() => {
    displayedText.value = displayedText.value.replace(
      'ethical',
      '<span class="highlight">ethical</span>'
    )

    // Add class to trigger transition
    setTimeout(() => {
      const highlightElement = document.querySelector('.highlight')
      if (highlightElement) {
        highlightElement.classList.add('highlight-visible')
      }
    }, 250) // Delay to allow text to appear before applying transition
  }, 500)
}

// Hide the intro and show the homepage after 5 seconds
onMounted(() => {
  typeText()
  setTimeout(() => {
    showIntro.value = false
  }, 4000) // 5 seconds delay
})
</script>

<style>
/* Smooth fade transition */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in versions <2.1.8 */ {
  opacity: 0;
}

/* Styling for the black screen */
.black-screen {
  background-color: black;
  color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: 'Bryndan', sans-serif;
  text-align: left;
  white-space: pre-line; /* Preserve newlines */
}

/* Only this element */
.land p {
  width: 160px;
  height: 140px;
  background-color: black;
  font-family: 'Bryndan', sans-serif;
  line-height: 32px; /* Adjust line height for spacing between lines */
}

/* Highlighted word style with animation */
.highlight {
  border-radius: 5px;
  padding: 2px;
  line-height: 42px; /* Adjust line height for spacing between lines */
  background-color: white;
  color: black;
  font-weight: bold;
  transition:
    background-color 1s ease-in-out,
    color 1s ease-in-out;
  opacity: 0; /* Initially hidden */
}

/* Class to apply the visible state for the highlight effect */
.highlight-visible {
  opacity: 1; /* Make the highlight visible */
  background-color: white;
  color: black;
}

@font-face {
  font-family: 'Bryndan';
  src: url('@/assets/bryndan-write.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
</style>
