<template>
  <div class="group h-full rounded-lg shadow-md bg-white dark:bg-card border border-transparent dark:border-border/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden flex flex-col">
    <!-- Image Section with gradient overlay and animation -->
    <div class="relative aspect-[16/9] overflow-hidden">
      <img 
        :src="post.imageUrl" 
        :alt="post.title" 
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <!-- Gradient overlay animation on hover -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
      
      <!-- Category badge -->
      <div class="absolute top-4 left-4">
        <span class="bg-primary/90 text-white text-xs px-3 py-1 rounded-full">
          {{ post.category }}
        </span>
      </div>
      
      <!-- Read time -->
      <div class="absolute bottom-4 right-4">
        <div class="bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center">
          <ClockIcon class="h-3 w-3 mr-1" />
          {{ post.readTime || 5 }} min read
        </div>
      </div>
    </div>
    
    <!-- Content Section -->
    <div class="p-6 flex flex-col flex-grow">
      <!-- Post metadata -->
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center text-sm text-foreground/60 dark:text-foreground/50">
          <CalendarIcon class="h-4 w-4 mr-1" />
          <span>{{ post.date }}</span>
        </div>
        
        <div v-if="post.author" class="flex items-center gap-2">
          <img 
            v-if="post.author.avatar"
            :src="post.author.avatar" 
            :alt="post.author.name" 
            class="w-6 h-6 rounded-full object-cover border border-border/20"
          />
          <span class="text-sm text-foreground/60 dark:text-foreground/50 line-clamp-1">{{ post.author.name }}</span>
        </div>
      </div>
      
      <!-- Post title -->
      <h3 class="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
        {{ post.title }}
      </h3>
      
      <!-- Post excerpt -->
      <p class="text-foreground/70 dark:text-foreground/60 text-sm mb-4 line-clamp-3 flex-grow">
        {{ post.excerpt }}
      </p>
      
      <!-- Post tags -->
      <div v-if="post.tags && post.tags.length" class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="(tag, i) in post.tags.slice(0, 2)" 
          :key="`tag-${i}`" 
          class="text-xs text-foreground/60 dark:text-foreground/50 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded"
        >
          #{{ tag }}
        </span>
        <span v-if="post.tags.length > 2" class="text-xs text-foreground/60 dark:text-foreground/50">
          +{{ post.tags.length - 2 }} more
        </span>
      </div>
      
      <!-- Read more link -->
      <RouterLink 
        :to="`/blog/${post.id}`" 
        class="mt-auto inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group/btn"
      >
        Read More
        <ArrowRightIcon class="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarIcon, ClockIcon, ArrowRightIcon } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

// Props definition with TypeScript interface
interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    imageUrl: string;
    readTime?: number;
    author?: {
      name: string;
      avatar?: string;
    };
    tags?: string[];
  }
}

defineProps<BlogCardProps>()
</script> 