import { client } from "./apiTemplate";

export async function getTags() {
  return await client.getEntries({ content_type: "tag" });
}

export async function getTag(id: string) {
  return await client.getEntry(id);
}
