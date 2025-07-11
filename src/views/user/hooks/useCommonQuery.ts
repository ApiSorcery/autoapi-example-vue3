import { computed, reactive } from 'vue'
import type { CommonQuery, QueryField } from '#/castor-antd'

export default function useCommonQuery({ optionsMap }: { optionsMap: Record<string, any> }) {
  const fields = computed<Array<QueryField>>(() => {
    return [
      {
        type: 'default',
        label: '编号',
        dataField: 'code',
        columnSpan: 1,
        extendProps: {
          formItemProps: {
            labelCol: { style: { width: '40px' } },
            wrapperCol: { style: { width: '200px' } },
          },
        },
      },
      {
        type: 'default',
        label: '姓名',
        dataField: 'name',
        columnSpan: 1,
        extendProps: {
          formItemProps: {
            labelCol: { style: { width: '40px' } },
            wrapperCol: { style: { width: '120px' } },
          },
        },
      },
      {
        type: 'select',
        label: '状态',
        dataField: 'status',
        columnSpan: 1,
        elementProps: {
          options: optionsMap['status'],
        },
        extendProps: {
          formItemProps: {
            labelCol: { style: { width: '40px' } },
            wrapperCol: { style: { width: '120px' } },
          },
        },
      },
    ]
  })

  const query = reactive<CommonQuery>({
    loading: false,
    model: {
      code: '',
      name: '',
    },
    fields,
    commands: [
      {
        text: '查询',
        command: 'handleFilter',
        elementProps: {
          type: 'primary',
        },
        canKeyDown: true,
      },
      {
        text: '重置',
        command: 'handleReset',
      },
    ],
    elementProps: {
      labelCol: { style: { width: '40px' } },
      wrapperCol: { style: { flex: 1 } },
    },
  })

  return query
}
