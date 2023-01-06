import axios from "axios";
import { createClient } from "contentful";
export function apiTemplate(url: string) {
  return axios
    .create({
      baseURL: "https://cdn.contentful.com",
    })
    .get(url);
}

export const client = createClient({
  space: import.meta.env.VITE_APP_CTF_SPACE_ID,
  accessToken: import.meta.env.VITE_APP_CTF_ACCESS_TOKEN,
});
