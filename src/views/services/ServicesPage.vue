<template>
  <div>
    <!-- Page header -->
    <PageHeader
      :title="$t('services.title')"
      :subtitle="$t('services.subtitle')"
      :badge="$t('services.whatWeDo')"
      :breadcrumbs="breadcrumbs"
      backgroundImage="/covers/Services.jpg"
    >
      <template #actions>
        <div class="flex flex-wrap gap-4 justify-center">
          <RouterLink to="/contact" class="inline-flex items-center bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-6 py-2 rounded-lg transition-colors dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/20">
            {{ $t('services.contactUs') }}
            <ChevronRightIcon class="h-4 w-4 ms-2 rtl:rotate-180" />
          </RouterLink>
        </div>
      </template>
    </PageHeader>

    <!-- Services Intro -->
    <section class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              {{ $t('services.whatWeDo') }}
            </div>
            <h2 class="text-3xl md:text-xl font-bold mb-6">{{ $t('services.tailoredSolutions') }}</h2>
            <p class="text-foreground/70 mb-6">
              {{ $t('services.introDescription1') }}
            </p>
            <p class="text-foreground/70 mb-6">
              {{ $t('services.introDescription2') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <RouterLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                {{ $t('services.getStarted') }}
              </RouterLink>
              <RouterLink to="/about" class="inline-flex items-center justify-center px-6 py-3 border border-border rounded-md hover:bg-accent transition-colors">
                {{ $t('services.learnMoreAboutUs') }}
              </RouterLink>
            </div>
          </div>
          <div class="relative">
            <img src="https://picsum.photos/id/218/600/400" alt="Services" class="rounded-lg shadow-lg" />
            <div class="absolute -bottom-6 -start-6 bg-primary/10 w-24 h-24 rounded-lg z-[-1]"></div>
            <div class="absolute -top-6 -end-6 bg-primary/10 w-24 h-24 rounded-lg z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services grid -->
    <ServicesSection />

    <!-- Client testimonials -->
    <TestimonialsSection />

    <!-- Projects showcase -->
    <ProjectsSection />

    <!-- Call to action -->
    <CtaSection />

    <!-- Back to Top -->
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import ServicesSection from '@/components/ServicesSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import CtaSection from '@/components/CtaSection.vue'
import { ChevronRightIcon } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import BackToTop from '@/components/BackToTop.vue'
import PageHeader from '@/components/PageHeader.vue'
import { useServicesStore } from '@/stores/services'
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'
// Initialize services store and i18n
const servicesStore = useServicesStore()
const { t } = useI18n()

// Ensure all services are loaded
onMounted(() => {
  if (servicesStore.services.length === 0) {
    servicesStore.fetchServices()
  }
})

// Breadcrumbs
const breadcrumbs = [
  { name: t('common.home'), path: '/' },
  { name: t('services.title'), path: '/services' }
]
</script> 