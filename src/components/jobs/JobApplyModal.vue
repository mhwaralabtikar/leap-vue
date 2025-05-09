<template>
  <Dialog :open="isOpen" @update:open="updateOpen">
    <DialogContent class="sm:max-w-[500px] rtl:text-right">
      <DialogHeader>
        <DialogTitle>{{ $t('jobs.quickApply.title') }}</DialogTitle>
        <DialogDescription>
          {{ jobTitle ? `${$t('jobs.quickApply.applyFor')} ${jobTitle}` : $t('jobs.quickApply.description') }}
        </DialogDescription>
      </DialogHeader>
      
      <div class="py-4">
        <JobApplicationForm
          :job-id="jobId"
          :job-title="jobTitle"
          :compact="true"
          @success="handleSuccess"
          @error="handleError"
          ref="applicationForm"
        >
          <!-- Custom Buttons in Slot -->
          <template #buttons>
            <div class="flex justify-end gap-3 rtl:flex-row-reverse">
              <Button 
                type="button" 
                variant="outline" 
                @click="closeModal"
                :disabled="isSubmitting"
              >
                {{ $t('common.cancel') }}
              </Button>
              <Button
                type="submit"
                :disabled="isSubmitting"
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
            </div>
          </template>
        </JobApplicationForm>
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { LoaderIcon, SendIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import JobApplicationForm from '@/components/jobs/JobApplicationForm.vue'

// Define props and emits
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  jobId: {
    type: String,
    default: ''
  },
  jobTitle: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['update:isOpen', 'success'])

// Composables
const { t } = useI18n()

// State
const isSubmitting = ref(false)
const applicationForm = ref<InstanceType<typeof JobApplicationForm> | null>(null)

// Handle form success
function handleSuccess(data) {
  isSubmitting.value = false
  emits('success', data)
  
  // Close modal after delay
  setTimeout(() => {
    closeModal()
  }, 2000)
}

// Handle form error
function handleError(message) {
  isSubmitting.value = false
  console.error('Application submission error:', message)
}

// Modal control functions
function updateOpen(value: boolean) {
  emits('update:isOpen', value)
  if (!value && applicationForm.value) {
    applicationForm.value.resetFormFields()
  }
}

function closeModal() {
  emits('update:isOpen', false)
}
</script> 