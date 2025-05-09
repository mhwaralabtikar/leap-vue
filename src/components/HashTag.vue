<template>
  <RouterLink 
    :to="{path: '/search', query: {q: tag}, hash: `#${tag}`}" 
    class="inline-block bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground rounded-full hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
    :class="[
      size === 'sm' ? 'text-xs px-2 py-0.5' : size === 'lg' ? 'text-base px-4 py-1.5' : 'text-sm px-3 py-1'
    ]"
  >
    #{{ tag }}
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps({
  tag: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
  }
})
</script> 