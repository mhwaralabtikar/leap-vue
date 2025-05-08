<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

// Blog posts data
const posts = ref([
  {
    id: 1,
    title: t('blog.post1.title'),
    excerpt: t('blog.post1.excerpt'),
    image: 'https://picsum.photos/id/180/800/450',
    date: '2025-05-15',
    author: 'John Smith',
    category: t('blog.categories.industry')
  },
  {
    id: 2,
    title: t('blog.post2.title'),
    excerpt: t('blog.post2.excerpt'),
    image: 'https://picsum.photos/id/23/800/450',
    date: '2025-04-28',
    author: 'Sarah Johnson',
    category: t('blog.categories.innovation')
  },
  {
    id: 3,
    title: t('blog.post3.title'),
    excerpt: t('blog.post3.excerpt'),
    image: 'https://picsum.photos/id/96/800/450',
    date: '2025-04-15',
    author: 'Michael Chen',
    category: t('blog.categories.technology')
  }
])

// Format date
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(date)
}
</script>

<template>
  <section class="py-24 bg-background">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between md:items-end mb-16">
        <div class="mb-8 md:mb-0 md:max-w-xl">
          <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            {{ t('blog.latestNews') }}
          </div>
          <h2 class="text-3xl md:text-xl font-bold mb-4">{{ t('blog.title') }}</h2>
          <p class="text-foreground/70 text-lg">
            {{ t('blog.subtitle') }}
          </p>
        </div>
        
        <router-link to="/blog">
          <Button variant="outline" class="group">
            {{ t('blog.viewAll') }}
            <ChevronRightIcon class="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </router-link>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="post in posts"
          :key="post.id"
          class="bg-background border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div class="aspect-[16/9] relative overflow-hidden">
            <img 
              :src="post.image" 
              :alt="post.title" 
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div class="absolute top-4 start-4">
              <span class="bg-primary/90 text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                {{ post.category }}
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex items-center text-sm text-foreground/60 mb-3">
              <span>{{ formatDate(post.date) }}</span>
              <span class="mx-2">•</span>
              <span>{{ post.author }}</span>
            </div>
            
            <h3 class="text-xl font-semibold mb-3 line-clamp-2">{{ post.title }}</h3>
            <p class="text-foreground/70 mb-5 line-clamp-3">{{ post.excerpt }}</p>
            
            <router-link :to="`/blog/${post.id}`" class="text-primary font-medium hover:underline inline-flex items-center">
              {{ t('blog.readMore') }}
              <ChevronRightIcon class="ms-1 h-4 w-4" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 