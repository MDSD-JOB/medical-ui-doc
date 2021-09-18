import { MedPin } from 'medical-ui'

export default {
  component: MedPin,
  title: '基础组件/卡贴',
  argTypes: {
    layout: {
      name: 'layout',
      type: { required: false },
      table: {
        defaultValue: { summary: 'top' },
      },
      description: '设置卡贴布局，可选值为 top left bottom 或者不设',
      control: {
        type: 'select',
        options: ['top', 'left', 'bottom'],
      },
    },
    unit: {
      name: 'unit',
      type: { required: false },
      description: '设置单位（仅在layout为top时展示）,例如 ℃',
      control: {
        type: 'text',
      },
    },
    num: {
      name: 'num',
      type: { required: false },
      description: '设置展示的数值',
      control: {
        type: 'text',
      },
    },
    size: {
      name: 'size',
      type: { required: false },
      description: '设置卡贴大小，可选值为 small default 或者不设',
      control: {
        type: 'select',
        options: ['small', 'default'],
      },
    },
    width: {
      name: 'width',
      table: {
        defaultValue: { summary: false },
      },
      type: { required: false },
      description: '卡贴宽度，例如 300px',
      control: {
        type: 'text',
      },
    },
    title: {
      name: 'title',
      type: { required: false },
      description: '卡贴标题',
      control: {
        type: 'text',
      },
    },
    bordered: {
      name: 'bordered',
      type: { required: false },
      description: '卡贴边框',
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
      description: '当卡贴内容还在加载中时，可以用 loading 展示一个占位',
      control: {
        type: 'boolean',
      },
    },
    hoverable: {
      name: 'hoverable',
      table: {
        defaultValue: { summary: 'false' },
      },
      type: { required: false },
      description: '鼠标移过时可浮起',
      control: {
        type: 'boolean',
      },
    },
    titleBg: {
      name: 'titleBg',
      type: { required: false },
      description:
        '标题部分背景色，例如 red/#000/rgb(233,233,233),目前仅在checked = true时生效',
      control: {
        type: 'text',
      },
    },
    //标题字体颜色
    titleColor: {
      name: 'titleColor',
      type: { required: false },
      description: '标题部分字体颜色，例如 red/#000/rgb(233,233,233)',
      control: {
        type: 'text',
      },
    },
    checked: {
      name: 'checked',
      type: { required: false },
      description: '是否展示边框和标题自定义背景色',
      control: {
        type: 'boolean',
      },
    },
    bodyFontSize: {
      name: 'bodyFontSize',
      type: { required: false },
      description: '内容部分字体大小，例如 10px',
      control: {
        type: 'text',
      },
    },
    bodyColor: {
      name: 'bodyColor',
      type: { required: false },
      description: '内容部分字体颜色，例如 red/#000/rgb(233,233,233)',
      control: {
        type: 'text',
      },
    },
  },
}
const Template = (args, { argTypes }) => ({
  components: { MedPin },
  props: Object.keys(argTypes),
  template: '<med-pin v-bind="$props" title="卡贴标题">卡贴内容</med-pin>',
})

export const 标准卡贴 = Template.bind({})
标准卡贴.args = {
  layout: 'top',
}

export const 标准卡贴2 = Template.bind({})
标准卡贴2.args = {
  layout: 'left',
}

export const 标准卡贴3 = Template.bind({})
标准卡贴3.args = {
  layout: 'bottom',
}
