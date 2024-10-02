<template>
  <div ref="scrollSections" class="home">
    <!-- Navigation buttons -->
    <div class="nav-buttons">
      <button @click="scrollToSection(0)">Home</button>
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
      <h1>We are Paradigms</h1>
      <p>We help non-profits and ethical businesses with their digital transformation!</p>
    </section>

    <!-- Section 3: Projects -->
    <section class="full-page-section projects-section">
      <h1>Our Projects</h1>
      <nav class="menu-links">
        <ul>
          <li>
            <a href="#" class="under-construction">BN Accounting</a>
            <span class="tooltip">Under Construction</span>
          </li>
          <li><a href="https://dimension-factory.gr" target="_blank">Dimension Factory</a></li>
          <div>
            <li><router-link to="/krokodeilos">Krokodeilos</router-link></li>
            <li><router-link to="/sourikata">Sourikata</router-link></li>
          </div>
          <li>
            <a href="#" class="under-construction">Evimnos</a>
            <span class="tooltip">Under Construction</span>
          </li>
        </ul>
      </nav>
    </section>

    <!-- Section 4: Contact -->
    <section class="full-page-section contact-section">
      <h1>Contact Us</h1>
      <p>Feel free to reach out at +30 693 40 94 282 or hello@paradigms.gr</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ParadigmsHome',
  methods: {
    scrollToSection(index) {
      const sections = this.$refs.scrollSections.querySelectorAll('section')
      const target = sections[index]
      target.scrollIntoView({ behavior: 'smooth' })
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
  font-family: 'Bryndan', sans-serif;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  z-index: 10;
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

.nav-buttons button:hover {
  background-color: #ccc;
}

/* Menu links styling (from the projects section) */
.menu-links ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.menu-links li {
  margin: 10px 0;
  position: relative;
}

.menu-links a {
  color: darkgray;
  font-size: 1.2rem;
  text-decoration: none;
  position: relative;
}

.menu-links a:hover {
  text-decoration: underline;
  color: white;
}

.menu-links .tooltip {
  top: 35px;
  visibility: hidden;
  background-color: grey;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 4px;
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  font-size: 1rem;
  width: 150px;
}

.menu-links a.under-construction:hover + .tooltip {
  visibility: visible;
}

@media (min-width: 768px) {
  .menu-links ul {
    flex-direction: row;
    justify-content: center;
  }

  .menu-links li {
    margin: 0 20px;
  }
}

@font-face {
  font-family: 'Bryndan';
  src: url('@/assets/bryndan-write.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
</style>
