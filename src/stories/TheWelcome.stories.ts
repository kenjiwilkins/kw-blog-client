import type { Meta, StoryObj } from "@storybook/vue3";
import TheWelcome from "@/components/TheWelcome.vue";

const meta: Meta<typeof TheWelcome> = {
  title: "Component/TheWelcome",
  component: TheWelcome,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TheWelcome>;

export const Default: Story = {
  args: {},
};
