<template>
  <div>
    <!-- Black screen with typing effect -->
    <div v-if="showIntro" class="black-screen">
      <p v-html="displayedText"></p>
    </div>

    <!-- Home Page content -->
    <div v-else>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// State to control the intro screen visibility
const showIntro = ref(true)

// Text to display letter by letter
const introText = 'we\nmake\nethical\nsoftware'
const displayedText = ref('')

// Function to handle the typing effect
const typeText = async () => {
  let index = 0
  const interval = 100 // Adjust typing speed

  while (index < introText.length) {
    if (introText[index] === '\n') {
      displayedText.value += '<br>'
    } else {
      displayedText.value += introText[index]
    }
    index++
    await new Promise((resolve) => setTimeout(resolve, interval))
  }
}

// Hide the intro and show the homepage after 5 seconds
onMounted(() => {
  typeText()
  setTimeout(() => {
    showIntro.value = false
  }, 5000) // 5 seconds delay
})
</script>

<style>
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
  text-align: center;
  white-space: pre-line; /* Preserve newlines */
}

/* Only this element */
p {
  font-family: 'Bryndan', sans-serif;
}

@font-face {
  font-family: 'Bryndan';
  src: url('@/assets/bryndan-write.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
</style>
