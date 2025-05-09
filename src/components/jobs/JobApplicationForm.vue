<template>
  <Form @submit="onSubmit" class="space-y-4">
    <!-- Error Alert -->
    <div 
      v-if="showErrorAlert" 
      class="bg-destructive/10 border border-destructive/30 text-destructive dark:text-destructive/90 rounded-lg p-3 mb-3 flex items-start text-sm rtl:text-right"
    >
      <AlertCircleIcon class="h-4 w-4 ltr:mr-2 rtl:ml-2 mt-0.5 flex-shrink-0" />
      <span>{{ formErrorMessage || 'Please check the form for errors and try again.' }}</span>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <!-- First Name Field -->
      <FormField name="firstName" v-slot="{ field }">
        <FormItem>
          <FormLabel>{{ $t('jobs.form.firstName') }} <span class="text-primary">*</span></FormLabel>
          <div class="relative">
            <FormControl>
              <Input 
                :id="field.name"
                :name="field.name"
                :value="form.firstName"
                @input="(e) => validateOnChange('firstName', e.target.value)"
                :placeholder="$t('jobs.form.firstNamePlaceholder')"
                :class="{ 
                  'border-destructive focus:ring-destructive/40': errors.firstName,
                  'border-green-500/50 focus:ring-green-500/40': form.firstName && !errors.firstName 
                }"
                :disabled="isSubmitting"
              />
            </FormControl>
            <div v-if="form.firstName" class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
              <CheckIcon v-if="!errors.firstName" class="h-4 w-4 text-green-500" />
              <XCircleIcon v-else class="h-4 w-4 text-destructive" />
            </div>
          </div>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Last Name Field -->
      <FormField name="lastName" v-slot="{ field }">
        <FormItem>
          <FormLabel>{{ $t('jobs.form.lastName') }} <span class="text-primary">*</span></FormLabel>
          <div class="relative">
            <FormControl>
              <Input 
                :id="field.name"
                :name="field.name"
                :value="form.lastName"
                @input="(e) => validateOnChange('lastName', e.target.value)"
                :placeholder="$t('jobs.form.lastNamePlaceholder')"
                :class="{ 
                  'border-destructive focus:ring-destructive/40': errors.lastName,
                  'border-green-500/50 focus:ring-green-500/40': form.lastName && !errors.lastName
                }"
                :disabled="isSubmitting"
              />
            </FormControl>
            <div v-if="form.lastName" class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
              <CheckIcon v-if="!errors.lastName" class="h-4 w-4 text-green-500" />
              <XCircleIcon v-else class="h-4 w-4 text-destructive" />
            </div>
          </div>
          <FormMessage />
        </FormItem>
      </FormField>
    </div>

    <!-- Email Field -->
    <FormField name="email" v-slot="{ field }">
      <FormItem>
        <FormLabel>{{ $t('jobs.form.email') }} <span class="text-primary">*</span></FormLabel>
        <div class="relative">
          <FormControl>
            <Input 
              :id="field.name"
              :name="field.name"
              :value="form.email"
              @input="(e) => validateOnChange('email', e.target.value)"
              type="email"
              :placeholder="$t('jobs.form.emailPlaceholder')"
              :class="{ 
                'border-destructive focus:ring-destructive/40': errors.email,
                'border-green-500/50 focus:ring-green-500/40': form.email && !errors.email
              }"
              :disabled="isSubmitting"
            />
          </FormControl>
          <div v-if="form.email" class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
            <CheckIcon v-if="!errors.email" class="h-4 w-4 text-green-500" />
            <XCircleIcon v-else class="h-4 w-4 text-destructive" />
          </div>
        </div>
        <FormMessage />
      </FormItem>
    </FormField>

    <!-- Phone Field -->
    <FormField name="phone" v-slot="{ field }">
      <FormItem>
        <FormLabel>{{ $t('jobs.form.phone') }} <span class="text-primary">*</span></FormLabel>
        <div class="relative">
          <FormControl>
            <Input 
              :id="field.name"
              :name="field.name"
              :value="form.phone"
              @input="(e) => validateOnChange('phone', e.target.value)"
              type="tel"
              :placeholder="$t('jobs.form.phonePlaceholder')"
              :class="{ 
                'border-destructive focus:ring-destructive/40': errors.phone,
                'border-green-500/50 focus:ring-green-500/40': form.phone && !errors.phone
              }"
              :disabled="isSubmitting"
            />
          </FormControl>
          <div v-if="form.phone" class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
            <CheckIcon v-if="!errors.phone" class="h-4 w-4 text-green-500" />
            <XCircleIcon v-else class="h-4 w-4 text-destructive" />
          </div>
        </div>
        <FormMessage />
      </FormItem>
    </FormField>

    <!-- Resume Upload -->
    <FormField name="resume" v-slot="{ field }">
      <FormItem>
        <FormLabel>{{ $t('jobs.form.resume') }} <span class="text-primary">*</span></FormLabel>
        <div class="flex flex-col space-y-2">
          <div 
            v-if="!form.resume" 
            class="border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary/50 transition-colors"
            @click="triggerFileInput"
            :class="{ 'border-destructive': errors.resume }"
          >
            <UploadCloudIcon class="h-6 w-6 mx-auto text-muted-foreground" />
            <p class="text-sm text-muted-foreground mt-2">{{ $t('jobs.form.resumePrompt') }}</p>
          </div>
          <div v-else class="flex items-center justify-between p-3 border border-border rounded-lg bg-muted/30">
            <div class="flex items-center">
              <FileIcon class="h-5 w-5 text-primary mr-2" />
              <span class="text-sm truncate max-w-[200px]">{{ form.resume.name }}</span>
            </div>
            <Button type="button" variant="ghost" size="sm" @click="removeFile" :disabled="isSubmitting">
              <XIcon class="h-4 w-4" />
            </Button>
          </div>
          <FormControl>
            <Input
              ref="fileInput"
              type="file" 
              class="hidden" 
              accept=".pdf,.doc,.docx"
              @change="handleFileUpload"
              :disabled="isSubmitting"
            />
          </FormControl>
          <FormMessage />
        </div>
      </FormItem>
    </FormField>
    
    <!-- Cover Letter (Optional, can be hidden in compact mode) -->
    <FormField v-if="!compact" name="coverLetter" v-slot="{ field }">
      <FormItem>
        <FormLabel>{{ $t('jobs.form.coverLetter') }}</FormLabel>
        <FormControl>
          <Textarea 
            :id="field.name"
            :name="field.name"
            :value="form.coverLetter"
            @input="(e) => validateOnChange('coverLetter', e.target.value)"
            :placeholder="$t('jobs.form.coverLetterPlaceholder')"
            class="min-h-[120px]"
            :disabled="isSubmitting"
          />
        </FormControl>
        <FormDescription class="text-xs">
          {{ $t('jobs.form.coverLetterDescription') || 'Optional, but recommended' }}
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    
    <!-- Employment Eligibility (Optional, can be hidden in compact mode) -->
    <FormField v-if="!compact" name="eligibilityConfirmed" v-slot="{ field }">
      <FormItem class="flex flex-row items-start space-x-3 space-y-0">
        <FormControl>
          <Checkbox
            :id="field.name"
            :name="field.name"
            :checked="form.eligibilityConfirmed"
            @update:checked="(checked) => validateOnChange('eligibilityConfirmed', checked)"
            :disabled="isSubmitting"
          />
        </FormControl>
        <div class="space-y-1 leading-none">
          <FormLabel class="text-sm cursor-pointer">
            {{ $t('jobs.form.eligibility') || 'I confirm I am legally eligible to work in this country' }}
          </FormLabel>
          <FormMessage />
        </div>
      </FormItem>
    </FormField>
    
    <!-- Privacy Policy Agreement -->
    <FormField name="privacyAgreed" v-slot="{ field }">
      <FormItem class="flex flex-row items-start rtl:space-x-reverse space-x-3 space-y-0">
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
          <FormLabel class="text-sm" v-html="$t('jobs.form.privacyPolicyMini')"></FormLabel>
          <FormMessage />
        </div>
      </FormItem>
    </FormField>

    <!-- Submit Button -->
    <div class="mt-4 flex justify-end rtl:justify-start">
      <slot name="buttons">
        <Button
          type="submit"
          :disabled="isSubmitting"
          class="w-full"
        >
          <span v-if="isSubmitting" class="flex items-center justify-center">
            <LoaderIcon class="animate-spin ltr:mr-2 rtl:ml-2 h-4 w-4" />
            {{ $t('jobs.form.submitting') }}
          </span>
          <span v-else class="flex items-center justify-center">
            <SendIcon class="ltr:mr-2 rtl:ml-2 h-4 w-4 rtl:rotate-180" />
            {{ $t('jobs.form.submit') }}
          </span>
        </Button>
      </slot>
    </div>

    <!-- Success Message -->
    <div 
      v-if="isSuccess" 
      class="bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 rounded-lg p-3 flex items-center rtl:text-right"
    >
      <div class="flex items-center">
        <CheckCircleIcon class="h-5 w-5 ltr:mr-2 rtl:ml-2" />
        <p class="text-sm">{{ $t('jobs.form.successMessage') }}</p>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { 
  AlertCircleIcon,
  LoaderIcon,
  SendIcon,
  CheckCircleIcon,
  UploadCloudIcon,
  FileIcon,
  XIcon,
  CheckIcon,
  XCircleIcon
} from 'lucide-vue-next'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

