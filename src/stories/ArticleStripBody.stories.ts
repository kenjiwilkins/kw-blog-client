import type { Meta, StoryObj } from "@storybook/vue3";
import ArticleStripBody from "@/components/ArticleStripBody.vue";
import { faker } from "@faker-js/faker";

const meta: Meta<typeof ArticleStripBody> = {
  title: "Component/ArticleStripBody",
  component: ArticleStripBody,
  argTypes: {
    articleBodyComponents: {
      control: "object",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ArticleStripBody>;

export const Default: Story = {
  args: {
    articleBodyComponents: [
      {
        nodeType: "paragraph",
        content: [
          {
            nodeType: "text",
            value: "This is a paragraph.",
          },
        ],
      },
    ],
  },
};

export const LongParagraph: Story = {
  args: {
    articleBodyComponents: [
      {
        nodeType: "paragraph",
        content: [
          {
            nodeType: "text",
            value: faker.lorem.paragraph(),
          },
        ],
      },
    ],
  },
};
