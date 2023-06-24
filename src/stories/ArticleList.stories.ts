import type { Meta, StoryObj } from "@storybook/vue3";
import ArticleList from "@/components/ArticleList.vue";
import { faker } from "@faker-js/faker";

const meta: Meta<typeof ArticleList> = {
  title: "Component/ArticleList",
  component: ArticleList,
  tags: ["autodocs"],
  args: {
    articles: {
      items: [],
      limit: 10,
      skip: 0,
      total: 0,
      sys: {
        id: "id",
        type: "type",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
      },
      includes: {
        Asset: [],
        Entry: [],
      },
    },
  },
  argTypes: {
    articles: {
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

function generateArticles(count: number) {
  const articles = [];
  for (let i = 0; i < count; i++) {
    articles.push({
      fields: {
        title: faker.lorem.sentence(),
        articleBody: {
          content: [
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
          categoryName: faker.lorem.word(),
        },
        tags: generateTags(faker.number.int({ min: 1, max: 5 })),
      },
      sys: {
        id: faker.string.uuid(),
        type: "Entry",
        createdAt: faker.date.past().toISOString(),
        updatedAt: faker.date.past().toISOString(),
      },
    });
  }
  return articles;
}

function generateTags(count: number) {
  const tags = [];
  for (let i = 0; i < count; i++) {
    tags.push({
      sys: {
        id: faker.string.uuid(),
        type: "Entry",
        createdAt: faker.date.past().toISOString(),
        updatedAt: faker.date.past().toISOString(),
      },
      fields: {
        tagName: faker.lorem.word(),
      },
      tagName: faker.lorem.word(),
    });
  }
  return tags;
}

export const Default: Story = {
  args: {
    articles: {
      items: generateArticles(10),
      limit: 10,
      skip: 0,
      total: 0,
      sys: {
        id: "id",
        type: "type",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
      },
      includes: {
        Asset: [],
        Entry: [],
      },
    },
  },
};
