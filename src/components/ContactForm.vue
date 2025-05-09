<template>
  <div class="w-full">
    <Form @submit="onSubmit" class="space-y-8">
      <!-- Error Alert Message -->
      <transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div 
          v-if="showErrorAlert" 
          class="mt-4 bg-red-500/10 dark:bg-red-500/20 border border-red-500/30 text-red-700 dark:text-red-400 rounded-xl p-5 flex items-start"
        >
          <div class="flex-shrink-0 bg-red-100 dark:bg-red-900/30 rounded-full p-2 mr-4">
            <AlertCircleIcon class="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <p class="font-semibold text-lg">Form Error</p>
            <p class="text-sm mt-1 text-red-700/80 dark:text-red-400/80">{{ formErrorMessage || 'Please check the form for errors and try again.' }}</p>
            <div class="mt-3 flex">
              <button
                @click="showErrorAlert = false" 
                type="button"
                class="inline-flex items-center text-sm font-medium text-red-700 dark:text-red-400 hover:underline"
              >
                Dismiss
                <XCircleIcon class="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </transition>

      <!-- Enhanced Form Header with animated gradient -->
      <div class="relative rounded-xl overflow-hidden animate-in fade-in-0 duration-700">
        <!-- Background with animated gradient -->
        <div class="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 dark:from-primary/30 dark:via-primary/20 dark:to-primary/10 animate-gradient-x"></div>
        
        <!-- Decorative patterns -->
        <div class="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-20"></div>
        
        <!-- Content -->
        <div class="relative p-6 md:p-8">
          <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
            <!-- Icon with glowing effect -->
            <div class="flex-shrink-0 relative">
              <div class="absolute inset-0 bg-primary/20 dark:bg-primary/30 rounded-full blur-lg animate-pulse-slow"></div>
              <div class="relative w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center shadow-lg">
                <SendIcon class="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div>
              <h2 class="text-2xl font-bold mb-2">{{ $t('contact.sendMessage') }}</h2>
              <p class="text-base text-foreground/70 dark:text-foreground/60 max-w-2xl">
                {{ $t('contact.subtitle') }}
              </p>
              <div class="flex flex-wrap gap-3 mt-4">
                <div class="flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-3 py-1.5 rounded-full text-sm text-primary">
                  <CheckCircleIcon class="h-4 w-4" />
                  <span>{{ $t('contact.quickResponse') }}</span>
                </div>
                <div class="flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-3 py-1.5 rounded-full text-sm text-primary">
                  <ShieldIcon class="h-4 w-4" />
                  <span>{{ $t('contact.secureForm') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Fields Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Name Field -->
        <FormField name="name" v-slot="{ field }">
          <FormItem>
            <FormLabel class="flex items-center gap-1">
              {{ $t('contact.name') }} <span class="text-primary">*</span>
            </FormLabel>
            <div class="relative group">
              <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-muted-foreground/70 dark:text-muted-foreground/60 transition-all group-focus-within:text-primary">
                <UserIcon class="h-5 w-5" />
              </div>
              <FormControl>
                <Input 
                  ref="nameInputRef"
                  :id="field.name"
                  :name="field.name"
                  :value="form.name"
                  @input="(e) => validateOnChange('name', e.target.value)"
                  :placeholder="$t('contact.name')"
                  class="ps-12 py-3 rounded-xl"
                  :class="{ 
                    'border-destructive focus:ring-destructive/40': errors.name, 
                    'border-green-500/50 focus:ring-green-500/40': form.name && !errors.name,
                    'pe-10': form.name
                  }"
                  :disabled="isSubmitting"
                />
              </FormControl>
              <div v-if="form.name" class="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
                <CheckIcon v-if="!errors.name" class="h-5 w-5 text-green-500" />
                <XCircleIcon v-else class="h-5 w-5 text-destructive" />
              </div>
            </div>
            <FormDescription>
              {{ $t('contact.nameDescription') || 'Enter your full name as it appears on official documents' }}
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <!-- Email Field -->
        <FormField name="email" v-slot="{ field }">
          <FormItem>
            <FormLabel class="flex items-center gap-1">
              {{ $t('contact.email') }} <span class="text-primary">*</span>
            </FormLabel>
            <div class="relative group">
              <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-muted-foreground/70 dark:text-muted-foreground/60 transition-all group-focus-within:text-primary">
                <MailIcon class="h-5 w-5" />
              </div>
              <FormControl>
                <Input 
                  :id="field.name"
                  :name="field.name"
                  :value="form.email"
                  @input="(e) => validateOnChange('email', e.target.value)"
                  type="email"
                  :placeholder="$t('contact.email')"
                  class="ps-12 py-3 rounded-xl"
                  :class="{ 
                    'border-destructive focus:ring-destructive/40': errors.email, 
                    'border-green-500/50 focus:ring-green-500/40': form.email && !errors.email,
                    'pe-10': form.email
                  }"
                  :disabled="isSubmitting"
                />
              </FormControl>
              <div v-if="form.email" class="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
                <CheckIcon v-if="!errors.email" class="h-5 w-5 text-green-500" />
                <XCircleIcon v-else class="h-5 w-5 text-destructive" />
              </div>
            </div>
            <FormDescription>
              {{ $t('contact.emailDescription') || 'We\'ll use this email to respond to your inquiry' }}
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <!-- Subject Field -->
        <FormField name="subject" v-slot="{ field }">
          <FormItem>
            <FormLabel class="flex items-center gap-1">
              {{ $t('contact.subject') }} <span class="text-primary">*</span>
            </FormLabel>
            <div class="relative group">
              <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-muted-foreground/70 dark:text-muted-foreground/60 transition-all group-focus-within:text-primary">
                <ClipboardListIcon class="h-5 w-5" />
              </div>
              <FormControl>
                <Input 
                  :id="field.name"
                  :name="field.name"
                  :value="form.subject"
                  @input="(e) => validateOnChange('subject', e.target.value)"
                  :placeholder="$t('contact.subject')"
                  class="ps-12 py-3 rounded-xl"
                  :class="{ 
                    'border-destructive focus:ring-destructive/40': errors.subject, 
                    'border-green-500/50 focus:ring-green-500/40': form.subject && !errors.subject,
                    'pe-10': form.subject
                  }"
                  :disabled="isSubmitting"
                />
              </FormControl>
              <div v-if="form.subject" class="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
                <CheckIcon v-if="!errors.subject" class="h-5 w-5 text-green-500" />
                <XCircleIcon v-else class="h-5 w-5 text-destructive" />
              </div>
            </div>
            <FormDescription>
              {{ $t('contact.subjectDescription') || 'A brief summary of your inquiry' }}
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>

        <!-- Phone Field -->
        <FormField name="phone" v-slot="{ field }">
          <FormItem>
            <FormLabel>
              {{ $t('contact.phone') }}
            </FormLabel>
            <div class="relative group">
              <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-muted-foreground/70 dark:text-muted-foreground/60 transition-all group-focus-within:text-primary">
                <PhoneIcon class="h-5 w-5" />
              </div>
              <FormControl>
                <Input 
                  :id="field.name"
                  :name="field.name" 
                  :value="form.phone"
                  @input="(e) => validateOnChange('phone', e.target.value)"
                  type="tel"
                  :placeholder="$t('contact.phone')"
                  class="ps-12 py-3 rounded-xl"
                  :class="{ 
                    'border-destructive focus:ring-destructive/40': errors.phone, 
                    'border-green-500/50 focus:ring-green-500/40': form.phone && !errors.phone,
                    'pe-10': form.phone
                  }"
                  :disabled="isSubmitting"
                />
              </FormControl>
              <div v-if="form.phone" class="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
                <CheckIcon v-if="!errors.phone" class="h-5 w-5 text-green-500" />
                <XCircleIcon v-else class="h-5 w-5 text-destructive" />
              </div>
            </div>
            <FormDescription>
              {{ $t('contact.phoneDescription') || 'Optional. Include country code for international numbers' }}
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>

      <!-- Inquiry Type Selection -->
      <div class="mt-6 space-y-3">
        <FormLabel class="block text-sm font-medium mb-1">
          {{ $t('contact.inquiryType') }}
        </FormLabel>
        <FormDescription class="mt-0 mb-2">
          {{ $t('contact.inquiryTypeDescription') || 'Select the category that best matches your inquiry' }}
        </FormDescription>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div 
            v-for="type in inquiryTypes" 
            :key="`inquiry-type-${type.value}`"
            @click="selectInquiryType(type.value)"
            class="relative overflow-hidden border border-border/50 dark:border-border/30 p-4 rounded-xl transition-all duration-200 cursor-pointer group hover:shadow-md hover:border-primary/50 dark:hover:border-primary/40"
            :class="{
              'border-primary bg-primary/5 dark:bg-primary/10 shadow-md': form.inquiryType === type.value,
              'hover:-translate-y-1': form.inquiryType !== type.value
            }"
          >
            <!-- Subtle background glow effect for selected item -->
            <div v-if="form.inquiryType === type.value" class="absolute inset-0 bg-primary/5 dark:bg-primary/10 transform scale-[2] rounded-full blur-2xl opacity-50"></div>
            
            <div class="relative flex flex-col items-center justify-center gap-3">
              <div class="w-12 h-12 bg-white dark:bg-gray-800 shadow-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10 dark:group-hover:bg-primary/20"
                   :class="{ 'bg-primary/10 dark:bg-primary/20': form.inquiryType === type.value }">
                <component :is="type.icon" class="h-6 w-6 transition-all duration-200"
                  :class="form.inquiryType === type.value ? 'text-primary' : 'text-muted-foreground dark:text-muted-foreground/70 group-hover:text-primary/70'" />
              </div>
              <span class="text-sm font-medium text-center" 
                :class="form.inquiryType === type.value ? 'text-foreground dark:text-foreground' : 'text-muted-foreground dark:text-muted-foreground/70'">
                {{ $t(`contact.inquiryTypes.${type.value}`) }}
              </span>
            </div>
            
            <div v-if="form.inquiryType === type.value" class="absolute top-3 end-3">
              <div class="bg-primary text-white rounded-full p-1">
                <CheckIcon class="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Message Field -->
      <FormField name="message" v-slot="{ field }">
        <FormItem>
          <FormLabel class="flex items-center gap-1">
            {{ $t('contact.message') }} <span class="text-primary">*</span>
          </FormLabel>
          <div class="relative">
            <FormControl>
              <Textarea
                :id="field.name"
                :name="field.name"
                :value="form.message"
                @input="(e) => validateOnChange('message', e.target.value)"
                :placeholder="$t('contact.messagePlaceholder')"
                rows="5"
                class="w-full px-5 py-4 rounded-xl"
                :class="{ 
                  'border-destructive focus:ring-destructive/40': errors.message, 
                  'border-green-500/50 focus:ring-green-500/40': form.message && !errors.message && form.message.length >= 10
                }"
                :disabled="isSubmitting"
              />
            </FormControl>
            
            <!-- Character counter bubble that appears when typing -->
            <div v-if="form.message" 
              class="absolute bottom-3 end-3 px-2 py-1 bg-muted dark:bg-muted/80 text-muted-foreground text-xs rounded-md transition-all duration-300"
              :class="{ 'text-destructive': form.message.length > 480, 'text-primary': form.message.length > 400 && form.message.length <= 480 }">
              {{ form.message.length }}/500
            </div>
          </div>
          <FormDescription>
            {{ $t('contact.messageDescription') || 'Provide as much detail as possible about your inquiry (min 10, max 500 characters)' }}
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      
      <!-- Privacy Policy Agreement -->
      <FormField name="privacyAgreed" v-slot="{ field }">
        <FormItem class="flex flex-row items-start space-x-3 space-y-0 mt-6">
          <FormControl>
            <Checkbox
              :id="field.name"
              :name="field.name"
              :checked="form.privacyAgreed"
              @update:checked="(checked) => validateOnChange('privacyAgreed', checked)"
              :disabled="isSubmitting"
              :class="{ 'border-destructive': errors.privacyAgreed }"
            />
          </FormControl>
          <div class="space-y-1 leading-none">
            <FormLabel class="text-sm text-muted-foreground dark:text-muted-foreground/80" v-html="$t('contact.privacyPolicy')"></FormLabel>
            <FormDescription class="text-xs">
              {{ $t('contact.privacyDescription') || 'Required to process your submission' }}
            </FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      </FormField>

      <!-- Submit Button -->
      <div class="mt-8">
        <Button
          type="submit"
          class="w-full relative overflow-hidden group bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-6 rounded-xl transition-all text-base font-medium flex items-center justify-center shadow-md hover:shadow-lg dark:shadow-primary/20"
          :disabled="isSubmitting"
        >
          <!-- Button shine effect -->
          <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></span>
          
          <!-- Button content -->
          <span class="relative flex items-center justify-center">
            <span v-if="isSubmitting" class="flex items-center">
              <LoaderIcon class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
              {{ $t('contact.submitting') }}
            </span>
            <span v-else class="flex items-center">
              <SendIcon class="h-5 w-5 me-2" />
              {{ $t('contact.submit') }}
            </span>
          </span>
        </Button>
      </div>

      <!-- Enhanced Success Message with Animation -->
      <transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div 
          v-if="isSuccess" 
          class="mt-6 bg-green-500/10 dark:bg-green-500/20 border border-green-500/30 text-green-700 dark:text-green-400 rounded-xl p-6 flex items-start"
        >
          <div class="flex-shrink-0 relative">
            <!-- Success icon with glowing effect -->
            <div class="absolute inset-0 bg-green-500/20 dark:bg-green-500/30 rounded-full blur-lg"></div>
            <div class="relative bg-green-100 dark:bg-green-900/30 rounded-full p-3">
              <CheckCircleIcon class="h-7 w-7 text-green-600 dark:text-green-400" />
            </div>
          </div>

          <div class="ml-5">
            <div class="flex items-center">
              <p class="font-semibold text-lg">{{ $t('contact.successTitle') }}</p>
              <!-- Notification bell animation -->
              <div class="ml-2 animate-bounce">
                <BellIcon class="h-5 w-5 text-green-500" />
              </div>
            </div>
            <p class="text-sm mt-2 text-green-700/80 dark:text-green-400/80">{{ $t('contact.success') }}</p>
            <div class="mt-4 flex">
              <button
                @click="isSuccess = false" 
                class="inline-flex items-center text-sm font-medium text-green-700 dark:text-green-400 hover:underline"
              >
                {{ $t('contact.sendAnother') }}
                <ChevronRightIcon class="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </transition>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, nextTick, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme'
