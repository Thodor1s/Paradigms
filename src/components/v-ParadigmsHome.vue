<template>
  <div ref="scrollSections" class="home">
    <!-- Navigation buttons -->
    <div class="nav-buttons">
      <button @click="scrollToSection(1)">About Us</button>
      <button @click="scrollToSection(2)">Projects</button>
      <button @click="scrollToSection(3)">Contact</button>
    </div>

    <!-- Section 1: Logo -->
    <section class="full-page-section logo-section">
      <img src="/assets/paradigms.png" alt="Paradigms Logo" class="logo" />
      <div class="scrolldown">
        <div class="chevrons">
          <div class="chevrondown"></div>
          <div class="chevrondown"></div>
        </div>
      </div>
    </section>

    <!-- Section 2: About Us -->
    <section class="full-page-section about-section">
      <div style="padding: 50px; max-width: 900px">
        <h1>we make ethical software</h1>
        <br />
        <p>
          Hello there! I'm
          <u
            onclick="window.location.href='https://www.linkedin.com/in/theobizbis/'"
            style="cursor: pointer"
            >Theodred</u
          >, and I believe tech should make the real world a better place. I founded Paradigms to
          offer software engineering and consulting services on a pro-bono or volunteer basis to
          non-profits and ethical businesses. My mission? To create exemplary, impactful and ethical
          solutions that are as affordable as they are awesome!
        </p>
        <br />
        <p>
          At
          <u
            onclick="window.location.href='https://www.linkedin.com/company/paradigms/'"
            style="cursor: pointer"
            >Paradigms</u
          >, we're all about transparency, integrity, and making a positive impact. When you partner
          with us, you're teaming up with Theodred and a team of passionate software engineers,
          partners, and volunteers who excel at delivering ethical, sustainable solutions that truly
          make a difference! Do you represent a non-profit or an ethical business?
          <u @click="scrollToSection(3)" style="cursor: pointer">Contact Us!</u>
        </p>
      </div>
    </section>

    <!-- Section 3: Projects -->
    <section class="full-page-section projects-section">
      <div class="projects-container">
        <h1 class="projects-heading">Our Projects</h1>
        <div class="carousel">
          <button @click="prevSlide" class="carousel-control prev">‹</button>
          <div class="carousel-track-container">
            <ul class="carousel-track">
              <li class="carousel-slide" style="background-color: #ca2e16">
                <div style="max-width: 900px">
                  <h2>Dimension Factory</h2>
                  <br />
                  <p>
                    Dimension Factory is a cutting-edge Tabletop RPG platform that puts the full
                    list of digital tools for progression, game tracking, and storytelling at the
                    hands of small and independent Game Makers and Game Masters. DF is not a Virtual
                    Tabletop. We've lovingly designed it as a tool that reinforces Tabletop
                    experiences and does not detract from the in-person nature of the games we love.
                  </p>
                  <br />
                  <span class="tooltip">
                    <button onclick="window.location.href='https://dimension-factory.gr'">
                      Go to Dimension Factory
                    </button>
                    <button @click="scrollToSection(3)">
                      That sounds awesome for my TTRPG system!
                    </button>
                  </span>
                </div>
              </li>
              <li class="carousel-slide">
                <div style="max-width: 900px">
                  <h2>BN Accounting</h2>
                  <br />
                  <p>
                    BN Accounting is a platform designed to provide trustworthy advice on
                    accounting, tax-consulting, employment, social security and pensions in Greece.
                    Users can ask questions and receive help from certified Fiduciaries, certified
                    Tax Consultants by the Economic Chamber of Greece, and certified public
                    insurance and pension consultants by EFKA, ensuring something unique for the
                    Greek financial market:
                    <u>impartial guidance</u> that prioritizes their interests.
                  </p>
                  <br />
                  <span class="tooltip">
                    BN Accounting is already operational, and the platform is at the final stages of
                    development. It will be available to the general public some time in Q4/2024
                  </span>
                </div>
              </li>
              <li class="carousel-slide" style="background-color: #222222">
                <div style="max-width: 900px">
                  <h2>Evimnos</h2>
                  <br />
                  <p>
                    Evimnos is an app designed to help cultural institutions plan and manage events
                    according to established protocols. Originally developed for military bands, it
                    is equally applicable to traditional dance clubs, ceremony halls, and religious
                    institutions. Evimnos streamlines scheduling based on protocol, equipment and
                    personnel.
                  </p>
                  <br />
                  <span class="tooltip">
                    Evimnos is an in-house project. The original Evimnos was built as a windows
                    application. We are currently rebuilding it as a web platform and pitching it to
                    cultural institutions with an early 2025 release.
                    <br />
                    <br />
                    <button @click="scrollToSection(3)">I'm interested in Evimnos!</button>
                  </span>
                </div>
              </li>
              <li class="carousel-slide">
                <h2>Other Projects:</h2>
                <router-link to="/krokodeilos" style="color: darkgray"
                  >Krokodeilos Menu</router-link
                >
                <router-link to="/sourikata" style="color: darkgray">Sourikata Menu</router-link>
              </li>
            </ul>
          </div>
          <button @click="nextSlide" class="carousel-control next">›</button>
        </div>
      </div>
    </section>

    <!-- Section 4: Contact -->
    <section class="full-page-section contact-section">
      <h1>Contact Us</h1>
      <p>Drop by and say hello!</p>
      <p>Reach out to us at +30 693 40 94 282 or hello@paradigms.gr!</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ParadigmsHome',
  data() {
    return {
      currentSlide: 0
    }
  },
  methods: {
    scrollToSection(index) {
      const sections = this.$refs.scrollSections.querySelectorAll('section')
      const target = sections[index]
      target.scrollIntoView({ behavior: 'smooth' })
    },
    prevSlide() {
      const slides = this.$refs.scrollSections.querySelectorAll('.carousel-slide')
      this.currentSlide = this.currentSlide > 0 ? this.currentSlide - 1 : slides.length - 1
      this.updateSlidePosition()
    },
    nextSlide() {
      const slides = this.$refs.scrollSections.querySelectorAll('.carousel-slide')
      this.currentSlide = this.currentSlide < slides.length - 1 ? this.currentSlide + 1 : 0
      this.updateSlidePosition()
    },
    updateSlidePosition() {
      //const slides = this.$refs.scrollSections.querySelectorAll('.carousel-slide')
      const track = this.$refs.scrollSections.querySelector('.carousel-track')
      track.style.transform = `translateX(-${this.currentSlide * 100}%)`
    }
  }
}
</script>

