<script lang="ts" setup>
import type { LabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
import { FieldContextKey } from 'vee-validate'
import { inject, ref } from 'vue'
import { FORM_ITEM_INJECTION_KEY } from './injectionKeys'
import { useFieldError } from 'vee-validate'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'], htmlFor?: string }>()

// Attempt to get form field context, but don't throw if not available
const fieldContext = inject(FieldContextKey, null)
const fieldItemContext = inject(FORM_ITEM_INJECTION_KEY, null)

// Only try to access error and formItemId if contexts are available
let error = ref('')
let formItemId = props.htmlFor || undefined

if (fieldContext && fieldItemContext) {
  const { name } = fieldContext
  const id = fieldItemContext
  
  error = useFieldError(name)
  formItemId = `${id}-form-item`
}
</script>

<template>
  <Label
    data-slot="form-label"
    :data-error="!!error"
    :class="cn(
      'data-[error=true]:text-destructive-foreground',
      props.class,
    )"
    :for="formItemId"
  >
    <slot />
  </Label>
</template>