import { useContactStore } from '@/stores/contact'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { 
  LoaderIcon, 
  CheckCircleIcon, 
  SendIcon, 
  UserIcon, 
  MailIcon, 
  PhoneIcon, 
  CheckIcon,
  XCircleIcon,
  ClipboardListIcon,
  BuildingIcon,
  BriefcaseIcon,
  HelpCircleIcon,
  HeartIcon,
  ShieldIcon,
  ChevronRightIcon,
  AlertCircleIcon,
  BellIcon
} from 'lucide-vue-next'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

// Composables
const { t } = useI18n()
const themeStore = useThemeStore()
const isRtl = computed(() => themeStore.locale === 'ar')

// UI States
const isHovered = ref(false)
const isSubmitting = ref(false)
const isSuccess = ref(false)
const showErrorAlert = ref(false)
const formErrorMessage = ref('')
const nameInputRef = ref<HTMLInputElement | null>(null)

// Inquiry types
const inquiryTypes = [
  { value: 'general', icon: HelpCircleIcon },
  { value: 'services', icon: BriefcaseIcon },
  { value: 'partnership', icon: BuildingIcon },
  { value: 'support', icon: HeartIcon },
]

// Phone number regex for validation
const phoneRegex = /^(\+?[0-9]{1,4}[-\s.]?)?(\([0-9]{1,4}\)[-\s.]?)?[0-9]{1,}[-\s.]?[0-9]{1,}[-\s.]?[0-9]{1,}$/

