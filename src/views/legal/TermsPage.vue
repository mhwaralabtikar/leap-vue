<template>
  <div :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- Enhanced Header Banner with Parallax Effect -->
    <section class="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-white py-20 md:py-24">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="absolute inset-0 bg-noise-pattern opacity-2"></div>
      
      <!-- Floating Shapes -->
      <div class="absolute top-8 right-8 w-32 h-32 rounded-full bg-white/5 backdrop-blur-xl animate-float-slow"></div>
      <div class="absolute bottom-8 left-12 w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl animate-float-delay"></div>
      <div class="absolute bottom-32 right-1/4 w-16 h-16 rounded-lg bg-white/5 rotate-12 backdrop-blur-xl animate-float"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">{{ $t('legal.terms.title') }}</h1>
          <p class="text-white/80 text-lg max-w-2xl mx-auto">{{ $t('legal.terms.subtitle') }}</p>
          
          <div class="inline-flex items-center justify-center gap-2 mt-8 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
            <RouterLink to="/" class="text-white/80 hover:text-white transition-colors">
              {{ $t('common.home') }}
            </RouterLink>
            <ChevronRightIcon class="h-4 w-4 text-white/50 rtl:rotate-180" />
            <span class="font-medium">{{ $t('legal.terms.title') }}</span>
          </div>
          
          <div class="mt-8 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm inline-flex items-center">
            <CalendarIcon class="h-4 w-4 mr-2 text-white/70" />
            <span class="text-white/70">
              {{ $t('legal.lastUpdated') }}: {{ $t('legal.terms.lastUpdatedDate') }}
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
                  v-for="(section, index) in tocSections" 
                  :key="index" 
                  variant="ghost" 
                  class="w-full justify-start text-sm h-auto py-2 font-normal"
                  :class="{'bg-primary/10 text-primary font-medium': activeSection === `section-${index + 1}`}"
                  @click="scrollToSection(`section-${index + 1}`)"
                >
                  <span class="w-5 h-5 rounded-full bg-primary/10 inline-flex items-center justify-center mr-2 text-xs text-primary font-medium">{{ index + 1 }}</span>
                  {{ $t(`legal.terms.toc.${section}`) }}
                </Button>
              </div>
              
              <!-- Quick Access Card -->
              <div class="mt-6 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
                <h3 class="font-medium text-sm mb-2 flex items-center">
                  <BookOpenIcon class="h-4 w-4 mr-2 text-primary" />
                  {{ $t('legal.termsDocuments') || 'Important Documents' }}
                </h3>
                <div class="space-y-2 mt-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    class="w-full text-xs h-8 justify-start"
                    as="RouterLink"
                    to="/legal/privacy"
                  >
                    <ShieldIcon class="h-3 w-3 mr-2" />
                    {{ $t('legal.privacyPolicy') || 'Privacy Policy' }}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    class="w-full text-xs h-8 justify-start"
                    @click="openContactModal"
                  >
                    <MailIcon class="h-3 w-3 mr-2" />
                    {{ $t('legal.contactUs') || 'Contact Us' }}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Main Content -->
          <div class="md:col-span-9 lg:col-span-9">
            <!-- Main content with sections -->
            <div class="prose prose-lg max-w-none dark:prose-invert">
              <div 
                v-for="(section, index) in tocSections" 
                :key="index" 
                :id="`section-${index + 1}`" 
                class="mb-12 scroll-mt-24 p-6 bg-card dark:bg-card/80 rounded-xl border border-border/30 shadow-sm transition-all duration-300 hover:shadow-md"
                ref="sections"
              >
                <div class="flex items-center mb-4 pb-2 border-b border-border/40 dark:border-border/20">
                  <div class="w-8 h-8 rounded-full bg-primary/10 inline-flex items-center justify-center mr-3 text-primary font-bold">
                    {{ index + 1 }}
                  </div>
                  <h2 class="text-2xl font-bold">
                    {{ $t(`legal.terms.toc.${section}`) }}
                  </h2>
                </div>
                
                <div v-html="$t(`legal.terms.sections.${section}`)" class="text-foreground/80"></div>
                
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
            
            <!-- Contact Section -->
            <div class="mt-12 p-6 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20">
              <div class="flex items-center mb-4">
                <SendIcon class="h-6 w-6 text-primary mr-3" />
                <h2 class="text-xl font-bold">{{ $t('legal.contact.title') }}</h2>
              </div>
              <p class="text-foreground/80 mb-4">{{ $t('legal.contact.text') }}</p>
              <div class="flex flex-wrap gap-3">
                <Button as="RouterLink" to="/contact" variant="default">
                  <MailIcon class="h-4 w-4 mr-2" />
                  {{ $t('legal.contact.button') }}
                </Button>
                <Button variant="outline" @click="openContactModal">
                  <MessageSquareIcon class="h-4 w-4 mr-2" />
                  {{ $t('legal.quickQuery') || 'Quick Question' }}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-12 bg-muted/30 dark:bg-muted/10">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-10">
            <HelpCircleIcon class="h-12 w-12 mx-auto text-primary mb-4" />
            <h2 class="text-2xl font-bold mb-2">{{ $t('legal.faq.title') }}</h2>
            <p class="text-muted-foreground max-w-xl mx-auto">
              {{ $t('legal.faq.subtitle') || 'Find answers to commonly asked questions about our terms of service.' }}
            </p>
          </div>
          
          <div class="bg-card dark:bg-card/80 rounded-xl border border-border/30 shadow-sm overflow-hidden">
            <div class="p-4">
              <Accordion type="single" collapsible class="w-full">
                <AccordionItem v-for="(faq, index) in legalFaqs" :key="index" :value="`faq-${index}`" class="border-b border-border/20 last:border-0">
                  <AccordionTrigger class="py-4 text-left font-medium hover:no-underline">
                    {{ $t(`legal.faq.items.${faq}.question`) }}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div class="prose dark:prose-invert prose-p:text-foreground/70 pt-2 pb-4">
                      <p v-html="$t(`legal.faq.items.${faq}.answer`)"></p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div class="p-4 border-t border-border/20 bg-muted/20">
              <p class="text-sm text-center text-muted-foreground">
                {{ $t('legal.faq.moreQuestions') || 'Have more questions? Contact our support team for assistance.' }}
                <Button 
                  variant="link" 
                  class="p-0 h-auto text-primary font-medium"
                  @click="openContactModal"
                >
                  {{ $t('legal.faq.contactButton') || 'Contact Us' }}
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Agreement Acceptance Banner -->
    <section class="py-8 bg-primary/5 dark:bg-primary/10 border-t border-primary/10">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckIcon class="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 class="font-medium">{{ $t('legal.acceptanceTitle') || 'Terms Acceptance' }}</h3>
                <p class="text-sm text-muted-foreground">{{ $t('legal.acceptanceText') || 'By using our services, you agree to these terms.' }}</p>
              </div>
            </div>
            <div class="flex gap-3">
              <Button as="RouterLink" to="/contact" variant="outline">
                {{ $t('legal.contactButton') || 'Contact Support' }}
              </Button>
              <Button variant="default">
                {{ $t('legal.acceptTerms') || 'I Accept' }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Contact Modal -->
    <ContactModal 
      v-model:isOpen="isContactModalOpen" 
      :description="$t('contact.termsFormDescription')" 
      @success="closeContactModal" 
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'
import { 
  ArrowUpIcon, 
  ChevronDownIcon, 
  ChevronRightIcon,
  CalendarIcon,
  ListIcon,
  ShieldIcon,
  MailIcon,
  BookOpenIcon,
  HelpCircleIcon,
  MessageSquareIcon,
  SendIcon,
  CheckIcon
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
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

// Table of contents sections IDs (these match translation keys)
const tocSections = [
  'acceptance',
  'services',
  'account',
  'intellectual',
  'userContent',
  'prohibited',
  'termination',
  'disclaimer',
  'limitation',
  'indemnification',
  'governing',
  'changes',
  'contact'
]

// FAQ data
const legalFaqs = [
  'canTermsChange', 
  'whatPersonalData', 
  'howTerminate', 
  'whoContact',
  'whatRights'
]

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
  document.querySelectorAll('[id^="section-"]').forEach((section) => {
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