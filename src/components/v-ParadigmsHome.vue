<template>
  <div ref="scrollSections" class="home">
    <!-- Navigation buttons -->
    <div :class="['nav-buttons', { hidden: hideNavButtons }]">
      <button @click="scrollToSection(1)">About</button>
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
            >Théodred</u
          >, and I believe tech should make the real world a better place. I created Paradigms to
          offer software engineering and consulting services on a pro-bono or volunteer basis to
          non-profits and ethical businesses. My mission? To create exemplary, impactful and ethical
          solutions for causes I believe in!
        </p>
        <br />
        <p>
          At
          <u
            onclick="window.location.href='https://www.linkedin.com/company/paradigms/'"
            style="cursor: pointer"
            >Paradigms</u
          >, we're all about transparency, integrity, and making a positive impact. When you partner
          with us, you're teaming up with Théodred and a team of passionate software engineers,
          partners, and volunteers who excel at delivering ethical, sustainable solutions that truly
          make a difference! Do you represent a non-profit or an ethical business?
          <u @click="scrollToSection(3)" style="cursor: pointer">Contact Me!</u>
        </p>
      </div>
    </section>

    <!-- Section 3: Projects -->
    <section class="full-page-section projects-section">
      <div class="projects-container">
        <h1 class="projects-heading">Projects</h1>
        <div class="carousel">
          <button @click="prevSlide" class="carousel-control prev">‹</button>
          <div class="carousel-track-container">
            <ul class="carousel-track">
              <li class="carousel-slide" style="background-color: #e94f37">
                <div style="max-width: 900px">
                  <img src="/assets/df.png" alt="DF" class="plack1-1" />
                  <h2>Dimension Factory</h2>
                  <br />
                  <p>
                    Dimension Factory is a cutting-edge Tabletop RPG Platform that puts the full
                    list of digital tools for progression, game tracking, and storytelling at the
                    hands of small and independent Game Makers and Game Masters. DF is not a Virtual
                    Tabletop. We've lovingly designed it as a tool that reinforces the in-person
                    Tabletop RPG experience, and helps us
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
              <li class="carousel-slide" style="background-color: #222222">
                <div style="max-width: 900px">
                  <img src="/assets/bn.png" alt="BN" class="plack1-1" />
                  <h2>BN Accounting</h2>
                  <br />
                  <p>
                    BN Accounting is a platform designed to provide trustworthy advice on
                    accounting, tax-consulting, employment, social security and pensions in Greece.
                    Users can ask questions and receive help from certified Fiduciaries, certified
                    Tax Consultants by the Economic Chamber of Greece, and certified public
                    insurance and pension consultants by EFKA. Unlike other professionals, BN
                    provides users with impartial guidance that prioritizes <u>their</u> interests.
                  </p>
                  <br />
                  <span class="tooltip">
                    BN Accounting is already operational, and the platform is at the final stages of
                    development. It will be available to the general public some time in Q4/2024
                  </span>
                </div>
              </li>
              <li class="carousel-slide" style="background-color: #214478">
                <div style="max-width: 900px">
                  <img src="/assets/evimnos.png" alt="Evimnos" class="plack1-1" />
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
                    application. I'm currently rebuilding it as a web platform and pitching it to
                    cultural institutions with a possible early 2025 release.
                    <br />
                    <br />
                    <button @click="scrollToSection(3)">I'm interested in evimnos!</button>
                  </span>
                </div>
              </li>
              <li
                class="carousel-slide"
                style="
                  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                    url('/assets/static.gif');
                "
              >
                <h3>Other Projects</h3>
                <router-link to="/krokodeilos" style="color: darkgray">
                  <img src="/assets/krokodeilosPlack.png" alt="Krokodeilos Menu" class="plack1-2" />
                </router-link>
                <router-link to="/sourikata" style="color: darkgray">
                  <img src="/assets/sourikataPlack.png" alt="Krokodeilos Menu" class="plack1-2"
                /></router-link>
                <router-link to="/ILCA-training-data-kit" style="color: darkgray">
                  <img
                    src="/assets/ilcaTDKPlack.png"
                    alt="Ilca Training Data Kit"
                    class="plack1-2"
                  />
                </router-link>
              </li>
            </ul>
          </div>
          <button @click="nextSlide" class="carousel-control next">›</button>
        </div>
      </div>
    </section>

    <!-- Section 4: Contact -->
    <section class="full-page-section contact-section">
      <form @submit.prevent="sendEmail">
        <h1>Contact Me</h1>
        <br />
        <div>
          <span>
            <div>
              <label for="name">Type your Name,</label>
            </div>
            <div>
              <input type="text" id="name" v-model="form.name" required />
            </div>
            <div>
              <label for="email">Type your e-mail so I can reach back,</label>
            </div>
            <div>
              <input type="email" id="email" v-model="form.email" required />
            </div>
            <div>
              <label for="message">And your message...</label>
            </div>
            <div>
              <textarea id="message" v-model="form.message" required></textarea>
            </div>
            <button type="submit">Send</button>
            <div>
              <p v-if="statusMessage">{{ statusMessage }}</p>
            </div>
          </span>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ParadigmsHome',
  data() {
    return {
      currentSlide: 0,
      form: {
        name: '',
        email: '',
        message: ''
      },
      hideNavButtons: false,
      statusMessage: ''
    }
  },
  methods: {
    handleScroll() {
      const scrollPosition = this.$refs.scrollSections.scrollTop
      const threshold = window.innerHeight * 0.999
      this.hideNavButtons = scrollPosition > threshold
    },
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
    },
    sendEmail() {
      const serviceID = 'service_paradigms'
      const templateID = 'template_s7d6g87'

      const templateParams = {
        name: this.form.name,
        email: this.form.email,
        message: this.form.message
      }
      axios
        .post('https://api.emailjs.com/api/v1.0/email/send', {
          service_id: serviceID,
          template_id: templateID,
          user_id: '9eHYVI1GZpaY7SX0F',
          template_params: templateParams
        })
        .then((response) => {
          this.statusMessage = 'I will contact you shortly!'
          this.form = { name: '', email: '', message: '' }
        })
        .catch((error) => {
          this.statusMessage = 'Failed to send email. Please try again later.'
          console.error('EmailJS Error:', error)
        })
    }
  },
  mounted() {
    this.$refs.scrollSections.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    this.$refs.scrollSections.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
/* Home container */
.home {
  overflow-y: auto;
  height: 100vh;
  scroll-behavior: smooth;
  font-size: 18px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.home::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

@media (max-width: 500px) {
  .home {
    font-size: 14px;
  }
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
  background: rgba(0, 0, 0, 0.8);
  opacity: 1;
}

.projects-section {
  opacity: 1;
}

.contact-section {
  background: rgba(0, 0, 0, 0.8);

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

.plack1-1 {
  max-width: 100px;
  max-height: 100px;
  margin-bottom: 20px;
}
.plack1-2 {
  max-width: 200px;
  max-height: 100px;
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

.hidden {
  display: none;
  animation: fadeIn 1s ease-in forwards;
  animation-delay: 0.5s;
}

button {
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
  padding: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.carousel-control {
  position: absolute;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
}

.carousel-control:hover {
  background-color: rgba(0, 0, 0, 0.6);
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

form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
}

form div {
  margin-bottom: 7px;
}

label {
  border-radius: 0px;
  margin-right: 5px;
  font-weight: bold;
}

input,
textarea {
  padding: 12px;
  font-size: 18px;
  border: 1px solid #ddd;
  resize: none;
  font-family: 'Bryndan';
}

form button {
  margin-right: 0px;
}

button:hover {
  background-color: #ddd;
}
</style>
