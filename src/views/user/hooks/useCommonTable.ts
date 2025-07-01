import { computed, reactive } from 'vue'
import type { CommonTable, TableField } from '#/castor-antd'

export default function useCommonTable() {
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
        label: '年份',
        dataField: 'userYear',
        elementProps: {
          width: '120px'
        }
      },
      {
        type: 'default',
        label: '月份',
        dataField: 'userMonth',
        elementProps: {
          width: '120px'
        }
      },
      {
        type: 'default',
        label: '日期',
        dataField: 'userDate',
        elementProps: {
          width: '120px'
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
        label: '地址',
        dataField: 'address'
      },
      {
        type: 'commands',
        label: '操作',
        dataField: 'commands',
        elementProps: {
          fixed: 'right',
          width: '120px'
        },
        extendProps: {
          commands: [
            {
              text: '编辑',
              command: 'handleEdit',
              disableValidator: ({ row }) => row.id === 2,
              visibleValidator: ({ row }) => row.id >= 2
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
