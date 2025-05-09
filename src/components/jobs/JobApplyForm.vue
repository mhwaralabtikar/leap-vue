<template>
  <div class="job-application-form rounded-xl bg-card p-6 border border-border/50 shadow-sm">
    <!-- @ts-ignore -->
    <Form @submit="onSubmit">
      <div class="space-y-6">
        <!-- Form Title -->
        <div class="text-center mb-8">
          <h3 class="text-xl font-semibold mb-2">{{ $t('jobs.form.title') || 'Apply for this position' }}</h3>
          <p class="text-muted-foreground text-sm">{{ $t('jobs.form.subtitle') || 'Fill out the form below to apply' }}</p>
        </div>

        <!-- Form Sections -->
        <div class="space-y-8">
          <!-- Personal Information Section -->
          <div class="space-y-4">
            <h4 class="font-medium text-md border-b border-border/30 pb-2">{{ $t('jobs.form.personalInfo') || 'Personal Information' }}</h4>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- First Name Field -->
              <FormField name="firstName">
                <FormItem>
                  <FormLabel>{{ $t('jobs.form.firstName') || 'First Name' }} <span class="text-primary">*</span></FormLabel>
                  <div class="relative">
                    <FormControl>
                      <Input 
                        :model-value="form.firstName"
                        @update:model-value="updateFormValue('firstName', $event)" 
                        :placeholder="$t('jobs.form.firstName') || 'First Name'"
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
              <FormField name="lastName">
                <FormItem>
                  <FormLabel>{{ $t('jobs.form.lastName') || 'Last Name' }} <span class="text-primary">*</span></FormLabel>
                  <div class="relative">
                    <FormControl>
                      <Input 
                        :model-value="form.lastName"
                        @update:model-value="updateFormValue('lastName', $event)" 
                        :placeholder="$t('jobs.form.lastName') || 'Last Name'"
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
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Email Field -->
              <FormField name="email">
                <FormItem>
                  <FormLabel>{{ $t('jobs.form.email') || 'Email' }} <span class="text-primary">*</span></FormLabel>
                  <div class="relative">
                    <FormControl>
                      <Input 
                        type="email"
                        :model-value="form.email"
                        @update:model-value="updateFormValue('email', $event)" 
                        :placeholder="$t('jobs.form.emailPlaceholder') || 'your@email.com'"
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
              <FormField name="phone">
                <FormItem>
                  <FormLabel>{{ $t('jobs.form.phone') || 'Phone' }} <span class="text-primary">*</span></FormLabel>
                  <div class="relative">
                    <FormControl>
                      <Input 
                        type="tel"
                        :model-value="form.phone"
                        @update:model-value="updateFormValue('phone', $event)" 
                        :placeholder="$t('jobs.form.phonePlaceholder') || '+1 (123) 456-7890'"
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
            </div>
          </div>
          
          <!-- Address Section (Optional) -->
          <div class="space-y-4" v-if="showAddressFields">
            <h4 class="font-medium text-md border-b border-border/30 pb-2">{{ $t('jobs.form.address') || 'Address' }}</h4>
            
            <div class="grid grid-cols-1 gap-4">
              <!-- Address Line -->
              <FormField name="address">
                <FormItem>
                  <FormLabel>{{ $t('jobs.form.addressLine') || 'Address' }}</FormLabel>
                  <FormControl>
                    <Input 
                      :model-value="form.address"
                      @update:model-value="updateFormValue('address', $event)" 
                      :placeholder="$t('jobs.form.addressPlaceholder') || 'Street address'"
                      :disabled="isSubmitting"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <!-- City -->
              <FormField name="city">
                <FormItem>
                  <FormLabel>{{ $t('jobs.form.city') || 'City' }}</FormLabel>
                  <FormControl>
                    <Input 
                      :model-value="form.city"
                      @update:model-value="updateFormValue('city', $event)" 
                      :placeholder="$t('jobs.form.cityPlaceholder') || 'City'"
                      :disabled="isSubmitting"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              
              <!-- State/Province -->
              <FormField name="state">
                <FormItem>
                  <FormLabel>{{ $t('jobs.form.state') || 'State/Province' }}</FormLabel>
                  <FormControl>
                    <Input 
                      :model-value="form.state"
                      @update:model-value="updateFormValue('state', $event)" 
                      :placeholder="$t('jobs.form.statePlaceholder') || 'State/Province'"
                      :disabled="isSubmitting"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              
              <!-- ZIP/Postal Code -->
              <FormField name="postalCode">
                <FormItem>
                  <FormLabel>{{ $t('jobs.form.postalCode') || 'ZIP/Postal Code' }}</FormLabel>
                  <FormControl>
                    <Input 
                      :model-value="form.postalCode"
                      @update:model-value="updateFormValue('postalCode', $event)" 
                      :placeholder="$t('jobs.form.postalCodePlaceholder') || 'ZIP/Postal Code'"
                      :disabled="isSubmitting"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            
            <!-- Country -->
            <FormField name="country">
              <FormItem>
                <FormLabel>{{ $t('jobs.form.country') || 'Country' }}</FormLabel>
                <FormControl>
                  <Select 
                    :model-value="form.country"
                    @update:model-value="updateFormValue('country', $event)"
                    :disabled="isSubmitting"
                  >
                    <SelectTrigger>
                      <SelectValue :placeholder="$t('jobs.form.countryPlaceholder') || 'Select country'" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem v-for="country in countries" :key="country" :value="country">
                        {{ country }}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          
          <!-- Toggle Address Fields -->
          <div>
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              @click="showAddressFields = !showAddressFields"
              class="text-xs"
              :disabled="isSubmitting"
            >
              <MapPinIcon class="h-3 w-3 mr-1" />
              {{ showAddressFields ? ($t('jobs.form.hideAddress') || 'Hide Address Fields') : ($t('jobs.form.showAddress') || 'Add Address Information') }}
            </Button>
          </div>
          
          <!-- Application Details Section -->
          <div class="space-y-4">
            <h4 class="font-medium text-md border-b border-border/30 pb-2">{{ $t('jobs.form.applicationDetails') || 'Application Details' }}</h4>
            
            <!-- Resume Upload -->
            <FormField name="resume">
              <FormItem>
                <FormLabel>{{ $t('jobs.form.resume') || 'Resume/CV' }} <span class="text-primary">*</span></FormLabel>
                <div class="flex flex-col space-y-2">
                  <div v-if="!form.resume" class="border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:border-primary/50 transition-colors" @click="triggerFileInput">
                    <UploadCloudIcon class="h-6 w-6 mx-auto text-muted-foreground" />
                    <p class="text-sm text-muted-foreground mt-2">{{ $t('jobs.form.resumePrompt') || 'Click to upload your resume (PDF or DOCX)' }}</p>
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
            
            <!-- Cover Letter -->
            <FormField name="coverLetter">
              <FormItem>
                <FormLabel>{{ $t('jobs.form.coverLetter') || 'Cover Letter' }}</FormLabel>
                <FormControl>
                  <Textarea 
                    :model-value="form.coverLetter"
                    @update:model-value="updateFormValue('coverLetter', $event)"
                    :placeholder="$t('jobs.form.coverLetterPlaceholder') || 'Tell us why you are a good fit for this position...'"
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
            
            <!-- Employment Eligibility -->
            <FormField name="eligibilityConfirmed">
              <FormItem class="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    :checked="form.eligibilityConfirmed"
                    @update:checked="updateFormValue('eligibilityConfirmed', $event)"
                    :disabled="isSubmitting"
                  />
                </FormControl>
                <FormLabel class="text-sm cursor-pointer">
                  {{ $t('jobs.form.eligibility') || 'I confirm I am legally eligible to work in this country' }}
                </FormLabel>
                <FormMessage />
              </FormItem>
            </FormField>
            
            <!-- Privacy Policy Consent -->
            <FormField name="privacyPolicy">
              <FormItem class="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    :checked="form.privacyPolicy"
                    @update:checked="updateFormValue('privacyPolicy', $event)"
                    :disabled="isSubmitting"
                    :class="{ 'border-destructive': errors.privacyPolicy }"
                  />
                </FormControl>
                <FormLabel class="text-sm cursor-pointer">
                  {{ $t('jobs.form.privacyConsent') || 'I agree to the processing of my personal data according to the Privacy Policy' }} <span class="text-primary">*</span>
                </FormLabel>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
        </div>
        
        <!-- Submit Button -->
        <div class="mt-8">
          <Button
            type="submit"
            class="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg shadow transition-colors duration-300 flex items-center justify-center"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting" class="flex items-center justify-center">
              <LoaderIcon class="animate-spin mr-2 h-5 w-5" />
              {{ $t('jobs.form.submitting') }}
            </span>
            <span v-else class="flex items-center justify-center">
              <SendIcon class="mr-2 h-5 w-5" />
              {{ $t('jobs.form.submit') }}
            </span>
          </Button>
        </div>
        
        <!-- Success Message -->
        <div v-if="isSuccess" class="mt-6 rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-green-700 dark:text-green-300">
          <div class="flex items-center">
            <CheckCircleIcon class="h-5 w-5 mr-2" />
            <p>{{ $t('jobs.form.successMessage') || 'Your application has been submitted successfully! We will contact you soon.' }}</p>
          </div>
        </div>
        
        <!-- Error Message -->
        <div v-if="showErrorAlert" class="mt-6 rounded-lg bg-destructive/10 border border-destructive/20 p-4 text-destructive">
          <div class="flex items-center">
            <AlertCircleIcon class="h-5 w-5 mr-2" />
            <p>{{ formErrorMessage }}</p>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { 
  CheckIcon, 
  XCircleIcon, 
  LoaderIcon, 
  SendIcon, 
  CheckCircleIcon, 
  AlertCircleIcon,
  UploadCloudIcon,
  FileIcon,
  XIcon,
  MapPinIcon
} from 'lucide-vue-next'

