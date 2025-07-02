<template>
  <div class="common-page">
    <div class="common-query-container">
      <ca-common-query v-bind="{ ...query, emitRegister }" />
    </div>
    <div class="common-table-container">
      <ca-common-table v-bind="{
        ...table,
        emitRegister,
        elementProps: { ...table.elementProps, onChange: onTableChange }
      }" />
    </div>
    <Modal v-model:open="form.visible" :title="form.title" width="900px" :footer="null"
      :after-close="() => resetForm({ form, callback: getList })">
      <ca-common-form v-bind="form" />
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { message, Modal } from 'ant-design-vue'
import { reactive } from 'vue'
import type { SelectItem } from '#/castor-antd'
import { resetForm, setFormValue } from '@/hooks/component/useModal'
import useCommonTable from './hooks/useCommonTable'
import useCommonQuery from './hooks/useCommonQuery'
import useCommonForm from './hooks/useCommonForm'

defineOptions({
  name: 'UserAdmin'
})

const optionsMap = reactive<Record<string, SelectItem[]>>({
  sex: [
    {
      value: 1,
      label: '男'
    },
    {
      value: 2,
      label: '女'
    }
  ],
  equipment: [
    {
      value: 'double',
      label: '双压记录仪',
      disabled: false
    },
    {
      value: 'remote',
      label: '压力远传处理仪',
      disabled: false
    }
  ],
  status: [
    {
      value: 4,
      label: '未开始',
      color: '#4a90e2'
    },
    {
      value: 1,
      label: '进行中',
      color: '#f5a623'
    },
    {
      value: 2,
      label: '已驳回',
      color: '#d0021b'
    },
    {
      value: 3,
      label: '已完成',
      color: '#3d1ab7'
    }
  ]
})

const query = useCommonQuery()
const table = useCommonTable()
const form = useCommonForm({ optionsMap })

//#region query
const handleFilter = () => {
  console.log('handleFilter', query.model)
    ; (table.pagination || {}).current = 1
  getList()
}

const handleReset = async () => {
  console.log('handleReset', query.model)
  await (emitRegister as unknown as { resetFields: () => Promise<void> }).resetFields()
  handleFilter()
}
//#endregion

//#region  table
const getList = () => {
  console.log('getList', table.pagination, query.model)
  table.loading = true
  setTimeout(() => {
    const baseIndex =
      (((table.pagination || {}).current || 1) - 1) * ((table.pagination || {}).pageSize || 10)
    table.dataSource = [
      {
        id: baseIndex + 1,
        code: `${100 + baseIndex + 1}`,
        name: '王小虎',
        sex: 1,
        address: '上海市普陀区金沙江路 1518 弄',
        userDate: '2016-05-02',
        userYear: '2016',
        userMonth: '2016-05',
        equipment: ['double']
      },
      {
        id: baseIndex + 2,
        code: `${100 + baseIndex + 2}`,
        name: '王小虎',
        sex: 1,
        address: '上海市普陀区金沙江路 1517 弄',
        userDate: '2016-05-04',
        userYear: '2016',
        userMonth: '2016-05',
        equipment: ['double']
      },
      {
        id: baseIndex + 3,
        code: `${100 + baseIndex + 3}`,
        name: '王小虎',
        sex: 1,
        address: '上海市普陀区金沙江路 1519 弄',
        userDate: '2016-05-01',
        userYear: '2016',
        userMonth: '2016-05',
        equipment: ['double']
      },
      {
        id: baseIndex + 4,
        code: `${100 + baseIndex + 4}`,
        name: '王小虎',
        sex: 1,
        address: '上海市普陀区金沙江路 1516 弄',
        userDate: '2016-05-03',
        userYear: '2016',
        userMonth: '2016-05',
        equipment: ['double']
      },
      {
        id: baseIndex + 5,
        code: `${100 + baseIndex + 5}`,
        name: '王小虎',
        sex: 1,
        address: '上海市普陀区金沙江路 1518 弄',
        userDate: '2016-05-02',
        userYear: '2016',
        userMonth: '2016-05',
        equipment: ['double']
      },
      {
        id: baseIndex + 6,
        code: `${100 + baseIndex + 6}`,
        name: '王小虎',
        sex: 1,
        address: '上海市普陀区金沙江路 1517 弄',
        userDate: '2016-05-04',
        userYear: '2016',
        userMonth: '2016-05',
        equipment: ['double']
      },
      {
        id: baseIndex + 7,
        code: `${100 + baseIndex + 7}`,
        name: '王小虎',
        sex: 1,
        address: '上海市普陀区金沙江路 1519 弄',
        userDate: '2016-05-01',
        userYear: '2016',
        userMonth: '2016-05',
        equipment: ['double']
      },
      {
        id: baseIndex + 8,
        code: `${100 + baseIndex + 8}`,
        name: '王小虎',
        sex: 1,
        address: '上海市普陀区金沙江路 1516 弄',
        userDate: '2016-05-03',
        userYear: '2016',
        userMonth: '2016-05',
        equipment: ['double']
      },
      {
        id: baseIndex + 9,
        code: `${100 + baseIndex + 9}`,
        name: '王小虎',
        sex: 1,
        address: '上海市普陀区金沙江路 1518 弄',
        userDate: '2016-05-02',
        userYear: '2016',
        userMonth: '2016-05',
        equipment: ['double']
      },
      {
        id: baseIndex + 10,
        code: `${100 + baseIndex + 10}`,
        name: '王小虎',
        sex: 1,
        address: '上海市普陀区金沙江路 1517 弄',
        userDate: '2016-05-04',
        userYear: '2016',
        userMonth: '2016-05',
        equipment: ['double']
      }
    ]
    table.loading = false
  }, 200)
}

const onTableChange = (newPagination, filters, sorter, extra) => {
  console.log('onTableChange', newPagination, filters, sorter, extra)
    ; (table.pagination || {}).current = newPagination.current
    ; (table.pagination || {}).pageSize = newPagination.pageSize
  getList()
}

const handleAdd = () => {
  console.log('handleAdd')
  form.operateType = 'add'
  form.visible = true
}

const handleLink = ({ row, index }) => {
  console.log('handleLink', row, index)
  form.operateType = 'view'
  form.visible = true
  setFormValue(form.model, row)
}

const handleEdit = ({ index, row }) => {
  console.log('handleEdit', index, row)
  form.operateType = 'edit'
  form.visible = true
  setFormValue(form.model, row)
}

const handleDelete = ({ index, row }) => {
  console.log('handleDelete', index, row)
  Modal.confirm({
    type: 'warning',
    title: '提示',
    content: '此操作将永久删除该数据, 是否继续?',
    okText: '确定',
    cancelText: '取消',
    onCancel: () => {
      message.info('已取消删除')
    },
    onOk: async () => {
      message.success('删除成功!', 1, getList)
    }
  })
}
//#endregion

const emitRegister = {
  handleFilter,
  handleReset,
  handleLink,
  handleEdit,
  handleDelete,
  handleAdd
}

getList()
</script>
<style lang="scss" scoped>
.common-page {
  .common-query-container {
    background: white;
    margin-bottom: 12px;
    padding: 12px;
  }

  .common-table-container {
    background: white;
    padding: 2px 12px 0 12px;
  }
}
</style>
