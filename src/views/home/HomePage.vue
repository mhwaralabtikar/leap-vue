<template>
  <div>
    <!-- Hero Section -->
    <HeroSlider v-animate="'fade-in'" />
    
    <!-- Clients Section -->
    <ClientsMarquee v-animate="'slide-up'" />
    
    <!-- About Section -->
    <section class="py-24 bg-background relative overflow-hidden" v-animate="'fade-in'">
      <!-- Background decorative elements -->
      <div class="absolute -z-10 top-20 end-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-70"></div>
      <div class="absolute -z-10 bottom-20 start-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-70"></div>
      
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="max-w-xl" v-animate="'slide-in-left'">
            <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              {{ $t('about.aboutUs') }}
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 relative">
              {{ $t('about.title') }}
              <span class="absolute -bottom-2 start-0 w-20 h-1 bg-primary"></span>
            </h2>
            <p class="text-foreground/80 dark:text-foreground/90 mb-8 text-lg leading-relaxed">
              {{ $t('about.description') }}
            </p>
            
            <div class="space-y-6 mb-10">
              <div class="flex items-start gap-4 p-6 bg-white dark:bg-card/80 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/10 dark:border-border/30" v-animate="'slide-up'">
                <div class="p-3 bg-primary/10 text-primary shrink-0 mt-1 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-xl mb-2">{{ $t('about.tabs.mission') }}</h3>
                  <p class="text-foreground/70 dark:text-foreground/80 leading-relaxed">{{ $t('about.missionContent') }}</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4 p-6 bg-white dark:bg-card/80 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/10 dark:border-border/30" v-animate="'slide-up'">
                <div class="p-3 bg-primary/10 text-primary shrink-0 mt-1 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-xl mb-2">{{ $t('about.tabs.values') }}</h3>
                  <p class="text-foreground/70 dark:text-foreground/80 leading-relaxed">{{ $t('about.values.integrity') }}</p>
                </div>
              </div>
            </div>
            
            <RouterLink to="/about" class="inline-flex items-center bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-md font-medium transition-all shadow-lg hover:shadow-primary/20 group">
              {{ $t('about.learnMore') }}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                class="ms-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </RouterLink>
          </div>
          
          <div class="relative" v-animate="'slide-in-right'">
            <!-- Main image with frame -->
            <div class="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-xl">
              <img :src="aboutStore.aboutImage || 'https://picsum.photos/id/1/600/500'" alt="About LEAP PM" class="w-full h-96 object-cover" />
            </div>
            
            <!-- Floating experience card -->
            <div class="absolute -bottom-8 -start-8 bg-primary px-8 py-6 rounded-xl shadow-xl dark:shadow-lg text-white transform hover:scale-105 transition-transform">
              <p class="text-3xl font-bold mb-1 flex items-center">
                <span>15</span>
                <span class="text-4xl font-extrabold leading-none ms-1">+</span>
              </p>
              <p class="text-white/90">{{ $t('stats.yearsExperience') }}</p>
            </div>
            
            <!-- Decorative element -->
            <div class="absolute -z-10 -top-6 -end-6 w-32 h-32 border-4 border-primary/30 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Services Section -->
    <ServicesSection v-animate="'fade-in'" />
    
    <!-- Stats Section -->
    <StatsSection v-animate="'scale-in'" />
    
    <!-- Projects Section -->
    <ProjectsSection v-animate="'fade-in'" />
    
    <!-- Features Section -->
    <Features v-animate="'slide-up'" />
    
    <!-- Testimonials Section -->
    <section class="py-24 bg-background" v-animate="'fade-in'">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16" v-animate="'slide-up'">
          <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            {{ $t('testimonials.testimonials') }}
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('testimonials.title') }}</h2>
          <p class="text-lg text-foreground/70">{{ $t('testimonials.subtitle') }}</p>
        </div>
        
        <TestimonialsSection v-animate="'scale-in'" />
      </div>
    </section>
    
    <!-- CTA Section -->
    <CtaSection v-animate="'fade-in'" />
    
    <!-- Featured Jobs Section -->
    <section class="py-24 bg-background" v-animate="'fade-in'">
      <div class="container mx-auto px-4">
        <FeaturedJobs v-animate="'slide-up'" />
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="py-24 bg-accent/30" v-animate="'fade-in'">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16" v-animate="'slide-up'">
          <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            {{ $t('contact.title') }}
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('contact.title') }}</h2>
          <p class="text-lg text-foreground/70">{{ $t('contact.subtitle') }}</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Left Column: Form -->
          <div class="flex flex-col justify-center" v-animate="'slide-in-left'">
            <div class="bg-white p-8 rounded-lg shadow-lg dark:bg-card">
              <ContactForm />
            </div>
          </div>
          
          <!-- Right Column: Map -->
          <div class="relative rounded-lg overflow-hidden shadow-lg h-[500px]" v-animate="'slide-in-right'">
            <OpenStreetMap 
              :latitude="24.7136" 
              :longitude="46.6753" 
              :zoom="13" 
              markerText="Leap PM Headquarters" 
            />
            
            <!-- Contact Information Overlay -->
            <div class="absolute bottom-0 start-0 end-0 bg-white/95 backdrop-blur-sm p-6">
              <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                  <div class="p-2 bg-primary/10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary h-5 w-5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-foreground/60">{{ $t('contact.phone') || 'Phone' }}</p>
                    <p class="font-medium">+966 532 407 726</p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <div class="p-2 bg-primary/10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary h-5 w-5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-foreground/60">{{ $t('contact.email') || 'Email' }}</p>
                    <p class="font-medium">info@leap-pm.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Back to Top Button -->
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import HeroSlider from './HeroSlider.vue'
import ClientsMarquee from './ClientsMarquee.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import StatsSection from './StatsSection.vue'
import Features from './Features.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import TestimonialsSection from './TestimonialsSection.vue'
import CtaSection from '@/components/CtaSection.vue'
import ContactForm from '@/components/ContactForm.vue'
import OpenStreetMap from '@/components/OpenStreetMap.vue'
import BackToTop from '@/components/BackToTop.vue'
import FeaturedJobs from '@/components/FeaturedJobs.vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useAboutStore } from '@/stores/about'

const { t } = useI18n()
const aboutStore = useAboutStore()
</script> 