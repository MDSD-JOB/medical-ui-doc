import { MedCard } from 'medical-ui'

export default {
  component: MedCard,
  title: '基础组件/卡片',
  argTypes: {
    size: {
      name: 'size',
      type: { required: false },
      description: '设置卡片大小，可选值为 small default 或者不设',
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
      description: '卡片宽度，例如 300px',
      control: {
        type: 'text',
      },
    },
    title: {
      name: 'title',
      type: { required: false },
      description: '卡片标题',
      control: {
        type: 'text',
      },
    },
    bordered: {
      name: 'bordered',
      type: { required: false },
      description: '卡片边框',
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
      description: '当卡片内容还在加载中时，可以用 loading 展示一个占位',
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
    tabList: {
      name: 'tabList',
      type: { required: false },
      description: '切换为带tab栏的卡片，例[{key:"tab1",tab:"tab1"}]',
    },
  },
}
const Template = (args, { argTypes }) => ({
  components: { MedCard },
  props: Object.keys(argTypes),
  template: '<med-card v-bind="$props">我是卡片</med-card>',
})

export const 标准卡片 = Template.bind({})
标准卡片.args = {
  title: '我是卡片',
}
export const 带标签的卡片 = Template.bind({})
带标签的卡片.args = {
  tabList: [
    { key: 'tab1', tab: 'tab1' },
    { key: 'tab2', tab: 'tab2' },
  ],
}
