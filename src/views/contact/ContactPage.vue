<template>
  <div class="py-16 sm:py-24 bg-background relative">
    <!-- Decorative background elements -->
    <div class="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/5 to-transparent"></div>
    <div class="absolute -top-24 start-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl opacity-50"></div>
    
    <!-- Page Header -->
    <div class="container mx-auto px-4 relative">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-in slide-in-from-bottom duration-700">
          {{ $t('contact.title') }}
        </h1>
        
        <p class="text-lg md:text-xl text-foreground/70 animate-in slide-in-from-bottom duration-700 delay-150">
          {{ $t('contact.subtitle') }}
        </p>
      </div>
      
      <!-- CTA Banner (New) -->
      <div class="max-w-5xl mx-auto mb-16 overflow-hidden rounded-xl animate-in fade-in-0 slide-in-from-bottom duration-700 delay-200">
        <div class="relative bg-gradient-to-r from-primary/80 to-primary p-8 md:p-10 overflow-hidden">
          <!-- Decorative elements -->
          <div class="absolute -top-12 -start-12 rtl:-start-auto rtl:-end-12 w-40 h-40 rounded-full bg-white/10 blur-xl"></div>
          <div class="absolute -bottom-12 -end-12 rtl:-end-auto rtl:-start-12 w-40 h-40 rounded-full bg-white/10 blur-xl"></div>
          
          <div class="relative z-10 md:flex justify-between items-center gap-8">
            <div class="mb-6 md:mb-0">
              <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">{{ $t('contact.ctaTitle') }}</h2>
              <p class="text-white/80">{{ $t('contact.ctaSubtitle') }}</p>
            </div>
            
            <div class="flex flex-wrap gap-4">
              <Button 
                as="a" 
                href="tel:+966551234567" 
                variant="default" 
                class="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors shadow-lg"
              >
                <PhoneIcon class="h-5 w-5" />
                <span>{{ $t('contact.callNow') }}</span>
              </Button>
              
              <Button 
                as="a" 
                href="#contact-form" 
                variant="outline" 
                class="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                <ArrowDownIcon class="h-5 w-5" />
                <span>{{ $t('contact.scrollToForm') }}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <!-- Contact Form Section -->
        <div id="contact-form" class="lg:col-span-7 xl:col-span-8 relative animate-in fade-in slide-in-from-bottom duration-700 delay-300" style="--animate-y: 20px;">
          <div class="bg-card rounded-xl p-6 md:p-8 shadow-lg dark:shadow-primary/5 relative overflow-hidden border border-border">
            <!-- Decorative dots pattern -->
            <div class="absolute opacity-5 -top-24 -end-24 rtl:-end-auto rtl:-start-24 w-[300px] h-[300px] rotate-45">
              <div class="grid grid-cols-10 gap-2">
                <div v-for="n in 100" :key="n" class="w-2 h-2 rounded-full bg-primary"></div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
        
        <!-- Contact Info & Map Section -->
        <div class="lg:col-span-5 xl:col-span-4 space-y-8 animate-in fade-in slide-in-from-bottom duration-700 delay-450" style="--animate-y: 20px;">
          <!-- Contact Information Card -->
          <div class="bg-card rounded-xl p-6 md:p-8 shadow-lg dark:shadow-primary/5 border border-border relative overflow-hidden">
            <!-- Decorative accent -->
            <div class="absolute -top-8 -start-8 rtl:-start-auto rtl:-end-8 w-16 h-16 rounded-full bg-primary/10"></div>
            <div class="absolute -bottom-8 -end-8 rtl:-end-auto rtl:-start-8 w-20 h-20 rounded-full bg-primary/10"></div>
            
            <h2 class="text-2xl font-semibold mb-8 relative">
              {{ $t('contact.contactInfo') }}
            </h2>
            
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="bg-primary/10 p-3 rounded-full shrink-0">
                  <MapPinIcon class="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium mb-2">{{ $t('contact.visitUs') }}</h3>
                  <address class="not-italic text-foreground/70">
                    123 Business Street<br />
                    Suite 100<br />
                    Riyadh<br />
                    Saudi Arabia
                  </address>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="bg-primary/10 p-3 rounded-full shrink-0">
                  <PhoneIcon class="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium mb-2">{{ $t('contact.callUs') }}</h3>
                  <p class="text-foreground/70">+966 55 123 4567</p>
                  <p class="text-foreground/70 mt-1">{{ $t('contact.businessHours') }}</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="bg-primary/10 p-3 rounded-full shrink-0">
                  <MailIcon class="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 class="font-medium mb-2">{{ $t('contact.emailUs') }}</h3>
                  <p class="text-foreground/70">info@leap-pm.com</p>
                  <p class="text-foreground/70">support@leap-pm.com</p>
                </div>
              </div>
            </div>
            
            <!-- Social Media Links -->
            <div class="mt-10 border-t border-border pt-6">
              <h3 class="font-medium mb-4 text-foreground/80">{{ $t('contact.followUs') }}</h3>
              <div class="flex gap-4">
                <a href="https://facebook.com/leappm" target="_blank" rel="noopener noreferrer" 
                  aria-label="Facebook" 
                  class="p-2 bg-[#1877F2]/10 text-[#1877F2] dark:bg-[#1877F2]/20 dark:text-[#4293FB] rounded-full hover:bg-[#1877F2]/20 transition-all flex items-center justify-center">
                  <FacebookIcon class="h-5 w-5" />
                </a>
                <!-- <a href="https://twitter.com/leappm" target="_blank" rel="noopener noreferrer" 
                  aria-label="X" 
                  class="p-2 bg-black/10 text-black dark:bg-white/20 dark:text-white rounded-full hover:bg-black/20 dark:hover:bg-white/30 transition-all flex items-center justify-center">
                  <XIcon class="h-5 w-5" />
                </a> -->
                <a href="https://linkedin.com/company/leappm" target="_blank" rel="noopener noreferrer" 
                  aria-label="LinkedIn" 
                  class="p-2 bg-[#0A66C2]/10 text-[#0A66C2] dark:bg-[#0A66C2]/20 dark:text-[#0A86E2] rounded-full hover:bg-[#0A66C2]/20 transition-all flex items-center justify-center">
                  <LinkedinIcon class="h-5 w-5" />
                </a>
                <a href="https://instagram.com/leappm" target="_blank" rel="noopener noreferrer" 
                  aria-label="Instagram" 
                  class="p-2 bg-[#E4405F]/10 text-[#E4405F] dark:bg-[#E4405F]/20 dark:text-[#F4708F] rounded-full hover:bg-[#E4405F]/20 transition-all flex items-center justify-center">
                  <InstagramIcon class="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <!-- Map Card -->
          <div class="bg-card rounded-xl shadow-lg dark:shadow-primary/5 overflow-hidden border border-border animate-in fade-in slide-in-from-bottom duration-700 delay-600" style="--animate-y: 20px;">
            <div class="h-[300px]">
              <OpenStreetMap 
                :latitude="24.7136" 
                :longitude="46.6753" 
                :zoom="13" 
                markerText="LEAP PM Headquarters - Riyadh, Saudi Arabia" 
              />
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section (New) -->
      <div class="mt-24 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-700" style="--animate-y: 20px;">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">{{ $t('contact.faqTitle') }}</h2>
          <p class="text-foreground/70">{{ $t('contact.faqSubtitle') }}</p>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index"
            class="border border-border rounded-lg overflow-hidden transition-all duration-200 bg-card"
            :class="{'shadow-md': openFaq === index}"
          >
            <Button 
              @click="toggleFaq(index)"
              class="w-full flex justify-between items-center p-4 md:p-6 text-start font-medium"
              variant="ghost"
            >
              <span>{{ $t(`contact.faqs.${faq.key}.question`) }}</span>
              <ChevronDownIcon class="h-5 w-5 text-muted-foreground transition-transform duration-200"
                :class="{'rotate-180': openFaq === index}" />
            </Button>
            <div 
              class="overflow-hidden transition-all duration-200"
              :class="openFaq === index ? 'max-h-96 px-4 md:px-6 pb-4 md:pb-6' : 'max-h-0'"
            >
              <div class="prose dark:prose-invert prose-p:text-foreground/70">
                <p v-html="$t(`contact.faqs.${faq.key}.answer`)"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Admin Link -->
      <div class="mt-16 text-center animate-in fade-in slide-in-from-bottom duration-700 delay-800">
        <RouterLink 
          to="/contact/admin" 
          class="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
        >
          <LockIcon class="h-3 w-3" />
          {{ $t('contact.adminLink') }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme'
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { 
  MapPinIcon, 
  PhoneIcon, 
  MailIcon, 
  SendIcon,
  FacebookIcon, 
  XIcon, 
  LinkedinIcon, 
  InstagramIcon,
  ArrowDownIcon,
  ChevronDownIcon,
  LockIcon
} from 'lucide-vue-next'
import ContactForm from '@/components/ContactForm.vue'
import OpenStreetMap from '@/components/OpenStreetMap.vue'
import { Button } from '@/components/ui/button'

const { t } = useI18n()
const themeStore = useThemeStore()
const isRtl = computed(() => themeStore.locale === 'ar')

// FAQ functionality
const openFaq = ref(-1)
const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? -1 : index
}

// FAQ data
const faqs = [
  { key: 'response' },
  { key: 'services' },
  { key: 'support' },
  { key: 'appointments' },
  { key: 'international' }
]
</script>

<style scoped>
/* Add any page-specific styles here */
.prose p {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
</style>
