import type { Meta, StoryObj } from "@storybook/vue3";
import ArticleBody from "@/components/ArticleBody.vue";
import { faker } from "@faker-js/faker";

const meta: Meta<typeof ArticleBody> = {
  title: "Component/ArticleBody",
  component: ArticleBody,
  tags: ["autodocs"],
  argTypes: {
    article: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleBody>;

export const Default: Story = {
  args: {
    article: {
      fields: {
        title: faker.lorem.sentence(),
        publishedDate: faker.date.past().toISOString(),
        category: {
          sys: {
            id: faker.string.uuid(),
            type: "Entry",
            createdAt: faker.date.past().toISOString(),
            updatedAt: faker.date.past().toISOString(),
          },
          fields: {
            categoryName: faker.lorem.word(),
          },
        },
        tags: [
          {
            sys: {
              id: faker.string.uuid(),
              type: "Entry",
              createdAt: faker.date.past().toISOString(),
              updatedAt: faker.date.past().toISOString(),
            },
            fields: {
              tagName: faker.lorem.word(),
            },
          },
        ],
        articleBody: {
          content: [
            {
              nodeType: "heading-1",
              content: [
                {
                  value: faker.lorem.sentence(),
                },
              ],
            },
            {
              nodeType: "heading-2",
              content: [
                {
                  value: faker.lorem.sentence(),
                },
              ],
            },
            {
              nodeType: "heading-3",
              content: [
                {
                  value: faker.lorem.sentence(),
                },
              ],
            },
            {
              nodeType: "heading-4",
              content: [
                {
                  value: faker.lorem.sentence(),
                },
              ],
            },
            {
              nodeType: "heading-5",
              content: [
                {
                  value: faker.lorem.sentence(),
                },
              ],
            },
            {
              nodeType: "heading-6",
              content: [
                {
                  value: faker.lorem.sentence(),
                },
              ],
            },
            {
              nodeType: "paragraph",
              content: [
                {
                  nodeType: "hyperlink",
                  data: {
                    uri: faker.internet.url(),
                  },
                  content: [
                    {
                      value: faker.lorem.sentence(),
                    },
                  ],
                  value: faker.lorem.sentence(),
                },
              ],
            },
            {
              nodeType: "blockquote",
              content: [
                {
                  nodeType: "hyperlink",
                  data: {
                    uri: faker.internet.url(),
                  },
                  content: [
                    {
                      value: faker.lorem.sentence(),
                    },
                  ],
                  value: faker.lorem.sentence(),
                },
              ],
            },
            {
              nodeType: "embedded-asset-block",
              data: {
                target: {
                  fields: {
                    file: {
                      url: faker.image.url(),
                    },
                    description: faker.lorem.sentence(),
                  },
                },
              },
            },
          ],
        },
      },
    },
  },
};
