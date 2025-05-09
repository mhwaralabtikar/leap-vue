<template>
  <span ref="counterRef" class="inline-block">{{ displayValue }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  startVal: {
    type: Number,
    default: 0
  },
  endVal: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 2000
  },
  decimals: {
    type: Number,
    default: 0
  },
  delay: {
    type: Number,
    default: 500
  },
  autoStart: {
    type: Boolean,
    default: true
  }
})

const displayValue = ref(props.startVal)
const counterRef = ref<HTMLElement | null>(null)
let animationFrame: number | null = null
let startTime: number | null = null
let observer: IntersectionObserver | null = null

const formatValue = (value: number): string => {
  return value.toFixed(props.decimals)
}

const startAnimation = () => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
    animationFrame = null
  }

  startTime = null
  animationFrame = requestAnimationFrame(count)
}

const count = (timestamp: number) => {
  if (!startTime) startTime = timestamp
  
  const progress = Math.min((timestamp - startTime) / props.duration, 1)
  const currentValue = props.startVal + (progress * (props.endVal - props.startVal))
  
  displayValue.value = parseFloat(formatValue(currentValue))
  
  if (progress < 1) {
    animationFrame = requestAnimationFrame(count)
  } else {
    displayValue.value = props.endVal
    animationFrame = null
  }
}

// Start the counter when component mounts and is visible in viewport
onMounted(() => {
  if (props.autoStart && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setTimeout(() => {
          startAnimation()
        }, props.delay)
        observer?.disconnect()
      }
    }, { threshold: 0.1 })
    
    if (counterRef.value) {
      observer.observe(counterRef.value)
    }
  } else if (props.autoStart) {
    setTimeout(() => {
      startAnimation()
    }, props.delay)
  }
})

// Watch for changes to the end value
watch(() => props.endVal, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    startAnimation()
  }
})

// Clean up when component is unmounted
onMounted(() => {
  return () => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
    if (observer) {
      observer.disconnect()
    }
  }
})
</script> 