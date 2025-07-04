import { computed, reactive } from 'vue'
import type { CommonTable, TableField } from '#/castor-antd'

export default function useCommonTable({ optionsMap }) {
  const columns = computed<Array<TableField>>(() => {
    return [
      {
        type: 'index',
        label: '序号',
        dataField: 'index',
        elementProps: {
          width: '60px '
        }
      },
      {
        type: 'link',
        label: '编号',
        dataField: 'code',
        elementProps: {
          width: '120px',
          align: 'center'
        },
        extendProps: {
          linkCommand: 'handleLink'
        }
      },

      {
        type: 'default',
        label: '姓名',
        dataField: 'name',
        elementProps: {
          width: '100px'
        }
      },
      {
        type: 'default',
        label: '邮箱',
        dataField: 'email',
        elementProps: {
          width: '180px'
        }
      },
      {
        type: 'status',
        label: '性别',
        dataField: 'gender',
        elementProps: {
          width: '120px'
        },
        extendProps: {
          options: optionsMap['gender']
        }
      },
      {
        type: 'default',
        label: '头像',
        dataField: 'avatar',
        elementProps: {
          width: '120px'
        }
      },
      {
        type: 'default',
        label: '地址',
        dataField: 'address',
        elementProps: {
          width: '240px'
        }
      },
      {
        type: 'default',
        label: '上次修改时间',
        dataField: 'updatedAt',
        elementProps: {
          width: '180px'
        }
      },
      {
        type: 'default',
        label: '创建时间',
        dataField: 'createdAt',
        elementProps: {
          width: '180px'
        }
      },
      {
        type: 'commands',
        label: '操作',
        dataField: 'commands',
        elementProps: {
          fixed: 'right',
          width: '160px'
        },
        extendProps: {
          commands: [
            {
              text: '编辑',
              command: 'handleEdit',
              disableValidator: ({ row }: { row: any }) => row.id === 2,
              visibleValidator: ({ row }: { row: any }) => row.id >= 2
            },
            {
              text: '删除',
              command: 'handleDelete',
              elementProps: {
                danger: true
              }
            }
          ]
        }
      }
    ]
  })

  const table = reactive<CommonTable>({
    loading: false,
    title: '用户信息',
    dataSource: [] as Array<Object>,
    columns,
    addCommand: {
      text: '新建',
      command: 'handleAdd',
      visibleValidator: () => true,
      disableValidator: () => { }
    },
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0
    },
    elementProps: {}
  })

  return table
}