const props = defineProps<{
  jobId: string
  jobTitle?: string
}>()

const emit = defineEmits<{
  (e: 'success', data: any): void
  (e: 'error', message: string): void
}>()

const { t } = useI18n()
const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')
const fileInput = ref<HTMLInputElement | null>(null)
const showAddressFields = ref(false)

// Countries list (simplified for example, could be expanded)
const countries = [
  'United States',
  'Canada',
  'United Kingdom',
  'Saudi Arabia',
  'United Arab Emirates',
  'Other'
]

// Define validation schema with Zod
const validationSchema = toTypedSchema(
  z.object({
    firstName: z.string().min(2, t('jobs.form.errors.firstNameRequired') || 'First name is required'),
    lastName: z.string().min(2, t('jobs.form.errors.lastNameRequired') || 'Last name is required'),
    email: z.string().email(t('jobs.form.errors.validEmail') || 'Please enter a valid email'),
    phone: z.string().min(5, t('jobs.form.errors.validPhone') || 'Please enter a valid phone number'),
    address: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    country: z.string().optional(),
    resume: z.instanceof(File, { message: t('jobs.form.errors.resumeRequired') || 'Resume is required' }),
    coverLetter: z.string().optional(),
    eligibilityConfirmed: z.boolean().optional(),
    privacyPolicy: z.boolean().refine(val => val === true, {
      message: t('jobs.form.errors.privacyRequired') || 'You must agree to the privacy policy'
    })
  })
)

