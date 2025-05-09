<script setup lang="ts">
import { FormLabel } from '@/components/ui/form'
import { FieldContextKey } from 'vee-validate'
import { inject, computed } from 'vue'
import { FORM_ITEM_INJECTION_KEY } from '@/components/ui/form/injectionKeys'

defineProps<{
  required?: boolean
}>()

// Check if we're in a FormField context
const fieldContext = inject(FieldContextKey, null)
const formItemContext = inject(FORM_ITEM_INJECTION_KEY, null)
const isInFormContext = computed(() => !!fieldContext && !!formItemContext)
</script>

<template>
  <FormLabel v-if="isInFormContext">
    <slot />
    <span v-if="required" class="text-destructive"> *</span>
  </FormLabel>
  <label v-else class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    <slot />
    <span v-if="required" class="text-destructive"> *</span>
  </label>
</template>
