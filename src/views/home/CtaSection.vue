<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<template>
  <section class="py-24 bg-slate-50 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute -top-20 -start-20 w-80 h-80 bg-primary rounded-full"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-5xl mx-auto bg-primary rounded-xl overflow-hidden shadow-xl">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Left side: Image -->
          <div class="relative h-72 md:h-auto">
            <img 
              src="https://picsum.photos/id/305/800/600" 
              alt="Get Started" 
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50"></div>
          </div>
          
          <!-- Right side: Content -->
          <div class="p-10 md:p-12 text-white">
            <h2 class="text-3xl md:text-xl font-bold mb-4">If you like what you see, let's work together.</h2>
            <p class="mb-8 text-white/80 text-lg">
              I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me from this contact form and I will get back to you shortly.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <RouterLink to="/contact" class="inline-flex justify-center items-center px-6 py-4 rounded-md bg-white text-primary font-medium transition-colors hover:bg-white/90">
                Contact Us
              </RouterLink>
              <RouterLink to="/services" class="inline-flex justify-center items-center px-6 py-4 rounded-md bg-white/10 text-white font-medium border border-white/20 transition-colors hover:bg-white/20">
                Our Services
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
