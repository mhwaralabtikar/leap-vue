<template>
  <component 
    :is="tag" 
    :class="[
      className,
      { 'rtl-flip': shouldFlip }
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  className: {
    type: String,
    default: ''
  },
  flip: {
    type: Boolean,
    default: false
  }
})

const themeStore = useThemeStore()
const shouldFlip = computed(() => props.flip && themeStore.locale === 'ar')
</script>

<style scoped>
.rtl-flip {
  transform: scaleX(-1);
}
</style> 