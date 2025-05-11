<template>
  <div class="bg-primary text-white py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <!-- Company Info -->
        <div>
          <div class="flex items-center mb-6">
            <img :src="logoPath" alt="Leap PM" class="h-10 w-auto filter brightness-0 invert" />
            <!-- <span :class="{'ms-2': !isRtl, 'me-2': isRtl, 'text-xl font-bold': true}">LEAP PM</span> -->
          </div>
          <p class="text-white/80 mb-6">
            {{ $t('footer.companyDescription') }}
          </p>
          <div class="mt-6">
            <h4 class="font-semibold mb-4">{{ $t('footer.followUs') }}</h4>
            <div class="flex" :class="{'space-s-4': !isRtl, 'space-s-reverse space-s-4': isRtl}">
              <!-- <a href="https://twitter.com/leappm" target="_blank" rel="noopener noreferrer" :aria-label="$t('footer.followOnX')" class="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                <XIcon class="h-5 w-5" />
              </a> -->
              <a href="https://facebook.com/leappm" target="_blank" rel="noopener noreferrer" :aria-label="$t('footer.followOnFacebook')" class="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20 m-2">
                <FacebookIcon class="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/leappm" target="_blank" rel="noopener noreferrer" :aria-label="$t('footer.followOnLinkedIn')" class="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20 m-2">
                <LinkedinIcon class="h-5 w-5" />
              </a>
              <a href="https://instagram.com/leappm" target="_blank" rel="noopener noreferrer" :aria-label="$t('footer.followOnInstagram')" class="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20 m-2">
                <InstagramIcon class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-6">{{ $t('footer.contactInfo') }}</h3>
          <address class="not-italic">
            <p class="flex items-start text-white/80 mb-4">
              <MapPinIcon :class="{'me-3': !isRtl, 'ms-3': isRtl, 'h-5 w-5 mt-1 flex-shrink-0': true}" />
              <span>{{ $t('footer.address') }}</span>
            </p>
            <p class="flex items-center text-white/80 mb-4">
              <MailIcon :class="{'me-3': !isRtl, 'ms-3': isRtl, 'h-5 w-5 flex-shrink-0': true}" />
              <a href="mailto:info@leap-pm.com" class="hover:text-white transition-colors">info@leap-pm.com</a>
            </p>
            <p class="flex items-center text-white/80 mb-4">
              <PhoneIcon :class="{'me-3': !isRtl, 'ms-3': isRtl, 'h-5 w-5 flex-shrink-0': true}" />
              <a href="tel:+966532407726" class="hover:text-white transition-colors">+966 532 407 726</a>
            </p>
            <p class="flex items-center text-white/80">
              <PhoneIcon :class="{'me-3': !isRtl, 'ms-3': isRtl, 'h-5 w-5 flex-shrink-0': true}" />
              <a href="tel:+966565420453" class="hover:text-white transition-colors">+966 565 420 453</a>
            </p>
          </address>
        </div>

        <!-- Learn More -->
        <div>
          <h3 class="text-xl font-bold mb-6">{{ $t('footer.learnMore') }}</h3>
          <ul class="space-y-4">
            <li>
              <RouterLink to="/about" class="text-white/80 hover:text-white transition-colors flex items-center">
                <ChevronRightIcon :class="{'me-2': !isRtl, 'ms-2': isRtl, 'h-4 w-4': true, 'rotate-180': isRtl}" />
                {{ $t('footer.ourStory') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/services" class="text-white/80 hover:text-white transition-colors flex items-center">
                <ChevronRightIcon :class="{'me-2': !isRtl, 'ms-2': isRtl, 'h-4 w-4': true, 'rotate-180': isRtl}" />
                {{ $t('footer.ourServices') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/projects" class="text-white/80 hover:text-white transition-colors flex items-center">
                <ChevronRightIcon :class="{'me-2': !isRtl, 'ms-2': isRtl, 'h-4 w-4': true, 'rotate-180': isRtl}" />
                {{ $t('footer.projects') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/blog" class="text-white/80 hover:text-white transition-colors flex items-center">
                <ChevronRightIcon :class="{'me-2': !isRtl, 'ms-2': isRtl, 'h-4 w-4': true, 'rotate-180': isRtl}" />
                {{ $t('footer.blog') }}
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="text-white/80 hover:text-white transition-colors flex items-center">
                <ChevronRightIcon :class="{'me-2': !isRtl, 'ms-2': isRtl, 'h-4 w-4': true, 'rotate-180': isRtl}" />
                {{ $t('footer.contactUs') }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-xl font-bold mb-6">{{ $t('footer.newsletter') }}</h3>
          <p class="text-white/80 mb-4">{{ $t('footer.newsletterDescription') }}</p>
          <form class="flex flex-col sm:flex-row gap-3 mt-6">
            <input 
              type="email" 
              :placeholder="$t('footer.emailPlaceholder')" 
              class="px-4 py-3 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder:text-white/60"
            />
            <button 
              type="submit"
              class="px-4 py-3 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors"
            >
              {{ $t('footer.subscribe') }}
            </button>
          </form>
        </div>
      </div>

      <div class="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm text-white/70 mb-4 md:mb-0">
          © {{ new Date().getFullYear() }} Leap PM. {{ $t('footer.allRightsReserved') }}
        </p>
        <div class="flex gap-6 flex-wrap justify-center">
          <RouterLink to="/about" class="text-sm text-white/70 hover:text-white transition-colors">
            {{ $t('footer.aboutUs') }}
          </RouterLink>
          <RouterLink to="/jobs" class="text-sm text-white/70 hover:text-white transition-colors">
            {{ $t('footer.jobs') }}
          </RouterLink>
          <RouterLink to="/services" class="text-sm text-white/70 hover:text-white transition-colors">
            {{ $t('footer.services') }}
          </RouterLink>
          <RouterLink to="/contact" class="text-sm text-white/70 hover:text-white transition-colors">
            {{ $t('footer.contactUs') }}
          </RouterLink>
          
          <RouterLink to="/terms" class="text-sm text-white/70 hover:text-white transition-colors">
            {{ $t('footer.terms') }}
          </RouterLink>
          
          <RouterLink to="/privacy" class="text-sm text-white/70 hover:text-white transition-colors">
            {{ $t('footer.privacy') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { 
  XIcon, 
  FacebookIcon, 
  LinkedinIcon, 
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ChevronRightIcon
} from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '../stores/theme'

const { t } = useI18n()
const themeStore = useThemeStore()
const isRtl = computed(() => themeStore.locale === 'ar')
const logoPath = '/logo/logo-white.png'
</script> 