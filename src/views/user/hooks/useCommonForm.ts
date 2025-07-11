import { computed, reactive } from 'vue'
import { message } from 'ant-design-vue'
import type { UploadChangeParam } from 'ant-design-vue'
import type { CommonForm, FormField, CommonCommand } from '#/castor-antd'
import * as apiUser from '@/apis/auto/demo/ApiUser'

export default function useCommonForm({ optionsMap }: { optionsMap: Record<string, any> }) {
  const fields = computed<Array<FormField>>(() => {
    return [
      {
        type: 'default',
        label: '编号',
        dataField: 'code',
        columnSpan: 1,
        disableValidator: ({ operateType }) => operateType !== 'add',
      },
      {
        type: 'default',
        label: '姓名',
        dataField: 'name',
        columnSpan: 1,
        rules: [{ required: true, message: '不能为空' }],
      },
      {
        type: 'default',
        label: '邮箱',
        dataField: 'email',
        columnSpan: 1,
      },
      {
        type: 'radioGroup',
        label: '性别',
        dataField: 'gender',
        columnSpan: 1,
        elementProps: {
          options: optionsMap['gender'],
        },
      },
      {
        type: 'textArea',
        label: '地址',
        dataField: 'address',
        columnSpan: 2,
      },
      {
        type: 'image',
        label: '头像',
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
        label: '是否启用',
        dataField: 'status',
        columnSpan: 1,
      },
    ]
  })

  const handleSave = async ({ command }: { command: CommonCommand }) => {
    console.log('handleSave', form.model, form.emitRegister)
    command.loading = true
    try {
      await form.emitRegister?.validate?.()
      if (form.model.id) {
        await apiUser.modifyUser(form.model)
      } else {
        await apiUser.addUser(form.model)
      }
      await message.success('保存成功', 1)
      form.visible = false
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
    // 文件上传上限设置
    const size: number = Number((file.size / 1024 / 1024).toFixed(2))
    if (size > 10) {
      message.warning('文件大小超过上限(10MB)，请重新选择！')
      return false
    } else {
      return true
    }
  }

  const form = reactive<CommonForm>({
    loading: false,
    visible: true,
    title: '新建用户',
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
        text: '取消',
        command: 'handleCancel',
      },
      {
        text: '确定',
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
