<template>
  <div>
    <!-- Page Header -->
    <PageHeader
      :title="$t('blog.title')"
      :subtitle="$t('blog.subtitle')"
      :badge="$t('blog.insights')"
      :breadcrumbs="breadcrumbs"
      backgroundImage="/covers/Blog.jpg"
    >
      <template #actions>
        <div class="flex flex-wrap gap-4 justify-center">
          <button class="inline-flex items-center bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-6 py-2 rounded-lg transition-colors dark:bg-primary/20 dark:hover:bg-primary/30 dark:text-primary-light dark:border-primary/30">
            {{ $t('blog.subscribeNewsletter') }}
          </button>
        </div>
      </template>
    </PageHeader>

    <!-- Blog Posts -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <!-- Featured Post -->
        <div class="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card dark:bg-card rounded-xl shadow-md dark:shadow-lg dark:shadow-black/20 overflow-hidden">
          <div class="aspect-[16/9] overflow-hidden">
            <img 
              :src="featuredPost.imageUrl" 
              :alt="featuredPost.title" 
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="p-8">
            <div class="inline-flex items-center gap-2 mb-4">
              <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium dark:bg-primary/20 dark:text-primary-light">Featured</span>
              <span class="text-foreground/60 text-sm">{{ featuredPost.date }}</span>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold mb-4 text-foreground">{{ featuredPost.title }}</h2>
            <p class="text-foreground/70 mb-6 line-clamp-3">
              {{ featuredPost.excerpt }}
            </p>
            <RouterLink :to="`/blog/${featuredPost.id}`" class="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group dark:text-primary-light dark:hover:text-primary-light/80">
              Read Article
              <ChevronRightIcon class="ms-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </RouterLink>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Blog Posts using the BlogCard component -->
          <BlogCard 
            v-for="post in blogPosts" 
            :key="`post-${post.id}`" 
            :post="post"
          />
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-12">
          <div class="flex gap-2">
            <button class="w-10 h-10 flex items-center justify-center rounded-md bg-primary text-white">1</button>
            <button class="w-10 h-10 flex items-center justify-center rounded-md border border-border hover:bg-accent dark:hover:bg-accent/80">2</button>
            <button class="w-10 h-10 flex items-center justify-center rounded-md border border-border hover:bg-accent dark:hover:bg-accent/80">3</button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Newsletter Section -->
    <section class="py-16 bg-slate-50 dark:bg-card">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4 text-foreground">Subscribe to Our Newsletter</h2>
          <p class="text-foreground/70 mb-8">
            Stay updated with the latest insights and news from the LEAP PM team.
          </p>
          <div class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              class="flex-1 px-4 py-3 border border-border bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 dark:bg-accent/50"
            />
            <button class="px-6 py-3 bg-primary text-primary-foreground rounded-md transition-colors hover:bg-primary-dark font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
import { useBlogStore } from '@/stores/blog'
import BlogCard from '@/components/BlogCard.vue'

// Initialize the blog store
const blogStore = useBlogStore()

// Breadcrumbs
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' }
]

// Get data from the store
const featuredPost = blogStore.featuredPost
const blogPosts = blogStore.blogPosts
const categories = blogStore.categories
</script> 