<style scoped>
/* Home container */
.home {
  overflow-y: auto;
  height: 100vh;
  scroll-behavior: smooth;
}

/* Full-page sections */
.full-page-section {
  z-index: 5;
  font-family: 'Bryndan', sans-serif;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative; /* Add this */
}

/* Fade-in animation for logo and buttons */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* copy from here */
.scrolldown {
  --color: white;
  --sizeX: 30px;
  --sizeY: 50px;
  position: relative;
  width: var(--sizeX);
  height: var(--sizeY);
  margin-left: var(sizeX / 2);
  border: calc(var(--sizeX) / 10) solid var(--color);
  border-radius: 50px;
  box-sizing: border-box;
  margin-bottom: 16px;

  /* Initial opacity for fade-in */
  opacity: 0;
  transition: opacity 1s ease-in; /* 1s transition for fade-in */
  animation: fadeIn 0.5s ease-in forwards;
  animation-delay: 2s; /* Delay of 2 seconds */
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.scrolldown::before {
  content: '';
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: var(--color);
  border-radius: 100%;
  animation: scrolldown-anim 2s infinite;
  box-sizing: border-box;
  box-shadow: 0px -5px 3px 1px #ffffff66;
}

@keyframes scrolldown-anim {
  0% {
    opacity: 0;
    height: 6px;
  }
  40% {
    opacity: 1;
    height: 10px;
  }
  80% {
    transform: translate(0, 20px);
    height: 10px;
    opacity: 0;
  }
  100% {
    height: 3px;
    opacity: 0;
  }
}

.chevrons {
  padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.chevrondown {
  margin-top: -2px;
  position: relative;
  border: solid var(--color);
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
}
.chevrondown:nth-child(odd) {
  animation: pulse 500ms ease infinite alternate;
}
.chevrondown:nth-child(even) {
  animation: pulse 500ms ease infinite alternate 250ms;
}
@keyframes pulse {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}
/*copy until here */

/* Specific section backgrounds */
.logo-section {
  z-index: 1;
  padding-top: 30px;
  background: transparent;
}

.about-section {
  background-color: black;
  opacity: 1;
}

.projects-section {
  background-color: rgb(53, 53, 53);
  opacity: 1;
}

.contact-section {
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  width: 100%;
  justify-content: center;
}

.contact-left,
.contact-right {
  width: 50%;
  padding: 20px;
}

.contact-right {
  border-left: 2px solid #ccc;
}

/* Logo styling */
.logo {
  max-width: 300px;
  margin-bottom: 20px;
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
  animation-delay: 0.5s;
}

/* Navigation buttons on the first section */
.nav-buttons {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 2;
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
  animation-delay: 0.5s;
}
.nav-buttons button {
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: none;
  cursor: pointer;
  font-family: 'Bryndan';
  font-size: 15px;
  border-radius: 6px;
}

.tooltip button {
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: none;
  cursor: pointer;
  font-family: 'Bryndan';
  font-size: 15px;
  border-radius: 6px;
  margin: 5px;
}

.nav-buttons button:hover {
  background-color: #ccc;
}

.projects-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.projects-heading {
  position: absolute;
  top: 20px; /* Adjust as needed */
  width: 100%;
  z-index: 2;
  text-align: center;
  margin: 0;
}

/* Carousel styling */
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-track-container {
  overflow: hidden;
  height: 100%; /* Adjust as needed */
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  padding: 0;
  height: 100%;
}

.carousel-slide {
  min-width: 100%;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.carousel-control {
  width: 20px;
  height: 30px;
  position: absolute;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

/* Other styles */
ul {
  list-style-type: none;
}

@font-face {
  font-family: 'Bryndan';
  src: url('@/assets/bryndan-write.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
</style>
