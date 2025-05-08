<template>
  <div ref="mapContainer" class="w-full h-full rounded-lg overflow-hidden"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Add Leaflet type definition
declare global {
  interface Window {
    L: any;
  }
}

const props = defineProps({
  latitude: {
    type: Number,
    default: 40.7128 // New York
  },
  longitude: {
    type: Number,
    default: -74.0060 // New York
  },
  zoom: {
    type: Number,
    default: 13
  },
  markerText: {
    type: String,
    default: 'Leap PM Headquarters'
  }
})

const mapContainer = ref<HTMLElement | null>(null)
let map: any = null
let mapScript: HTMLScriptElement | null = null
let leafletCss: HTMLLinkElement | null = null

onMounted(() => {
  // Load Leaflet CSS
  leafletCss = document.createElement('link')
  leafletCss.rel = 'stylesheet'
  leafletCss.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
  leafletCss.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
  leafletCss.crossOrigin = ''
  document.head.appendChild(leafletCss)
  
  // Load Leaflet script
  mapScript = document.createElement('script')
  mapScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
  mapScript.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='
  mapScript.crossOrigin = ''
  mapScript.onload = initMap
  document.head.appendChild(mapScript)
})

onUnmounted(() => {
  if (map) {
    map.remove()
  }
  
  // Clean up script and CSS
  if (mapScript && mapScript.parentNode) {
    mapScript.parentNode.removeChild(mapScript)
  }
  
  if (leafletCss && leafletCss.parentNode) {
    leafletCss.parentNode.removeChild(leafletCss)
  }
})

function initMap() {
  if (!mapContainer.value) return
  
  // Check if L (Leaflet) is available
  if (typeof window.L === 'undefined') {
    console.error('Leaflet library not loaded')
    return
  }
  
  // Create map
  map = window.L.map(mapContainer.value).setView([props.latitude, props.longitude], props.zoom)
  
  // Add OpenStreetMap tiles
  window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map)
  
  // Add marker
  window.L.marker([props.latitude, props.longitude])
    .addTo(map)
    .bindPopup(props.markerText)
    .openPopup()
}
</script> 