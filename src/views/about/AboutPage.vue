<template>
  <div>
    <!-- Page Header -->
    <PageHeader
      :title="$t('about.title')"
      :subtitle="$t('about.description')"
      :badge="$t('about.aboutUs')"
      :breadcrumbs="breadcrumbs"
      backgroundImage="https://picsum.photos/id/1076/1920/1080"
    >
      <template #actions>
        <div class="flex flex-wrap gap-4 justify-center">
          <RouterLink to="/contact" class="inline-flex items-center bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-6 py-2 rounded-lg transition-colors dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/20">
            {{ $t('cta.contactUs') }}
            <ChevronRightIcon class="h-4 w-4 ms-2 rtl:rotate-180" />
          </RouterLink>
        </div>
      </template>
    </PageHeader>
    
    <!-- Main Content -->
    <div class="py-16 md:py-24 bg-background">
      <div class="container mx-auto px-4">
        <!-- Company History/Story Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div class="space-y-6 animate-in slide-in-from-left duration-700">
            <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
              {{ $t('about.ourStory') }}
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ $t('about.ourStoryTitle') }}</h2>
            <p class="text-lg text-foreground/80 leading-relaxed">
              {{ companyHistory.story.content1 }}
            </p>
            <p class="text-lg text-foreground/80 leading-relaxed">
              {{ companyHistory.story.content2 }}
            </p>
            <div class="flex items-center gap-4 mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <ClockIcon class="w-6 h-6 text-primary" />
              </div>
              <div>
                <p class="text-sm text-foreground/60">{{ $t('about.established') }}</p>
                <p class="text-xl font-bold">{{ companyHistory.foundedYear }}</p>
              </div>
            </div>
          </div>
          
          <div class="relative animate-in slide-in-from-right duration-700">
            <div class="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/id/1071/800/600" alt="Company history" class="object-cover w-full h-full" />
            </div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
            <div class="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
          </div>
        </div>
        
        <!-- Tabs Section -->
        <div class="max-w-5xl mx-auto mb-24">
          <div class="mb-10 text-center animate-in fade-in duration-700">
            <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
              {{ $t('about.discovery') }}
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('about.whatWeDo') }}</h2>
            <p class="text-lg text-foreground/70 max-w-2xl mx-auto">
              {{ $t('about.whatWeDoSubtitle') }}
            </p>
          </div>
          
          <!-- Improved Tabs UI -->
          <div class="bg-card border border-border rounded-xl p-1 mb-8">
            <div class="flex flex-wrap">
              <button
                v-for="(tab, index) in tabs"
                :key="index"
                @click="activeTab = index"
                class="flex-1 px-4 py-3 text-sm sm:text-base font-medium transition-all rounded-lg"
                :class="activeTab === index ? 'bg-primary text-white shadow-md' : 'text-foreground/70 hover:bg-primary/5'"
              >
                <span class="flex items-center justify-center gap-2">
                  <component :is="tabIcons[index]" class="w-4 h-4" />
                  {{ $t(`about.tabs.${tab}`) }}
                </span>
              </button>
            </div>
          </div>
          
          <div class="py-8 animate-in fade-in-0 duration-500">
            <div v-if="activeTab === 0" class="animate-in fade-in-0 duration-500">
              <p class="text-lg mb-6 leading-relaxed text-foreground/80">{{ $t('about.companyContent') }}</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 class="text-xl font-semibold mb-3 flex items-center text-primary">
                    <TrophyIcon class="w-5 h-5 text-primary mr-2" />
                    {{ valueProps.expertise }}
                  </h3>
                  <p class="text-foreground/80">{{ valueProps.expertiseContent }}</p>
                </div>
                <div class="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 class="text-xl font-semibold mb-3 flex items-center text-primary">
                    <MapIcon class="w-5 h-5 text-primary mr-2" />
                    {{ valueProps.global }}
                  </h3>
                  <p class="text-foreground/80">{{ valueProps.globalContent }}</p>
                </div>
              </div>
            </div>
            
            <div v-if="activeTab === 1" class="animate-in fade-in-0 duration-500">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-primary/5 border border-primary/10 rounded-2xl p-8 hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <TargetIcon class="w-6 h-6 text-primary" />
                  </div>
                  <h3 class="text-xl font-semibold mb-4">{{ missionVision.missionTitle }}</h3>
                  <p class="text-lg text-foreground/80 leading-relaxed">{{ missionVision.missionContent }}</p>
                </div>
                <div class="bg-card border border-border rounded-2xl p-8 hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <EyeIcon class="w-6 h-6 text-primary" />
                  </div>
                  <h3 class="text-xl font-semibold mb-4">{{ missionVision.visionTitle }}</h3>
                  <p class="text-lg text-foreground/80 leading-relaxed">{{ missionVision.visionContent }}</p>
                </div>
              </div>
            </div>
            
            <div v-if="activeTab === 2" class="animate-in fade-in-0 duration-500">
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="(value, index) in values" :key="index" class="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow hover:-translate-y-1 hover:border-primary/20 duration-300">
                  <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <component :is="valueIconMap[value.icon]" class="w-8 h-8 text-primary" />
                  </div>
                  <h3 class="text-lg font-semibold mb-2 text-primary">{{ value.value }}</h3>
                  <p class="text-foreground/70">{{ value.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Team Section -->
        <div class="mb-24">
          <div class="mb-10 text-center animate-in fade-in duration-700">
            <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
              {{ $t('about.meetTheTeam') }}
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('about.ourTeam') }}</h2>
            <p class="text-lg text-foreground/70 max-w-2xl mx-auto">
              {{ $t('about.ourTeamSubtitle') }}
            </p>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(member, index) in teamMembers" :key="index" class="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div class="relative overflow-hidden animate-in fade-in duration-700" :style="{ 'animation-delay': `${300 + index * 150}ms` }">
                <img :src="member.image" :alt="member.name" class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div class="flex gap-3">
                    <a :href="member.linkedin" class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary transition-colors">
                      <LinkedinIcon class="w-4 h-4 text-white" />
                    </a>
                    <!-- <a :href="member.twitter" class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary transition-colors">
                      <TwitterIcon class="w-4 h-4 text-white" />
                    </a> -->
                    <a :href="`mailto:${member.email}`" class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary transition-colors">
                      <MailIcon class="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="p-4 text-center">
                <h3 class="text-lg font-semibold">{{ member.name }}</h3>
                <p class="text-muted-foreground">{{ member.role }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Stats Section -->
        <div class="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div class="mb-10 text-center">
            <div class="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
              {{ $t('about.achievements') }}
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('stats.title') }}</h2>
            <p class="text-lg text-foreground/70 max-w-2xl mx-auto">
              {{ $t('stats.subtitle') }}
            </p>
          </div>
          
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(stat, index) in stats" :key="index" class="text-center p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-in fade-in duration-700" :style="{ 'animation-delay': `${300 + index * 150}ms` }">
              <div class="text-4xl md:text-5xl font-bold text-primary mb-2">{{ stat.value }}+</div>
              <p class="text-foreground/70 font-medium">{{ stat.label }}</p>
            </div>
          </div>
        </div>
        
        <!-- Partners Section -->
        <div class="my-24">
          <div class="mb-10 text-center">
            <div class="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
              {{ $t('about.partnerships') }}
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('about.ourPartners') }}</h2>
            <p class="text-lg text-foreground/70 max-w-2xl mx-auto">
              {{ $t('about.ourPartnersSubtitle') }}
            </p>
          </div>
          
          <div class="flex flex-wrap justify-center gap-8 items-center">
            <div v-for="partner in partners" :key="partner.id" class="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <img :src="partner.logo" :alt="partner.name" class="h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- CTA Section -->
    <div class="py-16 md:py-24 bg-card border-t border-border">
      <div class="container mx-auto px-4 max-w-4xl text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('cta.title') }}</h2>
        <p class="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
          {{ $t('cta.description') }}
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <RouterLink to="/contact" class="bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-lg transition-colors inline-flex items-center">
            {{ $t('cta.contactUs') }}
            <ArrowRightIcon class="ml-2 h-4 w-4 rtl:rotate-180" />
          </RouterLink>
          <RouterLink to="/services" class="bg-card hover:bg-muted border border-border text-foreground py-3 px-6 rounded-lg transition-colors">
            {{ $t('cta.learnMore') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { 
  ClockIcon,
  TargetIcon,
  EyeIcon,
  ShieldIcon,
  AwardIcon,
  UsersIcon,
  LightbulbIcon,
  MapIcon,
  LinkedinIcon,
  // TwitterIcon,
  MailIcon,
  ChevronRightIcon,
  ArrowRightIcon
} from 'lucide-vue-next'
import { useAboutStore } from '@/stores/about'
import PageHeader from '@/components/PageHeader.vue'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
const aboutStore = useAboutStore()

// Breadcrumbs
const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' }
]

// Get data from store
const { companyHistory, valueProps, missionVision, values, teamMembers, stats, partners } = aboutStore

// Tabs
const activeTab = ref(0)
const tabs = ['company', 'mission', 'values']
const tabIcons = [MapIcon, TargetIcon, ShieldIcon]

// Fix the valueIconMap usage with proper type annotation
const valueIconMap: Record<string, any> = {
  ShieldIcon,
  AwardIcon,
  UsersIcon,
  LightbulbIcon
};
</script> 