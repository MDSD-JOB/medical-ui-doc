import { action } from '@storybook/addon-actions'
import { MedButton } from 'medical-ui'

export default {
  component: MedButton,
  title: '基础组件/按钮',
  argTypes: {
    type: {
      name: 'type',
      table: {
        defaultValue: { summary: 'default' },
      },
      type: { required: false },
      description: '设置按钮类型，可选值为 primary dashed danger link 或者不设',
      control: {
        type: 'select',
        options: ['primary', 'dashed', 'danger', 'link'],
      },
    },
    disabled: {
      name: 'disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
      type: { required: false },
      description: '按钮失效状态',
      control: {
        type: 'boolean',
      },
    },
    icon: {
      name: 'icon',
      type: { required: false },
      description: '设置按钮的图标类型',
      control: {
        type: 'text',
      },
    },
    ghost: {
      name: 'ghost',
      table: {
        defaultValue: { summary: 'false' },
      },
      type: { required: false },
      description: '幽灵属性，使按钮背景透明',
      control: {
        type: 'boolean',
      },
    },
    loading: {
      name: 'loading',
      table: {
        defaultValue: { summary: 'false' },
      },
      type: { required: false },
      description: '设置按钮载入状态',
      control: {
        type: 'boolean',
      },
    },
    shape: {
      name: 'shape',
      type: { required: false },
      description: '设置按钮形状，可选值为 circle round 或者不设',
      control: {
        type: 'select',
        options: ['circle', 'round'],
      },
    },
    size: {
      name: 'size',
      type: { required: false },
      description: '设置按钮大小，可选值为 small large 或者不设',
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
    block: {
      name: 'block',
      table: {
        defaultValue: { summary: 'false' },
      },
      type: { required: false },
      description: '将按钮宽度调整为其父宽度的选项',
      control: {
        type: 'boolean',
      },
    },
    htmlType: {
      name: 'htmlType',
      table: {
        defaultValue: { summary: 'button' },
      },
      type: { required: false },
      description:
        '设置 button 原生的 type 值，可选值为 button reset 或者submit',
      control: {
        type: 'select',
        options: ['button', 'reset', 'submit'],
      },
    },
    click: {
      name: 'click',
      table: {
        defaultValue: { summary: '()=>{}' },
      },
      type: { required: false },
      description: '点击按钮时的回调',
      control: {
        type: null,
      },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MedButton },
  template: '<med-button v-bind="$props" @click="action">我是按钮</med-button>',
  methods: {
    action: action('btnClick'),
  },
})

export const 按钮类型 = Template.bind({})
按钮类型.args = {
  type: 'default',
}

export const 按钮状态 = Template.bind({})
按钮状态.args = {
  disabled: true,
}

export const 图标按钮 = Template.bind({})
图标按钮.args = {
  icon: 'search',
}

export const 幽灵按钮 = Template.bind({})
幽灵按钮.args = {
  ghost: true,
}

export const 等待状态 = Template.bind({})
等待状态.args = {
  loading: true,
}

export const 按钮形状 = Template.bind({})
按钮形状.args = {
  shape: 'round',
}

export const 按钮大小 = Template.bind({})
按钮大小.args = {
  size: 'large',
}
export const 按钮宽度 = Template.bind({})
按钮宽度.args = {
  block: true,
}