// Define props
const props = defineProps({
  jobId: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    default: ''
  },
  compact: {
    type: Boolean,
    default: false
  }
})

// Define events
const emit = defineEmits(['success', 'error', 'cancel'])

// Composables
const { t } = useI18n()

// UI States
const isSubmitting = ref(false)
const isSuccess = ref(false)
const showErrorAlert = ref(false)
const formErrorMessage = ref('')
const fileInput = ref<HTMLInputElement | null>(null)

// Define validation schema with Zod
const validationSchema = toTypedSchema(
  z.object({
    firstName: z.string().min(2, t('jobs.form.errors.firstNameRequired')),
    lastName: z.string().min(2, t('jobs.form.errors.lastNameRequired')),
    email: z.string().email(t('jobs.form.errors.validEmail')),
    phone: z.string().min(5, t('jobs.form.errors.validPhone')),
    resume: z.instanceof(File, { message: t('jobs.form.errors.resumeRequired') }),
    coverLetter: z.string().optional(),
    eligibilityConfirmed: z.boolean().refine(val => val === true, {
      message: t('jobs.form.errors.eligibilityRequired') || 'You must confirm your eligibility to work'
    }),
    privacyAgreed: z.boolean().refine(val => val === true, {
      message: t('jobs.form.errors.privacyRequired')
    })
  })
)

