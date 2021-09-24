import { action } from '@storybook/addon-actions'
import { MedRadio } from 'medical-ui'
const optionList = [
  { label: '选项1', value: '0', disabled: true },
  { label: '选项2', value: '1' },
]
const formLayout = { labelCol: { span: 6 }, wrapperCol: { span: 18 } }

export default {
  component: MedRadio,
  title: '基础组件/单选框',
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
    },
    validator: {
      name: 'validator',
      type: { required: false },
      table: {
        defaultValue: {
          summary: "(rule, value, cb) => {if (!value) {cb('必填')}cb()}",
        },
      },
      description: 'isFormItem = true生效，用于表单时的校验',
    },
    buttonType: {
      name: 'buttonType',
      type: { required: false },
      description: '是否是按钮样式',
      control: {
        type: 'boolean',
      },
    },
    buttonStyle: {
      name: 'buttonStyle',
      type: { required: false },
      description: 'RadioButton 的风格样式，目前有描边和填色两种风格',
      control: {
        type: 'select',
        options: ['solid', 'outline'],
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
  components: { MedRadio },
  props: Object.keys(argTypes),
  template: '<med-radio v-bind="$props" @change="action" />',
  methods: {
    action: action('radioChange'),
  },
})

export const 普通单选框 = Template.bind({})
