<template>
  <Dialog :open="isOpen" @update:open="updateOpen">
    <DialogContent class="sm:max-w-5xl max-h-[90vh] overflow-y-auto rtl:text-right">
      <DialogHeader>
        <DialogTitle>{{ $t('contact.title') || 'Contact Us' }}</DialogTitle>
        <DialogDescription>
          {{ description || $t('contact.modalDescription') || 'Have questions or need assistance? Send us a message and we\'ll get back to you soon.' }}
        </DialogDescription>
      </DialogHeader>
      <div class="py-4">
        <ContactForm @success="handleSuccess" />
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import ContactForm from '@/components/ContactForm.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Props
const props = defineProps<{
  isOpen: boolean,
  description?: string
}>()

// Emits
const emits = defineEmits(['update:isOpen', 'success'])

// Methods
function updateOpen(value: boolean) {
  emits('update:isOpen', value)
}

function handleSuccess() {
  emits('success')
  // Close modal after success
  setTimeout(() => {
    emits('update:isOpen', false)
  }, 3000)
}
</script> 