<script setup>
import { DrawerRoot } from 'vaul-vue'

const props = defineProps({
  open: Boolean,
  shouldScaleBackground: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:open'])
</script>

<template>
  <DrawerRoot
    data-slot="drawer"
    :open="open"
    :shouldScaleBackground="shouldScaleBackground"
    @update:open="(val) => emit('update:open', val)"
  >
    <slot />
  </DrawerRoot>
</template>
