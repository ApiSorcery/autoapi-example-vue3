import { nextTick } from 'vue'

/**
 * 重置表单（清空校验结果、重置字段值）
 * @param form 表单对象
 * @param callback 回调事件
 */
export const resetForm = ({ form, callback }) => {
  ;(form.emitRegister as any).clearValidate()
  ;(form.emitRegister as any).resetFields()
  if (callback) {
    callback()
  }
}

/**
 * 更新表单绑定对象值
 * 【注：部分更新，只更新两者都拥有的字段】
 * @param model 表单绑定对象
 * @param data 新设定的数据对象
 */
export const setFormValue = (model, data) => {
  console.log('setFormValue', model, data)
  nextTick(() => {
    Object.keys(model).forEach((field) => {
      if (Object.hasOwn(data, field)) {
        model[field] = data[field]
      }
    })
  })
}
