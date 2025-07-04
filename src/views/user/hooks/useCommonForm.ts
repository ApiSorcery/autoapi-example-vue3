import { computed, reactive } from 'vue'
import type { CommonForm, FormField, CommonCommand } from '#/castor-antd'
import { message } from 'ant-design-vue'
import * as apiUser from '@/apis/auto/demo/ApiUser'

export default function useCommonForm({ optionsMap }: { optionsMap: Record<string, any> }) {
  const fields = computed<Array<FormField>>(() => {
    return [
      {
        type: 'groupTitle',
        label: '',
        dataField: '',
        columnSpan: 2,
        extendProps: {
          groupTitle: '1、基本信息',
        }
      },
      {
        type: 'default',
        label: '编号',
        dataField: 'code',
        columnSpan: 1,
        disableValidator: ({ operateType }) => operateType !== 'add'
      },
      {
        type: 'default',
        label: '姓名',
        dataField: 'name',
        columnSpan: 1,
        rules: [{ required: true, message: '不能为空' }]
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
          options: optionsMap['gender']
        }
      },
      {
        type: 'textArea',
        label: '地址',
        dataField: 'address',
        columnSpan: 2
      },
      {
        type: 'groupTitle',
        label: '',
        dataField: '',
        columnSpan: 2,
        extendProps: {
          groupTitle: '2、用户头像',
        }
      },
      {
        type: 'status',
        label: '',
        dataField: 'status',
        columnSpan: 1,
        extendProps: {
          showInFooter: true,
          statusOptions: optionsMap['status'],
          formItemStyle: {
            marginBottom: 0,
            width: '80px'
          }
        }
      }
    ]
  })

  const handleSave = async ({ command }: { command: CommonCommand }) => {
    console.log('handleSave', form.model, form.emitRegister)
    command.loading = true
    try {
      await form.emitRegister?.validate?.()
      if (form.model.id) {
        await apiUser.modifyUser(form.model);
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

  const form = reactive<CommonForm>({
    loading: false,
    visible: false,
    title: '表单示例',
    operateType: 'add',
    model: {
      id: undefined,
      code: '',
      name: '',
      email: '',
      gender: null,
      avatar: '',
      address: ''
    },
    fields,
    commands: [
      {
        text: '取消',
        command: 'handleCancel'
      },
      {
        text: '确定',
        command: 'handleSave',
        loading: false,
        visibleValidator: ({ operateType }: { operateType: string }) => operateType !== 'view',
        elementProps: {
          type: 'primary'
        }
      }
    ],
    elementProps: {
      labelCol: { style: { width: '80px' } },
      wrapperCol: { style: { flex: 1 } }
    },
    emitRegister: {
      handleSave,
      handleCancel
    }
  })

  return form
}
