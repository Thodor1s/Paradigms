<template>
  <div id="map" style="height: 500px; width: 100%"></div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Papa from 'papaparse'
import axios from 'axios'

export default {
  name: 'SailingMap',
  data() {
    return {
      map: null,
      layerGroup: null,
      intervalId: null
    }
  },
  props: {
    csvData: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.initMap()
    this.loadCSVData()
  },
  methods: {
    initMap() {
      this.map = L.map('map').setView([37.93690324, 23.66150514], 13)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map)
      this.layerGroup = L.layerGroup().addTo(this.map)
    },
    loadCSVData() {
      Papa.parse(this.csvData, {
        header: true,
        complete: (results) => {
          const data = results.data
          this.plotData(data)
          this.fetchWeatherData(data[0].Timestamp)
        }
      })
    },
    plotData(data) {
      let index = 0
      const updateMap = () => {
        if (index >= data.length) {
          clearInterval(this.intervalId)
          return
        }
        const point = data[index]
        const lat = parseFloat(point.Lat)
        const long = parseFloat(point.Long)
        this.layerGroup.clearLayers()
        L.marker([lat, long]).addTo(this.layerGroup)
        index++
      }
      this.intervalId = setInterval(updateMap, 1000)
    },
    fetchWeatherData(timestamp) {
      const date = new Date(timestamp * 1000).toISOString().split('T')[0]
      const apiKey = 'YOUR_API_KEY'
      const lat = 37.93690324
      const long = 23.66150514
      const url = `https://api.weather.com/v1/geocode/${lat}/${long}/observations/historical.json?apiKey=${apiKey}&startDate=${date}&endDate=${date}`

      axios
        .get(url)
        .then((response) => {
          console.log('Weather Data:', response.data)
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error)
        })
    }
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  }
}
</script>

<style>
#map {
  height: 500px;
  width: 100%;
}
</style>
