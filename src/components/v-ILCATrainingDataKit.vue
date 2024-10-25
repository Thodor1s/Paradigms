<template>
  <div class="container">
    <div id="map"></div>
    <div class="customization-form">
      <h4>Customize Map:</h4>
      <div>
        Marker Color Range - Min speed (in Knots):
        <input type="number" v-model="minSpeed" />
      </div>
      <div>
        Marker Color Range - Max speed (in Knots):
        <input type="number" v-model="maxSpeed" />
      </div>
      <!--
      <div>
        Marker Size:
        <input type="number" v-model="markerSize" />
      </div>
      <div>
        Update Interval (ms):
        <input type="number" v-model="updateInterval" />
      </div>
      -->
      <button @click="updateMapSettings">Apply</button>
      <h4>Select Training Data Set:</h4>
    </div>
    <div class="file-list">
      <button class="file-button" v-for="file in csvFiles" :key="file" @click="loadFileData(file)">
        {{ formatFileName(file) }}
      </button>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import axios from 'axios'

export default {
  name: 'SailingMap',
  data() {
    return {
      map: null,
      layerGroup: null,
      intervalId: null,
      csvFiles: [],
      minSpeed: 0, // New data property for min speed in Knots
      maxSpeed: 4, // New data property for max speed in Knots
      markerSize: 1, // Default marker size
      updateInterval: 1 // Default update interval
    }
  },
  mounted() {
    this.initMap()
    this.loadCsvFiles()
  },
  methods: {
    initMap() {
      this.map = L.map('map').setView([37.93490324, 23.66120514], 16.5)
      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 19,
          attribution: '&copy; Esri'
        }
      ).addTo(this.map)
      this.layerGroup = L.layerGroup().addTo(this.map)
    },
    loadCsvFiles() {
      const csvFiles = import.meta.glob('@/assets/ILCAData/*.csv')
      this.csvFiles = Object.keys(csvFiles).map((file) => {
        return file.replace('/src/assets/ILCAData/', '') // Extract filename
      })
    },
    async loadFileData(fileName) {
      const filePath = new URL(`../assets/ILCAData/${fileName}`, import.meta.url).href

      try {
        const response = await fetch(filePath)
        const fileContent = await response.text()
        const data = this.parseCSV(fileContent)
        this.clearMap() // Clear previous markers before plotting new data
        this.plotData(data)
        this.fetchWeatherData(data[0].Timestamp1970) // Adjust if timestamp format changed
      } catch (error) {
        //console.error('Error loading file:', error)
      }
    },
    clearMap() {
      this.layerGroup.clearLayers() // Clear all markers from the map
    },
    parseCSV(content) {
      const lines = content.trim().split('\n')
      const headers = lines[0].split(',').map((header) => header.trim())
      const data = lines.slice(1).reduce((acc, line) => {
        if (line.trim() === '') return acc // Skip empty lines

        const values = line.split(',')
        const row = headers.reduce((rowAcc, header, i) => {
          rowAcc[header] = values[i] ? values[i].trim() : null
          return rowAcc
        }, {})

        acc.push(row)
        return acc
      }, [])

      return data
    },
    plotData(data) {
      clearInterval(this.intervalId) // Clear any previous interval
      let index = 0

      const getColorBySpeed = (speed) => {
        // Convert knots to m/s
        const speedInMps = speed * 0.51444
        const clampedSpeed = Math.max(
          this.minSpeed * 0.51444,
          Math.min(this.maxSpeed * 0.51444, speedInMps)
        )
        const red = Math.round(
          (1 -
            (clampedSpeed - this.minSpeed * 0.51444) /
              (this.maxSpeed * 0.51444 - this.minSpeed * 0.51444)) *
            255
        )
        const green = Math.round(
          ((clampedSpeed - this.minSpeed * 0.51444) /
            (this.maxSpeed * 0.51444 - this.minSpeed * 0.51444)) *
            255
        )
        return `rgb(${red}, ${green}, 0)`
      }

      const updateMap = () => {
        if (index >= data.length) {
          clearInterval(this.intervalId)
          return
        }

        const point = data[index]
        const lat = parseFloat(point.Lat)
        const long = parseFloat(point.Long)
        const speed = parseFloat(point['Speed (m/s)'])

        // Validate latitude, longitude, and speed
        if (isNaN(lat) || isNaN(long) || isNaN(speed)) {
          console.warn(`Invalid data at index ${index}:`, point)
          index++
          return // Skip this point if invalid
        }

        // Create a marker with color based on speed
        const color = getColorBySpeed(speed)
        const marker = L.circleMarker([lat, long], {
          color: color,
          radius: this.markerSize,
          fillOpacity: 0.8
        })

        marker.addTo(this.layerGroup)
        index++
      }

      this.intervalId = setInterval(updateMap, this.updateInterval) // Use the configured update interval
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
    },
    formatFileName(file) {
      return file.replace('.csv', '')
    },
    updateMapSettings() {
      // You can implement any additional logic needed to update the map settings here
      console.log('Updated Map Settings:', {
        minSpeed: this.minSpeed,
        maxSpeed: this.maxSpeed,
        markerSize: this.markerSize,
        updateInterval: this.updateInterval
      })
    }
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Make the container fill the viewport height */
}

#map {
  flex: 1; /* Allow the map to grow and take available space */
  width: 100%;
}

.customization-form {
  padding-top: 10px;
  padding-left: 10px;
  background-color: #f1f1f1;
}

.file-list {
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 0px 10px;
  background-color: #f1f1f1;
}

input {
  width: 60px;
  margin-top: 3px;
  padding: 5px 10px;
}

button {
  margin-right: 10px;
  margin-top: 3px;
  margin-bottom: 3px;

  padding: 5px 10px;
  cursor: pointer;
}
</style>
