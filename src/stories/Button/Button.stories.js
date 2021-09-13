import { action } from "@storybook/addon-actions";
import MyButton from "./Button.vue";

export default {
  title: "基础组件/按钮",
  component: MyButton,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const 使用actions插件 = () => ({
  components: {
    MyButton,
  },
  template: `
  <my-button label="点我" @onClick="onClick"/>
  `,
  methods: {
    onClick: action("onClick"),
  },
});
