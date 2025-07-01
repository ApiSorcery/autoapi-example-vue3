import { computed, reactive } from 'vue'
import type { CommonForm, FormField } from '#/castor-antd'
import { message } from 'ant-design-vue'

export default function useCommonForm({ optionsMap }) {
  const fields = computed<Array<FormField>>(() => {
    return [
      {
        type: 'groupTitle',
        label: '',
        dataField: '',
        columnSpan: 2,
        extendProps: {
          groupTitle: '1、基本信息',
          groupCommands: [
            {
              text: '取消关注',
              command: 'handleUnStar',
              visibleValidator: ({ operateType }) => operateType !== 'view'
            },
            {
              text: '关注',
              command: 'handleStar',
              visibleValidator: ({ operateType }) => operateType !== 'view'
            }
          ]
        }
      },
      {
        type: 'text',
        label: '编号',
        dataField: 'code',
        columnSpan: 1
      },
      {
        type: 'default',
        label: '姓名',
        dataField: 'name',
        columnSpan: 1,
        rules: [{ required: true, message: '不能为空' }]
      },
      {
        type: 'select',
        label: '用户性别',
        dataField: 'sex',
        columnSpan: 1,
        rules: [{ required: true, trigger: 'change', message: '不能为空' }],
        visibleValidator: ({ operateType }) => operateType !== 'add',
        elementProps: {
          options: optionsMap['sex'],
          allowClear: true
        }
      },
      {
        type: 'date',
        label: '年份',
        dataField: 'userYear',
        columnSpan: 1,
        elementProps: {
          picker: 'year',
          valueFormat: 'YYYY'
        }
      },
      {
        type: 'date',
        label: '月份',
        dataField: 'userMonth',
        columnSpan: 1,
        elementProps: {
          picker: 'month',
          valueFormat: 'YYYY-MM'
        }
      },
      {
        type: 'date',
        label: '日期',
        dataField: 'userDate',
        columnSpan: 1,
        elementProps: {
          picker: 'date',
          valueFormat: 'YYYY-MM-DD'
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
          groupTitle: '2、其它信息'
        }
      },
      {
        type: 'checkboxGroup',
        label: '主打产品',
        dataField: 'equipment',
        columnSpan: 1,
        elementProps: {
          options: optionsMap['equipment']
        }
      },
      {
        type: 'radioGroup',
        label: '用户性别',
        dataField: 'sex',
        columnSpan: 1,
        elementProps: {
          options: optionsMap['sex']
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

  const handleStar = () => {
    console.log('handleStar', form.model)
  }

  const handleUnStar = () => {
    console.log('handleUnStar', form.model)
  }

  const handleSave = async ({ command }) => {
    console.log('handleSave', form.model, form.emitRegister)
    command.loading = true
    try {
      await form.emitRegister?.validate?.()
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
      code: '',
      name: '',
      sex: null,
      userYear: '',
      userMonth: '',
      userDate: '',
      address: '',
      equipment: [],
      status: 3
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
        visibleValidator: ({ operateType }) => operateType !== 'view',
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
      handleStar,
      handleUnStar,
      handleSave,
      handleCancel
    }
  })

  return form
}
