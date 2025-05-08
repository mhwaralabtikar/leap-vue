<template>
  <div class="w-full bg-background rounded-md shadow-sm border border-border p-2 flex items-center">
    <div class="text-primary px-2">
      <SearchIcon class="h-5 w-5" />
    </div>
    <input 
      type="text"
      :placeholder="placeholder"
      v-model="searchQuery"
      class="flex-grow py-2 px-2 bg-transparent border-none focus:outline-none focus:ring-0 w-full"
      @input="emitSearch"
    />
    <button 
      v-if="searchQuery" 
      @click="clearSearch"
      class="p-1 rounded-full hover:bg-accent"
    >
      <XIcon class="h-4 w-4 text-foreground/60" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { SearchIcon, XIcon } from 'lucide-vue-next'

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Search...'
  },
  modelValue: {
    type: String,
    default: ''
  },
  debounce: {
    type: Number,
    default: 300
  }
})

const emit = defineEmits(['update:modelValue', 'search'])

const searchQuery = ref(props.modelValue)
let debounceTimeout: ReturnType<typeof setTimeout> | null = null

watch(() => props.modelValue, (newValue) => {
  searchQuery.value = newValue
})

function emitSearch() {
  emit('update:modelValue', searchQuery.value)
  
  // Debounce search event
  if (debounceTimeout) {
    clearTimeout(debounceTimeout)
  }
  
  debounceTimeout = setTimeout(() => {
    emit('search', searchQuery.value)
  }, props.debounce)
}

function clearSearch() {
  searchQuery.value = ''
  emit('update:modelValue', '')
  emit('search', '')
}
</script> 