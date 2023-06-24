import type { Meta, StoryObj } from "@storybook/vue3";
import BlogHeader from "@/components/BlogHeader.vue";

const meta: Meta<typeof BlogHeader> = {
  title: "Component/BlogHeader",
  component: BlogHeader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BlogHeader>;

export const Default: Story = {
  args: {},
};
