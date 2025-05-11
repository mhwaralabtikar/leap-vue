<template>
  <nav 
    ref="navbar"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      scrolled ? 'py-2 shadow-lg bg-background/90 backdrop-blur-xl' : 'py-3 bg-background/75 backdrop-blur-lg', 
      'border-b border-border/30 dark:border-border/20'
    ]"
  >
    <div class="container mx-auto px-4 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center group relative">
        <!-- <div 
          class="relative overflow-hidden rounded-md bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center transition-all duration-300"
          :class="scrolled ? 'h-9 w-9' : 'h-10 w-10'"
        >
          <img src="/logo/logo.png" alt="Leap PM" class="h-auto w-auto transition-transform duration-300 group-hover:scale-110" :class="scrolled ? 'max-h-7' : 'max-h-8'" />
          <div class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span class="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></span>
        </div> -->
        <img src="/logo/logo.png" alt="Leap PM" class="h-auto w-auto transition-transform duration-300 group-hover:scale-110" :class="scrolled ? 'max-h-7' : 'max-h-8'" />

        <!-- <div class="ms-2.5 flex flex-col">
          <span 
            class="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 transition-all duration-300"
            :class="scrolled ? 'text-lg' : 'text-xl'"
          >
            Leap
          </span>
          <span 
            class="text-foreground/90 font-semibold leading-none transition-all duration-300"
            :class="scrolled ? 'text-xs -mt-1' : 'text-sm'"
          >
            Project Management
          </span>
        </div>
        <div class="absolute inset-0 rounded-md ring-0 ring-primary/20 opacity-0 group-hover:opacity-100 group-hover:ring-2 transition-all duration-300"></div> -->
      </RouterLink>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-s-2 lg:space-s-4">
        <RouterLink 
          v-for="item in navItems" 
          :key="item.path" 
          :to="item.path"
          class="px-3 py-2 relative text-foreground/80 hover:text-primary transition-colors rounded-md text-sm lg:text-base font-medium group overflow-hidden"
          :class="{ 'text-primary font-semibold': isActive(item.path) }"
        >
          <span class="relative z-10">{{ $t(`header.${item.key}`) }}</span>
          <span 
            class="absolute bottom-0 h-0.5 bg-primary/80 transition-all duration-300 rounded-full"
            :class="[
              isActive(item.path) ? 'w-4/5 opacity-100' : 'w-0 opacity-0 group-hover:opacity-100 group-hover:w-4/5',
              'left-1/2 -translate-x-1/2'
            ]"
          ></span>
          <span 
            class="absolute inset-0 bg-primary/5 dark:bg-primary/10 opacity-0 transition-opacity duration-300 rounded-md -z-0"
            :class="{ 'opacity-100': isActive(item.path), 'group-hover:opacity-100': !isActive(item.path) }"
          ></span>
        </RouterLink>
      </div>

      <!-- Actions -->
      <div class="flex items-center space-s-2 lg:space-s-3">
        <!-- Contact Button -->
        <RouterLink 
          to="/contact" 
          class="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/95 hover:to-primary/85 transition-all shadow-sm hover:shadow-md hover:shadow-primary/10"
        >
          <PhoneIcon class="me-2 h-4 w-4" />
          <span class="text-sm font-medium">{{ $t('header.contact') }}</span>
        </RouterLink>

        <!-- Language Switcher -->
        <button 
          @click="toggleLocale" 
          class="flex items-center p-2 rounded-md hover:bg-accent/80 dark:hover:bg-accent/30 transition-all duration-300 relative overflow-hidden group"
          aria-label="Toggle language"
        >
          <div class="h-8 w-8 flex items-center justify-center relative">
            <GlobeIcon class="h-5 w-5 absolute transition-opacity group-hover:rotate-12" :class="{'opacity-0': isChangingLocale, 'opacity-100': !isChangingLocale}" />
            <LoaderIcon class="h-5 w-5 absolute animate-spin transition-opacity" :class="{'opacity-0': !isChangingLocale, 'opacity-100': isChangingLocale}" />
          </div>
          <span class="font-medium text-sm ms-1 min-w-[20px]">{{ localeStore.locale === 'en' ? 'AR' : 'EN' }}</span>
          <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </button>

        <!-- Theme Switcher -->
        <button 
          @click="themeStore.toggleDarkMode" 
          class="p-2 rounded-md hover:bg-accent/80 dark:hover:bg-accent/30 transition-all duration-300 relative overflow-hidden group"
          aria-label="Toggle theme"
        >
          <div class="relative h-5 w-5">
            <SunIcon class="h-5 w-5 absolute transition-transform duration-500 rotate-0 group-hover:rotate-45" :class="{'scale-100 opacity-100': !themeStore.isDark, 'scale-0 opacity-0': themeStore.isDark}" />
            <MoonIcon class="h-5 w-5 absolute transition-transform duration-500 rotate-0 group-hover:-rotate-45" :class="{'scale-100 opacity-100': themeStore.isDark, 'scale-0 opacity-0': !themeStore.isDark}" />
          </div>
          <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </button>

        <!-- Mobile Menu Button -->
        <button 
          @click="uiStore.toggleMobileMenu" 
          class="md:hidden p-2 rounded-md hover:bg-accent/80 dark:hover:bg-accent/30 transition-all duration-300 relative overflow-hidden group"
          aria-label="Toggle menu"
        >
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span class="w-full h-0.5 bg-foreground transition-all duration-300" 
                  :class="{ 'rotate-45 translate-y-2': uiStore.isMobileMenuOpen }"></span>
            <span class="w-full h-0.5 bg-foreground transition-all duration-300" 
                  :class="{ 'opacity-0': uiStore.isMobileMenuOpen }"></span>
            <span class="w-full h-0.5 bg-foreground transition-all duration-300" 
                  :class="{ '-rotate-45 -translate-y-2': uiStore.isMobileMenuOpen }"></span>
          </div>
          <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <Transition 
      enter-active-class="transition-all duration-300 ease-out" 
      enter-from-class="opacity-0 -translate-y-4" 
      enter-to-class="opacity-100 translate-y-0" 
      leave-active-class="transition-all duration-200 ease-in" 
      leave-from-class="opacity-100 translate-y-0" 
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="uiStore.isMobileMenuOpen" 
        class="md:hidden fixed start-0 end-0 top-[61px] max-h-[calc(100vh-61px)] overflow-y-auto bg-background/95 dark:bg-background/90 backdrop-blur-xl border-b border-border/30 dark:border-border/20 z-50 shadow-lg"
      >
        <div class="container mx-auto py-4 px-4 flex flex-col space-y-3">
          <RouterLink 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="relative flex items-center justify-between py-3 px-4 rounded-md transition-all duration-300 overflow-hidden group"
            :class="{ 
              'text-primary bg-primary/10 dark:bg-primary/20': isActive(item.path),
              'text-foreground/80 hover:text-primary dark:text-foreground/70 hover:bg-accent/50 dark:hover:bg-accent/20': !isActive(item.path)
            }"
            @click="uiStore.closeMobileMenu"
          >
            <div class="flex items-center">
              <component 
                :is="getNavIcon(item.key)" 
                class="h-5 w-5 me-3 transition-all" 
                :class="{ 'text-primary': isActive(item.path), 'text-foreground/60 group-hover:text-primary': !isActive(item.path) }"
              />
              <span class="font-medium">{{ $t(`header.${item.key}`) }}</span>
            </div>
            <div class="flex items-center space-s-2">
              <span class="text-xs text-foreground/50 dark:text-foreground/40" v-if="getItemCount(item.key)">{{ getItemCount(item.key) }}</span>
              <span 
                v-if="isActive(item.path)" 
                class="flex items-center justify-center w-6 h-6 bg-primary/15 dark:bg-primary/25 text-primary rounded-full"
              >
                <CheckIcon class="h-3.5 w-3.5" />
              </span>
              <ChevronRightIcon class="h-4 w-4 text-foreground/40 ms-1 transition-transform" :class="{'rotate-90': isActive(item.path)}" />
            </div>
            
            <span 
              class="absolute bottom-0 start-0 h-0.5 w-0 bg-primary transition-all duration-300"
              :class="{ 'w-full': isActive(item.path), 'group-hover:w-full': !isActive(item.path) }"
            ></span>
          </RouterLink>
          
          <div class="border-t border-border/30 dark:border-border/20 my-2"></div>
          
          <RouterLink 
            to="/contact"
            class="flex items-center py-3 px-4 bg-gradient-to-r from-primary/20 to-primary/5 dark:from-primary/30 dark:to-primary/10 text-primary rounded-md hover:from-primary/30 hover:to-primary/10 dark:hover:from-primary/40 dark:hover:to-primary/15 transition-all shadow-sm"
            @click="uiStore.closeMobileMenu"
          >
            <PhoneIcon class="me-3 h-5 w-5" />
            <span class="font-medium">{{ $t('header.contact') }}</span>
          </RouterLink>

          <!-- Mobile Language Switcher -->
          <button 
            @click="toggleLocale" 
            class="flex items-center justify-between py-3 px-4 text-foreground/80 hover:text-primary hover:bg-accent/50 dark:hover:bg-accent/20 transition-all rounded-md group relative"
          >
            <div class="flex items-center">
              <GlobeIcon class="me-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span class="font-medium">{{ $t('header.switchLanguage') }}</span>
            </div>
            
            <div class="flex items-center">
              <span class="h-6 w-10 rounded-full bg-background/80 dark:bg-background flex items-center justify-center border border-border/30 dark:border-border/20 shadow-inner text-xs font-medium">
                {{ localeStore.locale === 'en' ? 'AR' : 'EN' }}
              </span>
            </div>
            
            <span class="absolute bottom-0 start-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
          
          <!-- Dark Mode Switcher Mobile -->
          <button 
            @click="themeStore.toggleDarkMode" 
            class="flex items-center justify-between py-3 px-4 text-foreground/80 hover:text-primary hover:bg-accent/50 dark:hover:bg-accent/20 transition-all rounded-md group relative"
          >
            <div class="flex items-center">
              <component 
                :is="themeStore.isDark ? MoonIcon : SunIcon" 
                class="me-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" 
              />
              <span class="font-medium">{{ themeStore.isDark ? 'Dark Mode' : 'Light Mode' }}</span>
            </div>
            
            <div class="h-6 w-12 rounded-full bg-background/80 dark:bg-background flex items-center p-0.5 border border-border/30 dark:border-border/20 transition-colors">
              <div 
                class="h-5 w-5 rounded-full transition-all duration-300 shadow-sm flex items-center justify-center"
                :class="themeStore.isDark ? 'ms-5 bg-primary text-white' : 'ms-0 bg-foreground/20 dark:bg-foreground/10'"
              >
                <component :is="themeStore.isDark ? MoonIcon : SunIcon" class="h-3 w-3" />
              </div>
            </div>
            
            <span class="absolute bottom-0 start-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { 
  SunIcon, 
  MoonIcon, 
  PhoneIcon, 
  GlobeIcon, 
  CheckIcon,
  LoaderIcon,
  HomeIcon,
  InfoIcon,
  PuzzleIcon,
  FolderIcon,
  NewspaperIcon,
  BriefcaseIcon,
  ChevronRightIcon
} from 'lucide-vue-next'
import { useUIStore } from '@/stores/ui'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme'
import { useLocaleStore } from '@/stores/locale'

