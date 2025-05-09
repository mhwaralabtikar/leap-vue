<template>
  <div>
    <Form @submit="onSubmit" class="space-y-4">
      <!-- Error Alert -->
      <div 
        v-if="showErrorAlert" 
        class="bg-destructive/10 border border-destructive/30 text-destructive dark:text-destructive/90 rounded-lg p-3 mb-3 flex items-start text-sm"
      >
        <AlertCircleIcon class="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
        <span>{{ formErrorMessage || 'Please check the form for errors and try again.' }}</span>
      </div>

      <!-- Name Field -->
      <FormField name="name" v-slot="{ field }">
        <FormItem>
          <FormLabel>{{ $t('contact.name') || 'Name' }} <span class="text-primary">*</span></FormLabel>
          <FormControl>
            <Input 
              :id="field.name"
              :name="field.name"
              :value="form.name"
              @input="(e) => validateOnChange('name', e.target.value)"
              :placeholder="$t('contact.namePlaceholder') || 'Your name'"
              :class="{ 
                'border-destructive focus:ring-destructive/40': errors.name
              }"
              :disabled="isSubmitting"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Email Field -->
      <FormField name="email" v-slot="{ field }">
        <FormItem>
          <FormLabel>{{ $t('contact.email') || 'Email' }} <span class="text-primary">*</span></FormLabel>
          <FormControl>
            <Input 
              :id="field.name"
              :name="field.name"
              :value="form.email"
              @input="(e) => validateOnChange('email', e.target.value)"
              type="email"
              :placeholder="$t('contact.emailPlaceholder') || 'Your email'"
              :class="{ 
                'border-destructive focus:ring-destructive/40': errors.email
              }"
              :disabled="isSubmitting"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Message Field -->
      <FormField name="message" v-slot="{ field }">
        <FormItem>
          <FormLabel>{{ $t('contact.message') || 'Message' }} <span class="text-primary">*</span></FormLabel>
          <FormControl>
            <Textarea
              :id="field.name"
              :name="field.name"
              :value="form.message"
              @input="(e) => validateOnChange('message', e.target.value)"
              :placeholder="$t('contact.messagePlaceholder') || 'How can we help?'"
              rows="3"
              :class="{ 
                'border-destructive focus:ring-destructive/40': errors.message
              }"
              :disabled="isSubmitting"
            />
          </FormControl>
          <div v-if="form.message" class="text-xs text-muted-foreground text-right mt-1">
            {{ form.message.length }}/300
          </div>
          <FormMessage />
        </FormItem>
      </FormField>
      
      <!-- Privacy Policy Agreement -->
      <FormField name="privacyAgreed" v-slot="{ field }">
        <FormItem class="flex flex-row items-start space-x-3 space-y-0">
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
            <FormLabel class="text-sm" v-html="$t('contact.privacyPolicyMini') || 'I agree to the <a href=\'/legal/privacy\' class=\'text-primary hover:underline\'>Privacy Policy</a>'"></FormLabel>
            <FormMessage />
          </div>
        </FormItem>
      </FormField>

      <!-- Submit Button -->
      <div class="pt-2">
        <Button
          type="submit"
          class="w-full"
          :disabled="isSubmitting"
        >
          <span v-if="isSubmitting" class="flex items-center justify-center">
            <LoaderIcon class="animate-spin mr-2 h-4 w-4" />
            {{ $t('contact.submitting') || 'Submitting...' }}
          </span>
          <span v-else class="flex items-center justify-center">
            <SendIcon class="mr-2 h-4 w-4" />
            {{ $t('contact.submit') || 'Send Message' }}
          </span>
        </Button>
      </div>

      <!-- Success Message -->
      <div 
        v-if="isSuccess" 
        class="bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 rounded-lg p-3 flex items-center"
      >
        <div class="flex items-center">
          <CheckCircleIcon class="h-5 w-5 mr-2" />
          <p class="text-sm">{{ $t('contact.success') || 'Your message has been sent successfully!' }}</p>
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
import { 
  AlertCircleIcon, 
  LoaderIcon, 
  SendIcon, 
  CheckCircleIcon
} from 'lucide-vue-next'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

// Define props and emits
const emits = defineEmits(['success'])

// Composables
const { t } = useI18n()

// UI States
const isSubmitting = ref(false)
const isSuccess = ref(false)
const showErrorAlert = ref(false)
const formErrorMessage = ref('')

// Define validation schema with Zod
const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(2, t('contact.errors.nameRequired') || 'Name is required'),
    email: z.string().email(t('contact.errors.validEmail') || 'Please enter a valid email'),
    message: z.string().min(10, t('contact.errors.messageRequired') || 'Message must be at least 10 characters')
      .max(300, t('contact.errors.messageTooLong') || 'Message cannot exceed 300 characters'),
    privacyAgreed: z.boolean().refine(val => val === true, {
      message: t('contact.errors.privacyRequired') || 'You must agree to the privacy policy'
    })
  })
)

// Initialize form with vee-validate
const { handleSubmit, errors, validate, validateField, setFieldValue } = useForm({
  validationSchema
})

// Form state (reactive)
const form = reactive({
  name: '',
  email: '',
  message: '',
  privacyAgreed: false
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

// Form submission handler
const onSubmit = handleSubmit(async (values) => {
  try {
    isSubmitting.value = true
    showErrorAlert.value = false
    
    // Validate entire form
    const result = await validate()
    if (!result.valid) {
      showErrorAlert.value = true
      formErrorMessage.value = 'Please correct the errors in the form before submitting.'
      return
    }
    
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form after successful submission
    form.name = ''
    form.email = ''
    form.message = ''
    form.privacyAgreed = false
    
    // Show success message
    isSuccess.value = true
    
    // Emit success event
    emits('success')
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 3000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
    showErrorAlert.value = true
    formErrorMessage.value = 'An error occurred while submitting the form. Please try again.'
  } finally {
    isSubmitting.value = false
  }
})
</script> 