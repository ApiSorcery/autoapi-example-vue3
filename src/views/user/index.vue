<template>
  <div class="common-page">
    <div class="common-query-container">
      <ca-common-query v-bind="{ ...query, emitRegister }" />
    </div>
    <div class="common-table-container">
      <ca-common-table
        v-bind="{
          ...table,
          emitRegister,
          elementProps: { ...table.elementProps, onChange: onTableChange },
        }"
      />
    </div>
    <Modal
      v-model:open="form.visible"
      :title="form.title"
      width="900px"
      :footer="null"
      :after-close="() => resetForm({ form, callback: getList })"
    >
      <ca-common-form v-bind="form" />
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { inject, reactive } from 'vue';
import { Dayjs } from 'dayjs';
import { message, Modal } from 'ant-design-vue';
import type { SelectItem } from '@castor-ui/castor-antdv';
import { resetForm, setFormValue } from '@/hooks/useModal';
import useCommonTable from './hooks/useCommonTable';
import useCommonQuery from './hooks/useCommonQuery';
import useCommonForm from './hooks/useCommonForm';
import * as apiUser from '@/apis/auto/demo/ApiUser';

defineOptions({
  name: 'UserAdmin',
});
const dayjs = inject('dayjs') as (arg?: string) => Dayjs;
const optionsMap = reactive<Record<string, SelectItem[]>>({
  gender: [
    {
      value: 0,
      label: 'Unknown',
    },
    {
      value: 1,
      label: 'Male',
    },
    {
      value: 2,
      label: 'Female',
    },
  ],
  status: [
    {
      value: false,
      label: 'Disabled',
      color: 'gray',
    },
    {
      value: true,
      label: 'Enabled',
      color: '#1677ff',
    },
  ],
});

const query = useCommonQuery({ optionsMap });
const table = useCommonTable({ optionsMap });
const form = useCommonForm({ optionsMap });

//#region query
const handleFilter = () => {
  console.log('handleFilter', query.model);
  (table.pagination || {}).current = 1;
  getList();
};

const handleReset = async () => {
  console.log('handleReset', query.model);
  await (emitRegister as unknown as { resetFields: () => Promise<void> }).resetFields();
  handleFilter();
};
//#endregion

//#region  table
const getList = async () => {
  console.log('getList', table.pagination, query.model);
  table.loading = true;
  const res = await apiUser.getUserPaged({
    pagination: {
      page: (table.pagination || {}).current ?? 1,
      limit: (table.pagination || {}).pageSize ?? 10,
    },
    ...query.model,
  });
  table.dataSource = (res.results || []).map((r) => {
    return {
      ...r,
      createdAt: dayjs(r.createdAt).format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: dayjs(r.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
    };
  });
  (table.pagination || {}).total = res.total;
  table.loading = false;
};

const onTableChange = (newPagination, filters, sorter, extra) => {
  console.log('onTableChange', newPagination, filters, sorter, extra);
  (table.pagination || {}).current = newPagination.current;
  (table.pagination || {}).pageSize = newPagination.pageSize;
  getList();
};

const handleAdd = () => {
  console.log('handleAdd');
  form.operateType = 'add';
  form.visible = true;
};

const handleLink = ({ row, index }) => {
  console.log('handleLink', row, index);
  form.operateType = 'view';
  form.visible = true;
  setFormValue(form.model, row);
};

const handleEdit = ({ index, row }) => {
  console.log('handleEdit', index, row);
  form.operateType = 'edit';
  form.visible = true;
  setFormValue(form.model, row);
};

const handleDelete = ({ index, row }) => {
  console.log('handleDelete', index, row);
  Modal.confirm({
    type: 'warning',
    title: 'Confirm',
    content: 'This operation will permanently delete the data. Do you want to continue?',
    okText: 'OK',
    cancelText: 'Cancel',
    onCancel: () => {
      message.info('Delete cancelled');
    },
    onOk: async () => {
      await apiUser.removeUser({
        id: row.id,
      });
      message.success('Deleted successfully!', 1, getList);
    },
  });
};
//#endregion

const emitRegister = {
  handleFilter,
  handleReset,
  handleLink,
  handleEdit,
  handleDelete,
  handleAdd,
};

getList();
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
