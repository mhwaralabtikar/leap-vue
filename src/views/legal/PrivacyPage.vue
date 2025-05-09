<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- Enhanced Header Banner with Parallax Effect -->
    <section class="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-white py-20 md:py-24">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="absolute inset-0 bg-noise-pattern opacity-2"></div>
      
      <!-- Floating Shapes -->
      <div class="absolute top-8 left-8 w-32 h-32 rounded-full bg-white/5 backdrop-blur-xl animate-float-slow"></div>
      <div class="absolute bottom-8 right-12 w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl animate-float-delay"></div>
      <div class="absolute bottom-32 left-1/4 w-16 h-16 rounded-lg bg-white/5 rotate-12 backdrop-blur-xl animate-float"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">{{ $t('legal.privacy.title') }}</h1>
          <p class="text-white/80 text-lg max-w-2xl mx-auto">{{ $t('legal.privacy.subtitle') }}</p>
          
          <div class="inline-flex items-center justify-center gap-2 mt-8 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            <RouterLink to="/" class="text-white/80 hover:text-white transition-colors">
              {{ $t('common.home') }}
            </RouterLink>
            <ChevronRightIcon class="h-4 w-4 text-white/50 rtl:rotate-180" />
            <span class="font-medium">{{ $t('legal.privacy.title') }}</span>
          </div>
          
          <div class="mt-8 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm inline-flex items-center">
            <CalendarIcon class="h-4 w-4 mr-2 text-white/70" />
            <span class="text-white/70">
              {{ $t('legal.lastUpdated') }}: {{ $t('legal.privacy.lastUpdatedDate') }}
            </span>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Main Content -->
    <section class="py-12 md:py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
          <!-- Sticky Sidebar Navigation -->
          <div class="md:col-span-3 lg:col-span-3">
            <div class="sticky top-24 p-6 bg-card dark:bg-card/80 rounded-xl border border-border/30 shadow-sm">
              <h2 class="text-xl font-bold mb-4 flex items-center">
                <ListIcon class="h-5 w-5 mr-2 text-primary" />
                {{ $t('legal.tableOfContents') }}
              </h2>
              
              <div class="space-y-1">
                <Button 
                  v-for="(section, index) in privacySections" 
                  :key="index" 
                  variant="ghost" 
                  class="w-full justify-start text-sm h-auto py-2 font-normal"
                  :class="{'bg-primary/10 text-primary font-medium': activeSection === `privacy-section-${index + 1}`}"
                  @click="scrollToSection(`privacy-section-${index + 1}`)"
                >
                  <span class="w-5 h-5 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 text-xs text-primary font-medium">{{ index + 1 }}</span>
                  {{ $t(`legal.privacy.toc.${section}`) }}
                </Button>
              </div>
              
              <!-- Contact Help Card -->
              <div class="mt-6 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
                <h3 class="font-medium text-sm mb-2 flex items-center">
                  <HelpCircleIcon class="h-4 w-4 mr-2 text-primary" />
                  {{ $t('legal.needHelp') || 'Need Help?' }}
                </h3>
                <p class="text-xs text-foreground/70 mb-3">
                  {{ $t('legal.contactSupport') || 'Contact our support team for any questions related to our privacy policy.' }}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  class="w-full text-xs h-8"
                  @click="openContactModal"
                >
                  <MailIcon class="h-3 w-3 mr-2" />
                  {{ $t('legal.contactUs') || 'Contact Us' }}
                </Button>
              </div>
            </div>
          </div>
          
          <!-- Main Content -->
          <div class="md:col-span-9 lg:col-span-9">
            <!-- Introduction -->
            <div class="mb-10 p-6 bg-card dark:bg-card/80 rounded-xl border border-border/30 shadow-sm">
              <Alert variant="default" class="mb-6">
                <AlertCircleIcon class="h-5 w-5" />
                <AlertTitle>{{ $t('legal.privacy.alert.title') }}</AlertTitle>
                <AlertDescription>
                  {{ $t('legal.privacy.alert.description') }}
                </AlertDescription>
              </Alert>
              
              <p class="text-foreground/80">{{ $t('legal.privacy.intro') }}</p>
            </div>
            
            <!-- Main content with sections -->
            <div class="prose prose-lg max-w-none dark:prose-invert">
              <div 
                v-for="(section, index) in privacySections" 
                :key="index" 
                :id="`privacy-section-${index + 1}`" 
                class="mb-12 scroll-mt-24 p-6 bg-card dark:bg-card/80 rounded-xl border border-border/30 shadow-sm transition-all duration-300 hover:shadow-md"
                ref="sections"
              >
                <div class="flex items-center mb-4 pb-2 border-b border-border/40 dark:border-border/20">
                  <div class="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-3 text-primary font-bold">
                    {{ index + 1 }}
                  </div>
                  <h2 class="text-2xl font-bold">
                    {{ $t(`legal.privacy.toc.${section}`) }}
                  </h2>
                </div>
                
                <div v-html="$t(`legal.privacy.sections.${section}`)" class="text-foreground/80"></div>
                
                <div class="mt-4 text-end">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    @click="scrollToTop"
                    class="text-primary text-sm hover:text-primary inline-flex items-center"
                  >
                    {{ $t('legal.backToTop') }}
                    <ArrowUpIcon class="h-4 w-4 ms-1" />
                  </Button>
                </div>
              </div>
            </div>
            
            <!-- Data Rights Section -->
            <div class="mt-12 p-6 bg-card dark:bg-card/80 rounded-xl border border-border/30 shadow-sm transition-all duration-300 hover:shadow-md">
              <div class="flex items-center mb-6">
                <ShieldIcon class="h-6 w-6 text-primary mr-3" />
                <h2 class="text-xl font-bold">{{ $t('legal.privacy.dataRights.title') }}</h2>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  v-for="(right, index) in dataRights" 
                  :key="index" 
                  class="flex gap-3 p-4 bg-muted/50 dark:bg-muted/30 rounded-lg transition-all duration-200 hover:bg-primary/5"
                >
                  <div class="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <component :is="right.icon" class="h-6 w-6" />
                  </div>
                  <div>
                    <h3 class="font-medium text-lg mb-1">{{ $t(`legal.privacy.dataRights.rights.${right.key}.title`) }}</h3>
                    <p class="text-foreground/70 text-sm">{{ $t(`legal.privacy.dataRights.rights.${right.key}.description`) }}</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-8 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 class="font-medium text-lg mb-1">{{ $t('legal.exerciseRights') || 'How to Exercise Your Rights' }}</h3>
                    <p class="text-foreground/70 text-sm">{{ $t('legal.exerciseRightsDescription') || 'Want to exercise any of these rights? Contact our data protection team.' }}</p>
                  </div>
                  <Button 
                    variant="default"
                    size="sm"
                    @click="openContactModal"
                  >
                    {{ $t('legal.requestDataAction') || 'Submit Data Request' }}
                  </Button>
                </div>
              </div>
            </div>
            
            <!-- Contact Section -->
            <div class="mt-12 p-6 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20">
              <h2 class="text-xl font-bold mb-4">{{ $t('legal.dataProtectionOfficer') }}</h2>
              <p class="text-foreground/80">{{ $t('legal.dataProtectionText') }}</p>
              <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex items-center gap-3 bg-white/40 dark:bg-white/5 p-3 rounded-lg">
                  <div class="w-10 h-10 rounded-full bg-primary/10 inline-flex items-center justify-center">
                    <MailIcon class="h-5 w-5 text-primary" />
                  </div>
                  <span>privacy@leap-pm.com</span>
                </div>
                <div class="flex items-center gap-3 bg-white/40 dark:bg-white/5 p-3 rounded-lg">
                  <div class="w-10 h-10 rounded-full bg-primary/10 inline-flex items-center justify-center">
                    <PhoneIcon class="h-5 w-5 text-primary" />
                  </div>
                  <span>+966 555 123 456</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cookie Policy Section with Interactive Cookie Manager -->
    <section class="py-12 bg-muted/30 dark:bg-muted/10">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-10">
            <CookieIcon class="h-12 w-12 mx-auto text-primary mb-4" />
            <h2 class="text-2xl font-bold mb-2">{{ $t('legal.privacy.cookiePolicy.title') }}</h2>
            <p class="text-muted-foreground max-w-xl mx-auto">
              {{ $t('legal.privacy.cookiePolicy.subtitle') || 'Manage how we use cookies to improve your experience on our website.' }}
            </p>
          </div>
          
          <div class="bg-card dark:bg-card/80 rounded-xl border border-border/30 shadow-sm overflow-hidden">
            <div class="p-6">
              <div class="grid grid-cols-1 gap-6">
                <div v-for="(cookie, index) in cookieTypes" :key="index" class="border-b border-border/20 pb-4 last:border-0 last:pb-0">
                  <div class="flex items-start justify-between gap-4">
                    <div class="flex gap-3">
                      <div class="flex-shrink-0 w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center text-primary mt-1">
                        <component :is="cookie.icon" class="h-5 w-5" />
                      </div>
                      <div>
                        <h3 class="text-base font-medium mb-1">{{ $t(`legal.privacy.cookiePolicy.types.${cookie.key}.title`) }}</h3>
                        <p class="text-foreground/70 text-sm mb-2">{{ $t(`legal.privacy.cookiePolicy.types.${cookie.key}.description`) }}</p>
                        <div class="flex items-center text-xs text-muted-foreground gap-3">
                          <span class="bg-muted px-2 py-1 rounded-md">
                            {{ $t(`legal.privacy.cookiePolicy.types.${cookie.key}.retention`) }}
                          </span>
                          <Badge :variant="cookie.required ? 'default' : 'outline'">
                            {{ cookie.required ? $t('legal.privacy.cookiePolicy.required') : $t('legal.privacy.cookiePolicy.optional') }}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div class="flex-shrink-0">
                      <Switch 
                        :id="`cookie-switch-${cookie.key}`"
                        :disabled="cookie.required"
                        :checked="cookie.required || cookieSettings[cookie.key]"
                        @update:checked="updateCookieSettings(cookie.key, $event)"
                        class="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="p-4 border-t border-border/20 bg-muted/20 flex flex-col sm:flex-row justify-between gap-3 items-center">
              <p class="text-sm text-muted-foreground">{{ $t('legal.privacy.cookiePolicy.preference') }}</p>
              <div class="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  @click="resetCookieSettings"
                >
                  {{ $t('legal.privacy.cookiePolicy.rejectAll') }}
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  @click="acceptAllCookies"
                >
                  {{ $t('legal.privacy.cookiePolicy.acceptAll') }}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Contact Modal -->
    <ContactModal 
      v-model:isOpen="isContactModalOpen" 
      :description="$t('contact.privacyFormDescription')" 
      @success="closeContactModal" 
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, reactive, onMounted, computed } from 'vue'
import { 
  ArrowUpIcon, 
  ChevronRightIcon, 
  AlertCircleIcon, 
  MailIcon, 
  PhoneIcon,
  EyeIcon,
  TrashIcon,
  DownloadIcon,
  EditIcon,
  BanIcon,
  CookieIcon,
  ShieldIcon,
  BarChartIcon,
  ListIcon,
  HelpCircleIcon,
  CalendarIcon
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { 
  Alert,
  AlertTitle,
  AlertDescription
} from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import ContactModal from '@/components/ContactModal.vue'

// Composables
const { t } = useI18n()

// Ref for sections to track visibility
const sections = ref([])
const activeSection = ref('')
const isContactModalOpen = ref(false)

// Privacy policy sections (these match translation keys)
const privacySections = [
  'information',
  'collection',
  'use',
  'sharing',
  'security',
  'thirdParty',
  'children',
  'international',
  'changes',
  'contact'
]

// Data rights icons and keys
const dataRights = [
  { key: 'access', icon: EyeIcon },
  { key: 'delete', icon: TrashIcon },
  { key: 'download', icon: DownloadIcon },
  { key: 'rectify', icon: EditIcon },
  { key: 'restrict', icon: BanIcon },
  { key: 'object', icon: BanIcon }
]

// Cookie types
const cookieTypes = [
  { 
    key: 'essential', 
    icon: ShieldIcon,
    required: true
  },
  { 
    key: 'performance', 
    icon: BarChartIcon,
    required: false
  },
  { 
    key: 'functional', 
    icon: CookieIcon,
    required: false
  }
]

// Cookie settings state
const cookieSettings = reactive({
  essential: true,
  performance: false,
  functional: false
})

// Update cookie settings
function updateCookieSettings(key, value) {
  cookieSettings[key] = value
}

// Accept all cookies
function acceptAllCookies() {
  Object.keys(cookieSettings).forEach(key => {
    cookieSettings[key] = true
  })
}

// Reset cookie settings
function resetCookieSettings() {
  Object.keys(cookieSettings).forEach(key => {
    if (key !== 'essential') {
      cookieSettings[key] = false
    }
  })
}

// Scroll to section
function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Contact modal functions
function openContactModal() {
  isContactModalOpen.value = true
}

function closeContactModal() {
  isContactModalOpen.value = false
}

// Track active section on scroll
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, { rootMargin: '-100px 0px -80% 0px' })
  
  // Observe all section elements
  document.querySelectorAll('[id^="privacy-section-"]').forEach((section) => {
    observer.observe(section)
  })
})
</script>

<style scoped>
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 24px 24px;
}

.bg-noise-pattern {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes floatSlow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

@keyframes floatDelay {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(-5deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: floatSlow 8s ease-in-out infinite;
}

.animate-float-delay {
  animation: floatDelay 7s ease-in-out 1s infinite;
}
</style> 