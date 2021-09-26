import { MedFormModel } from 'medical-ui'

const responsive = {
  xl: 8,
  lg: 8,
  md: 12,
  sm: 24,
  xs: 24,
}
const form = {}
const dataSource = [
  {
    labelText: '输入框',
    type: 'text',
    placeholder: '文本输入区域',
    fieldName: 'formFieldText',
    required: true,
    wrongMsg: '请输入文本',
    validator: (rule, value, cb) => {
      if (value && value.startsWith(1)) {
        cb('不能以1开头')
      }
      cb()
    },
  },
  {
    labelText: '输入框',
    type: 'textarea',
    placeholder: '文本输入区域',
    fieldName: 'formFieldTextArea',
    required: true,
    wrongMsg: '请输入文本',
    autoSize: {
      minRows: 1,
    },
  },
  {
    labelText: '数字输入框',
    type: 'number',
    fieldName: 'formFieldNumber',
    placeholder: '这只是一个数字的文本输入框',
  },
  {
    labelText: '单选框',
    type: 'radio',
    fieldName: 'formFieldRadio',
    required: true,
    initialValue: '1',
    buttonType: true,
    buttonStyle: 'solid',
    optionList: [
      {
        label: 'radio选项1',
        value: '0',
        disabled: true,
      },
      {
        label: 'radio选项2',
        value: '1',
      },
    ],
  },
  {
    labelText: '多选框',
    type: 'checkbox',
    fieldName: 'formFieldCheckbox',
    initialValue: ['0'],
    optionList: [
      {
        label: '选项1',
        value: '0',
        disabled: true,
      },
      {
        label: '选项2',
        value: '1',
      },
    ],
  },
  {
    labelText: '日期选择',
    type: 'datetime',
    fieldName: 'formField4',
    placeholder: '选择日期',
  },
  {
    labelText: '日期范围',
    type: 'datetimeRange',
    fieldName: 'formField5',
    placeholder: ['开始日期', '选择日期'],
  },
  {
    labelText: '下拉框',
    type: 'select',
    fieldName: 'formField7',
    placeholder: '下拉选择你要的',
    optionList: [
      {
        label: 'text1',
        value: '0',
      },
      {
        label: 'text2',
        value: '1',
      },
    ],
  },
  {
    labelText: '联动',
    type: 'cascader',
    fieldName: 'formField6',
    placeholder: '级联选择',
    optionList: [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake',
              },
              {
                value: 'xiasha',
                label: 'Xia Sha',
                disabled: true,
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua men',
              },
            ],
          },
        ],
      },
    ],
  },
]

export default {
  component: MedFormModel,
  title: '基础组件/表单(v-model)',
  args: {
    form,
    responsive,
    dataSource,
  },
  argTypes: {
    form: {
      name: 'form',
      table: {
        defaultValue: {
          summary: '{}',
        },
      },
      type: { required: true },
      description: '必填，表单双向绑定的对象，即表单内容得到的key-value对象',
    },
    dataSource: {
      name: 'dataSource',
      table: {
        defaultValue: {
          summary:
            "[{labelText: '输入框',type: 'text',placeholder: '文本输入区域',fieldName: 'formFieldText',required: true,wrongMsg: '请输入文本',validator: (rule, value, cb) => {if (value && value.startsWith(1)) {cb('不能以1开头')}cb()}}]",
        },
      },
      type: { required: true },
      description: '数据源',
    },
    formLayout: {
      name: 'formLayout',
      type: { required: false },
      table: {
        defaultValue: {
          summary: '{ labelCol: { span: 8 }, wrapperCol: { span: 16 } }',
        },
      },
      description: '控件的标签和输入框占位大小',
      control: {
        type: 'object',
      },
    },
    datetimeTotimeStamp: {
      name: 'datetimeTotimeStamp',
      type: { required: false },
      description: '是否把时间控件的返回值全部转为时间戳',
      control: {
        type: 'boolean',
      },
    },
    showBtn: {
      name: 'showBtn',
      type: { required: false },
      table: {
        defaultValue: { summary: 'false' },
      },
      description: '是否展示默认的提交按钮',
      control: {
        type: 'boolean',
      },
    },
    bordered: {
      name: 'bordered',
      type: { required: false },
      table: {
        defaultValue: { summary: 'false' },
      },
      description: '是否显示边框',
      control: {
        type: 'boolean',
      },
    },
    gutter: {
      name: 'gutter',
      type: { required: false },
      table: {
        defaultValue: { summary: 48 },
      },
      description: '控件的间距',
      control: {
        type: 'text',
      },
    },
    size: {
      name: 'size',
      type: { required: false },
      table: {
        defaultValue: { summary: 'default' },
      },
      description: '控件的尺寸',
      control: {
        type: 'select',
        options: ['default', 'small', 'large'],
      },
    },
    responsive: {
      name: 'responsive',
      type: { required: false },
      table: {
        defaultValue: { summary: '{ xl: 6, lg: 8, md: 12, sm: 24, xs: 24 }' },
      },
      description: '控件的栅格布局',
      control: {
        type: 'object',
      },
    },
    footer: {
      name: 'footer',
      type: { required: false },
      table: {
        defaultValue: { summary: '<template #footer></template>' },
      },
      description: '插槽，默认为底部，可用于添加按钮等',
      control: null,
    },
    customItem: {
      name: 'customItem',
      type: { required: false },
      table: {
        defaultValue: { summary: '<template #customItem></template>' },
      },
      description: '以tempalte方式添加自定义的form-item项',
      control: null,
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { MedFormModel },
  props: Object.keys(argTypes),
  template: `
    <med-form-model v-bind="$props"></med-form-model>
  `,
})

export const 双向绑定表单 = Template.bind({})

export const 适用于新增 = Template.bind({})