// Initialize form with vee-validate
const { errors, values, validate, validateField, handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    resume: undefined,
    coverLetter: '',
    eligibilityConfirmed: false,
    privacyPolicy: false
  }
})

// Create a reactive form object that will be used for real-time updates
// This helps address the input delay issue
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  resume: null as File | null,
  coverLetter: '',
  eligibilityConfirmed: false,
  privacyPolicy: false
})

// UI states for form feedback
const showErrorAlert = ref(false)
const formErrorMessage = ref('')
const formState = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const selectedFileName = ref('')
const fileInputRef = ref<HTMLInputElement | null>(null)

// Helper function to generate a random ID for the application
function generateRandomId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// Scroll to top of the form
function scrollToTop() {
  window.scrollTo({ top: window.scrollY - 300, behavior: 'smooth' })
}

// Update form values and validate
async function updateFormValue(field: string, value: any) {
  // Update local form state immediately (no delay)
  // @ts-ignore
  form[field] = value
  
  // Use nextTick to prevent UI blocking during validation
  nextTick(async () => {
    // Validate the field in the background without blocking UI
    // @ts-ignore
    await validateField(field, value)
  })
}

// File upload handler
function handleFileUpload(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    const file = input.files[0]
    form.resume = file
    // Validate in the background
    nextTick(async () => {
      // @ts-ignore
      await validateField('resume', {})
    })
  }
}

// Trigger file input click
function triggerFileInput() {
  if (fileInput.value) {
    fileInput.value.click()
  }
}

// Remove selected file
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

// Function to reset the form
function resetForm(options: { values: Record<string, any> }) {
  // Reset form state
  Object.keys(form).forEach(key => {
    if (key in options.values) {
      // @ts-ignore
      form[key] = options.values[key]
    }
  })
  
  // Reset validation state
  validate()
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
      formErrorMessage.value = t('jobs.form.errors.formErrors') || 'Please check the form for errors'
      scrollToTop()
      return
    }
    
    // Create FormData for file upload
    const formData = new FormData()
    formData.append('jobId', props.jobId)
    formData.append('jobTitle', props.jobTitle || '')
    
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
    
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Generate mock response ID
    const applicationId = generateRandomId()
    
    // Reset form 
    resetForm({
      values: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
        linkedinProfile: '',
        portfolioUrl: '',
        currentCompany: '',
        currentPosition: '',
        yearsOfExperience: '',
        highestEducation: '',
        expectedSalary: '',
        noticePeriod: '',
        referralSource: '',
        heardFrom: [],
        eligibilityStatus: false,
        relocate: false,
        consentToPolicy: false
      }
    })
    
    if (fileInputRef.value) {
      fileInputRef.value.value = ''
    }
    selectedFileName.value = ''
    
    // Show success UI
    formState.value = 'success'
    
    // Create mock application data
    const applicationData = {
      id: applicationId,
      jobId: props.jobId,
      jobTitle: props.jobTitle,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      submittedAt: new Date().toISOString(),
      status: 'submitted'
    }
    
    // Emit success event with application ID
    emit('success', applicationData)
    
    scrollToTop()
    
  } catch (error) {
    console.error('Error submitting application:', error)
    showErrorAlert.value = true
    formErrorMessage.value = t('jobs.form.errors.submissionError') || 'An error occurred. Please try again'
    scrollToTop()
    emit('error', error instanceof Error ? error.message : 'An error occurred')
  } finally {
    isSubmitting.value = false
  }
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