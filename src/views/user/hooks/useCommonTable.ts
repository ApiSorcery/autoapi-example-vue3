import { computed, reactive } from 'vue'
import type { CommonTable, TableField } from '@castor-ui/castor-antdv'

export default function useCommonTable({ optionsMap }) {
  const columns = computed<Array<TableField>>(() => {
    return [
      {
        type: 'index',
        label: 'No.',
        dataField: 'index',
        elementProps: {
          width: '60px ',
        },
      },
      {
        type: 'link',
        label: 'Code',
        dataField: 'code',
        elementProps: {
          width: '120px',
          align: 'center',
        },
        extendProps: {
          linkCommand: 'handleLink',
        },
      },

      {
        type: 'default',
        label: 'Name',
        dataField: 'name',
        elementProps: {
          width: '100px',
        },
      },
      {
        type: 'default',
        label: 'Email',
        dataField: 'email',
        elementProps: {
          width: '180px',
        },
      },
      {
        type: 'status',
        label: 'Gender',
        dataField: 'gender',
        elementProps: {
          width: '120px',
        },
        extendProps: {
          options: optionsMap['gender'],
        },
      },
      {
        type: 'image',
        label: 'Avatar',
        dataField: 'avatar',
        elementProps: {
          width: '80px',
          align: 'center',
        },
        extendProps: {
          subElementProps: {
            width: 50,
            height: 50,
          },
        },
      },
      {
        type: 'default',
        label: 'Address',
        dataField: 'address',
        elementProps: {
          width: '240px',
        },
      },
      {
        type: 'status',
        label: 'Status',
        dataField: 'status',
        elementProps: {
          width: '120px',
        },
        extendProps: {
          options: optionsMap['status'],
        },
      },
      {
        type: 'default',
        label: 'Last Modified',
        dataField: 'updatedAt',
        elementProps: {
          width: '180px',
        },
      },
      {
        type: 'default',
        label: 'Created',
        dataField: 'createdAt',
        elementProps: {
          width: '180px',
        },
      },
      {
        type: 'commands',
        label: 'Actions',
        dataField: 'commands',
        elementProps: {
          fixed: 'right',
          width: '160px',
        },
        extendProps: {
          commands: [
            {
              text: 'Edit',
              command: 'handleEdit',
              disableValidator: ({ row }: { row: any }) => row.id === 2,
              visibleValidator: ({ row }: { row: any }) => row.id >= 2,
            },
            {
              text: 'Delete',
              command: 'handleDelete',
              elementProps: {
                danger: true,
              },
            },
          ],
        },
      },
    ]
  })

  const table = reactive<CommonTable>({
    loading: false,
    title: 'User Information',
    dataSource: [] as Array<object>,
    columns,
    addCommand: {
      text: 'Create',
      command: 'handleAdd',
      visibleValidator: () => true,
      disableValidator: () => {},
    },
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
    },
    elementProps: {},
  })

  return table
}
