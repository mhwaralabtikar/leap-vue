<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span
    data-slot="context-menu-shortcut"
    :class="cn('text-muted-foreground ms-auto text-xs tracking-widest', props.class)"
  >
    <slot />
  </span>
</template>
