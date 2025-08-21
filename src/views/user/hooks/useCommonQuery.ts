import { computed, reactive } from 'vue'
import type { CommonQuery, QueryField } from '@castor-ui/castor-antdv'

export default function useCommonQuery({ optionsMap }: { optionsMap: Record<string, any> }) {
  const fields = computed<Array<QueryField>>(() => {
    return [
      {
        type: 'default',
        label: 'Code',
        dataField: 'code',
        columnSpan: 1,
        extendProps: {
          formItemProps: {
            labelCol: { style: { width: '50px' } },
            wrapperCol: { style: { width: '200px' } },
          },
        },
      },
      {
        type: 'default',
        label: 'Name',
        dataField: 'name',
        columnSpan: 1,
        extendProps: {
          formItemProps: {
            labelCol: { style: { width: '50px' } },
            wrapperCol: { style: { width: '120px' } },
          },
        },
      },
      {
        type: 'select',
        label: 'Status',
        dataField: 'status',
        columnSpan: 1,
        elementProps: {
          options: optionsMap['status'],
        },
        extendProps: {
          formItemProps: {
            labelCol: { style: { width: '56px' } },
            wrapperCol: { style: { width: '130px' } },
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
        text: 'Search',
        command: 'handleFilter',
        elementProps: {
          type: 'primary',
        },
        canKeyDown: true,
      },
      {
        text: 'Reset',
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
