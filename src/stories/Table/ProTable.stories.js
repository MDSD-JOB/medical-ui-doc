import ProTable from "./ProTable.vue";

export default {
  title: "基础组件/表格",
  component: ProTable,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ProTable },
  template: "<pro-table />",
});

export const Primary = Template.bind({});
