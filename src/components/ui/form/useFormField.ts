import { FieldContextKey, useFieldError, useIsFieldDirty, useIsFieldTouched, useIsFieldValid } from 'vee-validate'
import { inject } from 'vue'
import { FORM_ITEM_INJECTION_KEY } from './injectionKeys'

export function useFormField() {
  const fieldContext = inject(FieldContextKey, null)
  const fieldItemContext = inject(FORM_ITEM_INJECTION_KEY, null)

  // If not in a form context, return reasonable defaults instead of throwing
  if (!fieldContext || !fieldItemContext) {
    console.warn('useFormField should be used within <FormField> and <FormItem>')
    
    return {
      id: 'default-id',
      name: 'default-name',
      formItemId: 'default-form-item',
      formDescriptionId: 'default-form-description',
      formMessageId: 'default-form-message',
      error: null,
      valid: true,
      isDirty: false,
      isTouched: false
    }
  }

  const { name } = fieldContext
  const id = fieldItemContext

  const fieldState = {
    valid: useIsFieldValid(name),
    isDirty: useIsFieldDirty(name),
    isTouched: useIsFieldTouched(name),
    error: useFieldError(name),
  }

  return {
    id,
    name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}
