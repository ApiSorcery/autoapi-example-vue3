import { nextTick } from 'vue'

/**
 * Reset form (clear validation results, reset field values)
 * @param form Form object
 * @param callback Callback event
 */
export const resetForm = ({ form, callback }) => {
  ;(form.emitRegister as any).clearValidate()
  ;(form.emitRegister as any).resetFields()
  if (callback) {
    callback()
  }
}

/**
 * Update form binding object values
 * Note: Partial update, only updates fields that both objects have
 * @param model Form binding object
 * @param data New data object
 */
export const setFormValue = (model, data) => {
  console.log('setFormValue', model, data)
  nextTick(() => {
    Object.keys(model).forEach((field) => {
      if (Object.prototype.hasOwnProperty.call(data, field)) {
        model[field] = data[field]
      }
    })
  })
}
