<template>
  <div 
    class="group overflow-hidden rounded-lg shadow-md bg-white dark:bg-card border border-transparent dark:border-border/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    :class="{ 'h-full flex flex-col': true }"
  >
    <div class="relative aspect-[4/3] overflow-hidden">
      <img 
        :src="project.imageUrl" 
        :alt="project.title" 
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div class="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div class="flex justify-between items-center text-white">
            <span class="text-sm font-medium bg-primary/90 px-3 py-1 rounded-full">{{ project.category }}</span>
            <RouterLink 
              :to="`/projects/${project.id}`" 
              class="inline-flex items-center gap-1 text-white hover:text-primary-foreground bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md"
            >
              View Project 
              <ChevronRightIcon class="h-4 w-4" />
            </RouterLink>
          </div>
        </div>
      </div>
      
      <!-- Floating location badge -->
      <div class="absolute top-4 right-4">
        <span class="bg-white/90 dark:bg-black/50 backdrop-blur-sm text-foreground dark:text-white text-xs px-2 py-1 rounded-md shadow-sm border border-white/20 dark:border-white/10">
          {{ project.location }}
        </span>
      </div>
    </div>
    
    <div class="p-6 flex flex-col flex-grow">
      <div class="mb-auto">
        <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{{ project.title }}</h3>
        <p class="text-foreground/70 dark:text-foreground/60 text-sm mb-4 line-clamp-2">{{ project.description }}</p>
      </div>
      
      <div class="flex justify-between items-center mt-4 pt-4 border-t border-border/30 dark:border-border/20">
        <div class="flex items-center space-x-2">
          <CalendarIcon class="h-4 w-4 text-primary/70" />
          <span class="text-sm text-foreground/60 dark:text-foreground/50">{{ project.year || '2022' }}</span>
        </div>
        <RouterLink 
          :to="`/projects/${project.id}`" 
          class="text-primary hover:text-primary/80 dark:hover:text-primary/90 text-sm font-medium flex items-center gap-1 group/btn"
        >
          Details
          <ChevronRightIcon class="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon, CalendarIcon } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

// Props definition with TypeScript interface
interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    location: string;
    description: string;
    imageUrl: string;
    year?: string;
  }
}

defineProps<ProjectCardProps>()
</script> 