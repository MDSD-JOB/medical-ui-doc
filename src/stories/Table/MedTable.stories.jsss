import MedTable from './MedTable.vue'

export default {
  title: '基础组件/表格',
  component: MedTable,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MedTable },
  template: '<med-table />',
})

export const Primary = Template.bind({})