// Initialize form with vee-validate
const { handleSubmit, errors, validate, validateField, setFieldValue, resetForm } = useForm({
  validationSchema
})

// Form state (reactive)
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  resume: null as File | null,
  coverLetter: '',
  privacyAgreed: false,
  eligibilityConfirmed: false
})

// Validate on change with optimized performance using nextTick
async function validateOnChange(field, value) {
  form[field] = value
  
  // Set field value for validation
  setFieldValue(field, value)
  
  // Use nextTick to prevent UI blocking during validation
  nextTick(async () => {
    await validateField(field)
  })
}

// File upload handlers
function triggerFileInput() {
  if (fileInput.value) {
    fileInput.value.click()
  }
}

function handleFileUpload(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    const file = input.files[0]
    form.resume = file
    // Validate in the background
    nextTick(async () => {
      setFieldValue('resume', file)
      await validateField('resume')
    })
  }
}

function removeFile() {
  form.resume = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
  // Validate in the background
  nextTick(async () => {
    await validateField('resume', undefined)
  })
}

// Reset form fields
function resetFormFields() {
  form.firstName = ''
  form.lastName = ''
  form.email = ''
  form.phone = ''
  form.resume = null
  form.coverLetter = ''
  form.privacyAgreed = false
  form.eligibilityConfirmed = false
  isSuccess.value = false
  showErrorAlert.value = false
  resetForm()
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
      formErrorMessage.value = t('jobs.form.errors.formErrors')
      return
    }
    
    // Create FormData for file upload
    const formData = new FormData()
    formData.append('jobId', props.jobId)
    if (props.jobTitle) formData.append('jobTitle', props.jobTitle)
    
    // Add all form fields to FormData
    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (key === 'resume' && value instanceof File) {
          formData.append(key, value, value.name)
        } else {
          formData.append(key, String(value))
        }
      }
    })
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Mock response data for simulation
    const mockResponseData = {
      id: Math.random().toString(36).substring(2),
      status: 'submitted',
      submittedAt: new Date().toISOString(),
      ...Object.fromEntries(
        Object.entries(values).map(([key, value]) => {
          if (key === 'resume' && value instanceof File) {
            return [key, value.name]
          }
          return [key, value]
        })
      )
    }
    
    // Show success message
    isSuccess.value = true
    
    // Emit success event
    emit('success', mockResponseData)
    
    // Reset form after a delay
    setTimeout(() => {
      resetFormFields()
    }, 2000)
    
  } catch (error) {
    console.error('Error submitting application:', error)
    showErrorAlert.value = true
    formErrorMessage.value = t('jobs.form.errors.submissionError')
    emit('error', formErrorMessage.value)
  } finally {
    isSubmitting.value = false
  }
})

// Expose methods to parent components
defineExpose({
  resetFormFields
})
</script>

<style scoped>
/* Optimized focus and hover styles */
:deep(.input:focus),
:deep(.select:focus) {
  transition-delay: 0s;
  transition-duration: 0.1s;
}

/* Remove transition delays to make inputs feel more responsive */
:deep(.input),
:deep(.select),
:deep(.textarea) {
  transition-delay: 0s;
  transition-duration: 0.15s;
}
</style> 