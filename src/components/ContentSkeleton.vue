<template>
  <div class="animate-pulse-slow">
    <!-- Header skeleton -->
    <div v-if="header" class="space-y-3 mb-8">
      <div class="h-8 bg-muted rounded-md w-3/4"></div>
      <div class="h-4 bg-muted rounded-md w-1/2"></div>
    </div>
    
    <!-- Breadcrumbs skeleton -->
    <div v-if="breadcrumbs" class="flex items-center space-x-2 rtl:space-x-reverse mb-6">
      <div class="h-3 bg-muted rounded-md w-12"></div>
      <div class="h-3 bg-muted/50 w-3 rounded-full"></div>
      <div class="h-3 bg-muted rounded-md w-20"></div>
      <div class="h-3 bg-muted/50 w-3 rounded-full"></div>
      <div class="h-3 bg-muted rounded-md w-24"></div>
    </div>
    
    <!-- Image skeleton -->
    <div v-if="image" class="aspect-video bg-muted rounded-xl mb-6"></div>
    
    <!-- Text content skeleton -->
    <div v-if="text" class="space-y-3 mb-8">
      <div v-for="i in paragraphs" :key="i" class="space-y-2">
        <div v-for="j in (i % 2 === 0 ? 5 : 4)" :key="`${i}-${j}`" 
          class="h-3 bg-muted rounded-md" 
          :class="[
            j === 1 && 'w-full',
            j === 2 && 'w-11/12',
            j === 3 && 'w-4/5',
            j === 4 && 'w-full',
            j === 5 && 'w-3/4'
          ]"
        ></div>
      </div>
    </div>
    
    <!-- Card grid skeleton -->
    <div v-if="cards" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div v-for="i in cardCount" :key="i" class="bg-muted/20 border border-border rounded-xl p-4 space-y-3">
        <div class="aspect-video bg-muted rounded-lg"></div>
        <div class="h-5 bg-muted rounded-md w-3/4"></div>
        <div class="space-y-2">
          <div class="h-3 bg-muted rounded-md w-full"></div>
          <div class="h-3 bg-muted rounded-md w-5/6"></div>
        </div>
        <div class="flex justify-between items-center pt-2">
          <div class="h-8 bg-muted rounded-md w-24"></div>
          <div class="h-8 bg-muted rounded-full w-8"></div>
        </div>
      </div>
    </div>
    
    <!-- Table skeleton -->
    <div v-if="table" class="rounded-xl border border-border overflow-hidden mb-8">
      <!-- Table header -->
      <div class="bg-muted/30 p-4 border-b border-border">
        <div class="grid grid-cols-4 gap-4">
          <div v-for="i in 4" :key="`header-${i}`" class="h-4 bg-muted rounded-md"></div>
        </div>
      </div>
      
      <!-- Table rows -->
      <div v-for="i in rowCount" :key="`row-${i}`" 
        class="p-4 border-b border-border last:border-0"
        :class="{'bg-muted/10': i % 2 === 0}"
      >
        <div class="grid grid-cols-4 gap-4">
          <div v-for="j in 4" :key="`cell-${i}-${j}`" class="h-4 bg-muted rounded-md"
            :class="[
              j === 1 && 'w-3/4',
              j === 2 && 'w-full',
              j === 3 && 'w-1/2',
              j === 4 && 'w-3/4'
            ]"
          ></div>
        </div>
      </div>
    </div>
    
    <!-- Form skeleton -->
    <div v-if="form" class="space-y-6 mb-8">
      <div v-for="i in 3" :key="`field-${i}`" class="space-y-2">
        <div class="h-4 bg-muted rounded-md w-1/4"></div>
        <div class="h-10 bg-muted/20 border border-border rounded-md"></div>
      </div>
      <div class="pt-2">
        <div class="h-10 bg-muted rounded-md w-24"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  // Content type flags
  header: { type: Boolean, default: true },
  breadcrumbs: { type: Boolean, default: false },
  image: { type: Boolean, default: false },
  text: { type: Boolean, default: true },
  cards: { type: Boolean, default: false },
  table: { type: Boolean, default: false },
  form: { type: Boolean, default: false },
  
  // Counts for repeated elements
  paragraphs: { type: Number, default: 3 },
  cardCount: { type: Number, default: 3 },
  rowCount: { type: Number, default: 5 },
})
</script>

<style scoped>
.animate-pulse-slow {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
</style> 