// Define validation schema with Zod
const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(2, t('contact.errors.nameRequired')),
    email: z.string().email(t('contact.errors.validEmail')),
    subject: z.string().min(2, t('contact.errors.subjectRequired')),
    phone: z.string()
      .refine(val => val === '' || phoneRegex.test(val), {
        message: 'Please enter a valid phone number'
      })
      .optional(),
    inquiryType: z.string().optional(),
    message: z.string().min(10, t('contact.errors.messageRequired'))
      .max(500, t('contact.errors.messageTooLong')),
    privacyAgreed: z.boolean().refine(val => val === true, {
      message: t('contact.errors.privacyRequired')
    })
  })
)

// Initialize form
const { handleSubmit, errors, validate, validateField, setFieldValue } = useForm({
  validationSchema
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  phone: '',
  inquiryType: 'general', // Default value
  message: '',
  privacyAgreed: false
})

// Auto-focus first field on mount
onMounted(() => {
  setTimeout(() => {
    // Check if nameInputRef.value is an Element with a focus method
    if (nameInputRef.value && typeof nameInputRef.value.focus === 'function') {
      nameInputRef.value.focus()
    }
  }, 100)
})

// Validate on blur
async function validateOnBlur(field: 'message' | 'name' | 'email' | 'subject' | 'phone' | 'inquiryType' | 'privacyAgreed') {
  await validateField(field)
}

