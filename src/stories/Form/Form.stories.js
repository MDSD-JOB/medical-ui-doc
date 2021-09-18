import { MedForm } from 'medical-ui'

export default {
  component: MedForm,
  title: '基础组件/表单',
  argTypes: {
    searchFormFlag: {
      name: 'searchFormFlag',
      type: { required: false },
      table: {
        defaultValue: { summary: 'false' },
      },
      description: '是否是表格等搜索筛选用',
      control: {
        type: 'boolean',
      },
    },
    FieldFormFlag: {
      name: 'FieldFormFlag',
      type: { required: false },
      table: {
        defaultValue: { summary: 'false' },
      },
      description: '是否是新增，编辑用表单',
      control: {
        type: 'boolean',
      },
    },
    layout: {
      name: 'layout',
      type: { required: false },
      table: {
        defaultValue: { summary: 'card' },
      },
      description: '设置表单布局，可选值card inline',
      control: {
        type: 'select',
        options: ['card', 'inline'],
      },
    },
    formTitle: {
      name: 'formTitle',
      type: { required: false },
      description: 'searchFormFlag = ture 时展示，标题',
      control: {
        type: 'text',
      },
    },
    maxItem: {
      name: 'num',
      type: { required: false },
      table: {
        defaultValue: { summary: '999' },
      },
      description: '超过多少个折叠',
      control: {
        type: 'number',
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
    datetimeTotimeStamp: {
      name: 'datetimeTotimeStamp',
      type: { required: false },
      description: '是否把时间控件的返回值全部转为时间戳',
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
    dataSource: {
      name: 'dataSource',
      table: {
        defaultValue: {
          summary:
            "[{labelText: '输入框',type: 'text',placeholder: '文本输入区域',fieldName: 'formFieldText',required: true,wrongMsg: '请输入文本'}]",
        },
      },
      type: { required: false },
      description: '数据源',
    },
  },
}

const Template = (args, { argTypes }) => ({
  components: { MedForm },
  props: Object.keys(argTypes),
  template: '<med-form v-bind="$props" title="表单标题"></med-form>',
})

export const 标准表单 = Template.bind({})

export const 用于表格搜索 = Template.bind({})
用于表格搜索.args = {
  searchFormFlag: true,
}

export const 用于新增编辑等业务 = Template.bind({})
用于新增编辑等业务.args = {
  FieldFormFlag: true,
}
