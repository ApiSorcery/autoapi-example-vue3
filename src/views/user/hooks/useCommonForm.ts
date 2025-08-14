import { computed, reactive } from 'vue'
import { message } from 'ant-design-vue'
import type { UploadChangeParam } from 'ant-design-vue'
import type { FormField, CommonForm, CommonCommand } from '@castor-ui/castor-antdv'
import * as apiUser from '@/apis/auto/demo/ApiUser'

export default function useCommonForm({ optionsMap }: { optionsMap: Record<string, any> }) {
  const fields = computed<Array<FormField>>(() => {
    return [
      {
        type: 'default',
        label: 'Code',
        dataField: 'code',
        columnSpan: 1,
        rules: [
          { required: true, message: 'Cannot be empty', trigger: 'blur' },
          {
            validator: async (rule, value) => {
              console.log('Code validation:', value)
              if (!value) return Promise.resolve()
              if (form.operateType !== 'add') return Promise.resolve()
              try {
                const codeExists = await apiUser.validateCode({ code: value })
                if (codeExists) {
                  return Promise.reject(new Error('Code already exists'))
                }
                return Promise.resolve()
              } catch (error) {
                console.error('Code validation error:', error)
                return Promise.reject(new Error('Code validation failed, please try again'))
              }
            },
            trigger: 'blur',
          },
        ],
        disableValidator: ({ operateType }) => operateType !== 'add',
      },
      {
        type: 'default',
        label: 'Name',
        dataField: 'name',
        columnSpan: 1,
        rules: [{ required: true, message: 'Cannot be empty' }],
      },
      {
        type: 'default',
        label: 'Email',
        dataField: 'email',
        columnSpan: 1,
        rules: [{ required: true, message: 'Cannot be empty' }],
      },
      {
        type: 'radioGroup',
        label: 'Gender',
        dataField: 'gender',
        columnSpan: 1,
        elementProps: {
          options: optionsMap['gender'],
        },
      },
      {
        type: 'textArea',
        label: 'Address',
        dataField: 'address',
        columnSpan: 2,
      },
      {
        type: 'image',
        label: 'Avatar',
        dataField: 'avatar',
        columnSpan: 1,
        elementProps: {
          action: `${import.meta.env.VITE_GLOB_BASE_API}/file/upload`,
          beforeUpload: handleBeforeUpload,
          onChange: handleUpload,
          imageOptions: {
            width: '100px',
            height: '100px',
            style: {
              border: '1px solid #ccc',
            },
          },
        },
      },
      {
        type: 'switch',
        label: 'Enabled',
        dataField: 'status',
        columnSpan: 1,
      },
    ]
  })

  const handleSave = async ({ command }: { command: CommonCommand }) => {
    console.log('handleSave', form.model, form.emitRegister)
    try {
      await form.emitRegister?.validate?.()
      command.loading = true
      if (form.model.id) {
        await apiUser.modifyUser(form.model)
      } else {
        await apiUser.addUser(form.model)
      }
      await message.success('Saved successfully', 1)
      form.visible = false
    } catch (error) {
      console.error('Error saving form:', error)
      command.loading = false
    } finally {
      command.loading = false
    }
  }

  const handleCancel = () => {
    console.log('handleCancel')
    form.visible = false
  }

  const handleUpload = (param: UploadChangeParam) => {
    console.log('handleUpload', param)
    if (param.file.response?.status === 0) {
      form.model.avatar = `${import.meta.env.VITE_GLOB_BASE_API}/file/${param.file.response.data}`
    }
  }

  const handleBeforeUpload = (file: File) => {
    console.log('handleBeforeUpload', file)
    // File upload size limit setting
    const size: number = Number((file.size / 1024 / 1024).toFixed(2))
    if (size > 10) {
      message.warning('File size exceeds limit (10MB), please select again!')
      return false
    } else {
      return true
    }
  }

  const form = reactive<CommonForm>({
    loading: false,
    visible: false,
    title: 'Create User',
    operateType: 'add',
    model: {
      id: undefined,
      code: '',
      name: '',
      email: '',
      gender: null,
      avatar: '',
      address: '',
      status: false,
    },
    fields,
    commands: [
      {
        text: 'Cancel',
        command: 'handleCancel',
      },
      {
        text: 'OK',
        command: 'handleSave',
        loading: false,
        visibleValidator: ({ operateType }: { operateType: string }) => operateType !== 'view',
        elementProps: {
          type: 'primary',
        },
      },
    ],
    elementProps: {
      labelCol: { style: { width: '80px' } },
      wrapperCol: { style: { flex: 1 } },
    },
    emitRegister: {
      handleSave,
      handleCancel,
    },
  })

  return form
}
