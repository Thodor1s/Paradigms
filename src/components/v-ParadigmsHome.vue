<template>
  <div ref="scrollSections" class="home">
    <section data-scroll-section class="full-page-section">
      <img src="/assets/paradigms.png" alt="Paradigms Logo" class="logo" />
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
  </div>
</template>

<script>
import locomotiveScroll from 'locomotive-scroll'
export default {
  name: 'ParadigmsHome',
  data() {
    return {
      scrollIns: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initLocoScroll()
    })
  },
  methods: {
    initLocoScroll() {
      this.scroll = new locomotiveScroll({
        el: this.$refs['scrollSections'],
        smooth: true,
        smoothMobile: true,
        getDirection: true
      })
    }
  }
}
</script>

<style scoped>
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

.logo {
  max-width: 300px;
  margin-bottom: 20px;
}

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
