<template>
  <div 
    class="fixed top-0 left-0 z-[60] h-1 bg-primary/20"
    style="width: 100%;"
  >
    <div 
      class="h-full bg-primary transition-[width] ease-out duration-200"
      :style="{ width: `${progress}%` }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)

function updateProgress() {
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight - windowHeight
  const scrollY = window.scrollY

  // Calculate scroll progress percentage (0-100)
  if (documentHeight > 0) {
    progress.value = Math.min(100, Math.max(0, (scrollY / documentHeight) * 100))
  } else {
    progress.value = 0
  }
}

onMounted(() => {
  // Initialize progress on mount
  updateProgress()
  
  // Add scroll event listener
  window.addEventListener('scroll', updateProgress)
  
  // Add resize event listener to recalculate on window resize
  window.addEventListener('resize', updateProgress)
})

onUnmounted(() => {
  // Clean up event listeners
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('resize', updateProgress)
})
</script> 