// Validate on change with optimized performance using nextTick
async function validateOnChange(field: 'message' | 'name' | 'email' | 'subject' | 'phone' | 'inquiryType' | 'privacyAgreed', value: any) {
  form[field] = value
  
  // Set field value for validation
  setFieldValue(field, value)
  
  // Use nextTick to prevent UI blocking during validation
  nextTick(async () => {
    await validateField(field)
  })
}

// Set inquiry type
function selectInquiryType(type: string) {
  form.inquiryType = type
  
  // Validate in the background
  nextTick(async () => {
    setFieldValue('inquiryType', type)
    await validateField('inquiryType')
  })
}

// Form submission handler
const onSubmit = handleSubmit(async (values) => {
  try {
    isSubmitting.value = true
    showErrorAlert.value = false
    
    // Validate entire form
    const result = await validate()
    if (!result.valid) {
      showErrorAlert.value = true
      formErrorMessage.value = t('contact.errors.formErrors') || 'Please correct the errors in the form before submitting.'
      return
    }
    
    // In a real app, here we would call the API endpoint
    // Example: await fetch('https://test.leap-pm.com/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(values)
    // })
    
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Save to contact store
    const contactStore = useContactStore()
    // Ensure inquiryType is not undefined
    const submissionData = {
      ...values,
      inquiryType: values.inquiryType || 'general'
    }
    contactStore.saveContactSubmission(submissionData)
    
    // Reset form after successful submission
    form.name = ''
    form.email = ''
    form.subject = ''
    form.phone = ''
    form.inquiryType = 'general'
    form.message = ''
    form.privacyAgreed = false
    
    // Show success message
    isSuccess.value = true
    
    // Scroll to top of form to show success message
    setTimeout(() => {
      window.scrollTo({
        top: window.scrollY - 300,
        behavior: 'smooth'
      })
    }, 100)
    
    // Hide success message after 6 seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 6000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
    showErrorAlert.value = true
    formErrorMessage.value = 'An error occurred while submitting the form. Please try again.'
  } finally {
    isSubmitting.value = false
  }
})
</script>

<style scoped>
/* Animation for gradient background */
@keyframes gradient-x {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 15s ease infinite;
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Grid pattern */
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Dark mode grid pattern */
:global(.dark) .bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
}

/* RTL animations */
[dir="rtl"] .transform.translate-x-full {
  transform: translateX(-100%);
}

[dir="rtl"] .transform.-translate-x-full {
  transform: translateX(100%);
}

[dir="rtl"] .bg-gradient-to-r {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}

/* Button shine effect */
@keyframes shine {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}

.animate-shine {
  animation: shine 1.5s infinite;
}
</style>