import { action } from '@storybook/addon-actions'
import { MedCheckbox } from 'medical-ui'
const optionList = [
  { label: '选项1', value: '0', disabled: true },
  { label: '选项2', value: '1' },
]
const formLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } }
export default {
  component: MedCheckbox,
  title: '基础组件/复选框',
  args: {
    optionList,
    formLayout,
  },
  argTypes: {
    optionList: {
      name: 'optionList',
      type: { required: true },
      table: {
        defaultValue: {
          summary:
            "[{  label: '选项1',  value: '0',  disabled: true},{  label: '选项2',  value: '1'}]",
        },
      },
      description: '选项列表',
      control: {
        type: 'object',
      },
    },
    isFormItem: {
      name: 'isFormItem',
      table: {
        defaultValue: { summary: false },
      },
      type: { required: false },
      description: '是否是用于表单的，参考表单文档中传参',
      control: {
        type: 'boolean',
      },
    },
    formLayout: {
      name: 'formLayout',
      table: {
        defaultValue: {
          summary: '{ labelCol: { span: 6 }, wrapperCol: { span: 18 }}',
        },
      },
      type: { required: false },
      description: 'isFormItem = true生效，用于表单时的布局，标签和选框的布局',
      control: {
        type: 'object',
      },
    },
    decorator: {
      name: 'decorator',
      type: { required: false },
      description: 'isFormItem = true生效，用于表单时的校验',
      control: {
        type: 'object',
      },
    },
    initialValue: {
      name: 'initialValue',
      type: { required: false },
      description: '初始选中的值',
      control: {
        type: 'text',
      },
    },
    change: {
      name: 'change',
      table: {
        defaultValue: { summary: '()=>{}' },
      },
      type: { required: false },
      description: '选中时的回调',
      control: {
        type: null,
      },
    },
  },
}
const Template = (args, { argTypes }) => ({
  components: { MedCheckbox },
  props: Object.keys(argTypes),
  template: '<med-checkbox v-bind="$props" @change="action" />',
  methods: {
    action: action('checkboxChange'),
  },
})

export const 普通复选框 = Template.bind({})
