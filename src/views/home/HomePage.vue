<template>
  <div>
    <!-- Hero Section -->
    <HeroSlider />
    
    <!-- Clients Section -->
    <ClientsMarquee />
    
    <!-- About Section -->
    <section class="py-24 bg-background">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              {{ $t('about.aboutUs') }}
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ $t('about.title') }}</h2>
            <p class="text-foreground/80 mb-6">
              {{ $t('about.description') }}
            </p>
            
            <div class="space-y-4 mb-8">
              <div class="flex items-start gap-3">
                <div class="p-2 bg-primary/10 rounded-full text-primary shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">{{ $t('about.tabs.mission') }}</h3>
                  <p class="text-foreground/70">{{ $t('about.missionContent') }}</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="p-2 bg-primary/10 rounded-full text-primary shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">{{ $t('about.tabs.values') }}</h3>
                  <p class="text-foreground/70">{{ $t('about.values.integrity') }}</p>
                </div>
              </div>
            </div>
            
            <RouterLink to="/about" class="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors group">
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
          
          <div class="relative">
            <img src="https://picsum.photos/id/1/600/500" alt="About LEAP PM" class="rounded-lg shadow-xl w-full object-cover" />
            <div class="absolute -bottom-6 -start-6 bg-primary px-6 py-4 rounded-lg shadow-lg text-white">
              <p class="text-xl font-bold">15+</p>
              <p class="text-white/80">{{ $t('stats.yearsExperience') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Services Section -->
    <ServicesSection />
    
    <!-- Stats Section -->
    <StatsSection />
    
    <!-- Projects Section -->
    <ProjectsSection />
    
    <!-- Features Section -->
    <Features />
    
    <!-- Testimonials Section -->
    <section class="py-24 bg-background">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            {{ $t('testimonials.testimonials') }}
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('testimonials.title') }}</h2>
          <p class="text-lg text-foreground/70">{{ $t('testimonials.subtitle') }}</p>
        </div>
        
        <TestimonialsSection />
      </div>
    </section>
    
    <!-- CTA Section -->
    <CtaSection />
    
    <!-- Featured Jobs Section -->
    <section class="py-24 bg-background">
      <div class="container mx-auto px-4">
        <FeaturedJobs />
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="py-24 bg-accent/30">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
            {{ $t('contact.title') }}
          </div>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('contact.title') }}</h2>
          <p class="text-lg text-foreground/70">{{ $t('contact.subtitle') }}</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Left Column: Form -->
          <div class="flex flex-col justify-center">
            <div class="bg-white p-8 rounded-lg shadow-lg dark:bg-card">
              <ContactForm />
            </div>
          </div>
          
          <!-- Right Column: Map -->
          <div class="relative rounded-lg overflow-hidden shadow-lg h-[500px]">
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

const { t } = useI18n()
</script> 