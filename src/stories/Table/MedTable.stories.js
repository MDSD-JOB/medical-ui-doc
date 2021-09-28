import { MedTable } from 'medical-ui'

const columns = [
  {
    title: '标题',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
  {
    title: 'Action',
    key: 'action',
  },
]

const dataSource = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    children: [
      {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [
          {
            key: 121,
            name: 'Jimmy Browns',
            age: 16,
            address: 'New York No. 3 Lake Park',
          },
        ],
      },
      {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [
          {
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [
              {
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
              },
              {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
]

const expandedRowKeys = []

const rowClassName = (record, index) => {
  let className = 'light-row'
  if (index % 2 === 1) className = 'dark-row'
  return className
}

export default {
  title: '基础组件/表格',
  component: MedTable,
  args: {
    columns,
    dataSource,
    rowKey: 'key',
    expandedRowKeys,
    rowClassName,
  },
  argTypes: {
    columns: {
      name: 'columns',
      table: {
        defaultValue: {
          summary: '[]',
        },
      },
      type: { required: true },
      description: '【必填项】表格表头部分',
    },
    dataSource: {
      name: 'dataSource',
      table: {
        defaultValue: {
          summary: '[]',
        },
      },
      type: { required: true },
      description: '【必填项】数据源',
    },
    rowKey: {
      name: 'rowKey',
      table: {
        defaultValue: {
          summary: 'key',
        },
      },
      type: { required: true },
      description: '【必填项】表格行 key 的取值，可以是字符串或一个函数',
    },
    childrenKey: {
      name: 'childrenKey',
      table: {
        defaultValue: {
          summary: 'embedChildren',
        },
      },
      type: { required: false },
      description: '指定树状展开子节点列表的键名',
    },
    childrenColumnName: {
      name: 'childrenColumnName',
      table: {
        defaultValue: {
          summary: 'children',
        },
      },
      type: { required: false },
      description: '指定树形结构的列名（修改children为指定字段）',
    },
    pagination: {
      name: 'pagination',
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
      type: { required: false },
      description:
        '是否展示页面，可为布尔值，或者对象（参考antdv文档里pagination相关配置）',
    },
    expandedRowKeys: {
      name: 'expandedRowKeys',
      table: {
        defaultValue: {
          summary: '[]',
        },
      },
      type: { required: false },
      description: '展开的行，控制属性。可用 .sync 后缀',
    },
    expandIcon: {
      name: 'expandIcon',
      type: { required: false },
      description: '自定义展开图标',
      control: null,
    },
    rowClassName: {
      name: 'rowClassName',
      type: { required: false },
      description: '每行的类名设置',
      control: null,
    },
    accordion: {
      name: 'accordion',
      table: {
        defaultValue: {
          summary: null,
        },
      },
      type: { required: false },
      description: '是否手风琴效果',
      control: {
        type: 'boolean',
      },
    },
    allowExpandEmpty: {
      name: 'allowExpandEmpty',
      table: {
        defaultValue: {
          summary: null,
        },
      },
      type: { required: false },
      description: '是否允许展开空节点',
      control: {
        type: 'boolean',
      },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MedTable },
  template: '<med-table  v-bind="$props"/>',
})

export const 标准表格 = Template.bind({})

const columns1 = [
  {
    title: '标题',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    selectable: true, // 是否可以隐藏
    expandIcon: 'search',
  },
]
export const 带排序的表格 = Template.bind({})
带排序的表格.args = {
  columns: columns1,
}

const columns2 = [
  {
    title: '标题',
    dataIndex: 'name',
    key: 'name',
    selectable: true,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    selectable: true,
  },
]

export const 可隐藏指定列的表格 = Template.bind({})
可隐藏指定列的表格.args = {
  columns: columns2,
}

const columns3 = [
  {
    title: '标题',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
  },
]

export const 带筛选的表格 = Template.bind({})
带筛选的表格.args = {
  columns: columns3,
}

const columns4 = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' }, // 表头插槽
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
]

const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MedTable },
  template: `
    <med-table v-bind="$props">
      <template #customTitle><a-icon type="smile-o" /> 插槽表头</template>
    </med-table>
  `,
})
export const 表头内容带插槽的表格 = Template2.bind({})
表头内容带插槽的表格.args = {
  columns: columns4,
}

const Template3 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MedTable },
  template: `
    <med-table v-bind="$props">
      <a slot="name" slot-scope="text">{{ text }} 插槽内容</a>
    </med-table>
  `,
})

const columns5 = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: {
      customRender: 'name',
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
]

export const 表格内容带插槽的表格 = Template3.bind({})
表格内容带插槽的表格.args = {
  columns: columns5,
}

const Template4 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MedTable },
  template: `
    <med-table v-bind="$props"></med-table>
  `,
})

const columns6 = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon',
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
]

export const 带搜索筛选的表格 = Template.bind({})
带搜索筛选的表格.args = {
  columns: columns6,
}
