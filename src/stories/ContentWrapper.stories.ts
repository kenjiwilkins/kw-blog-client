import type { Meta, StoryObj } from "@storybook/vue3";
import ContentWrapper from "@/components/ContentWrapper.vue";

const meta: Meta<typeof ContentWrapper> = {
  title: "Component/ContentWrapper",
  component: ContentWrapper,
  tags: ["autodocs"],
  render: () => ({
    components: { ContentWrapper },
    template: "<content-wrapper />",
  }),
};

export default meta;
type Story = StoryObj<typeof ContentWrapper>;

export const Default: Story = {
  args: {},
};
