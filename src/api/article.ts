import { client } from "./apiTemplate";

export async function getCategoryArticles(categoryId: string) {
  return client.getEntries({
    content_type: "article",
    "fields.category.sys.id": categoryId,
  });
}

export async function getTagArticles(tagId: string) {
  return client.getEntries({
    content_type: "article",
    "fields.tags.sys.id": tagId,
  });
}

export async function getArticles() {
  return await client.getEntries({ content_type: "article", include: 2 });
}

export async function getArticle(id: string) {
  return await client.getEntry(id);
}