const themeStore = useThemeStore()
const localeStore = useLocaleStore()
const uiStore = useUIStore()
const { t } = useI18n()
const route = useRoute()
const navbar = ref(null)

const isChangingLocale = ref(false)
const isRtl = computed(() => themeStore.locale === 'ar')
const scrolled = ref(false)
interface NavItem {
  key: string
  path: string
}

const navItems: NavItem[] = [
  { key: 'home', path: '/' },
  { key: 'services', path: '/services' },
  { key: 'projects', path: '/projects' },
  { key: 'blog', path: '/blog' },
  { key: 'jobs', path: '/jobs' },
  { key: 'about', path: '/about' },
] as NavItem[];

// Function to get the appropriate icon for each navigation item
function getNavIcon(key: string) {
  const icons: Record<string, any> = {
    home: HomeIcon,
    about: InfoIcon,
    services: PuzzleIcon,
    projects: FolderIcon,
    blog: NewspaperIcon,
    jobs: BriefcaseIcon,
    contact: PhoneIcon
  };
  return icons[key] || InfoIcon;
}

// Sample function to display item counts (for demo purposes)
function getItemCount(key: string): string {
  const counts: Record<string, string> = {
    blog: '4',
    jobs: '6',
    projects: '12'
  };
  return counts[key] || '';
}

