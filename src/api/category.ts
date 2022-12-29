import { client } from "./apiTemplate";

export async function getCategories() {
  return await client.getEntries({ content_type: "category", include: 2 });
}

export async function getCateory(id: string) {
  return await client.getEntry(id);
}