// Handle scroll events to change navbar appearance
function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial scroll position
  
  // Set active section based on current route
  updateActiveSection()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Close mobile menu when route changes
watch(() => route.path, () => {
  if (uiStore.isMobileMenuOpen) {
    uiStore.closeMobileMenu()
  }
  
  // Update active section when route changes
  updateActiveSection()
})

// Close mobile menu when window resizes to desktop size
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && uiStore.isMobileMenuOpen) {
    uiStore.closeMobileMenu()
  }
})

function updateActiveSection() {
  // Extract the section from the path
  let section = route.path.split('/')[1]
  
  // If we're on the home page, set section to 'home'
  if (route.path === '/') {
    section = 'home'
  }
  
  uiStore.setActiveSection(section)
}

function toggleLocale() {
  isChangingLocale.value = true
  
  // Add a small delay to show the loading indicator
  setTimeout(() => {
    localeStore.toggleLocale()
    
    // Close mobile menu after language change
    if (uiStore.isMobileMenuOpen) {
      uiStore.closeMobileMenu()
    }
    
    // Add a delay before hiding the loading indicator
    setTimeout(() => {
      isChangingLocale.value = false
    }, 300)
  }, 300)
}

function isActive(path: string) {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<style scoped>
/* RTL support for animations */
[dir="rtl"] .rotate-45 {
  transform: translateY(0.5rem) rotate(45deg);
}

[dir="rtl"] .-rotate-45 {
  transform: translateY(-0.5rem) rotate(-45deg);
}

/* Subtle gradient animations */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-animate {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}
</style> 