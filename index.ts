import * as express from "express";
import rateLimit from "express-rate-limit";
import * as logger from "morgan";
import * as cors from "cors";
import * as fs from "fs";
import "dotenv/config";
import { api } from "./routes";
import { createClient } from "contentful";

const HTTPS = "https:";

const client = createClient({
  space: process.env.VITE_APP_CTF_SPACE_ID as string,
  accessToken: process.env.VITE_APP_CTF_ACCESS_TOKEN as string,
});
async function getArticle(id: string) {
  return await client.getEntry(id);
}

const app = express();
app.use(express.static(__dirname + "/dist"));
app.use(
  rateLimit({
    windowMs: 10000, // 1 minute
    max: 5, // limit each IP to 5 requests per windowMs
    message: "Too many requests, please try again later.",
  })
);
app.use(logger("common"));
app.use(cors());
app.use("/api", api);

app.get("/article/:articleId", async (req, res) => {
  try {
    const articleId = req.params.articleId;
    const article = (await getArticle(articleId)) as any;
    console.log(article.fields.tags);
    const articleFirstParagraph =
      article.fields.articleBody.content[0].content[0].value;
    const description =
      articleFirstParagraph.length > 100
        ? articleFirstParagraph.substring(0, 100) + "..."
        : articleFirstParagraph;
    const fileUrl = article.fields.thumbnail
      ? article.fields.thumbnail.fields.file.url
      : undefined;
    const categoryName = article.fields.category.fields.categoryName;
    const tagNames = article.fields.tags.map((tag: any) => tag.fields.tagName);
    const keywords =
      "Kenji Wilkins,Blog,Engineer," + categoryName + "," + tagNames.join(",");
    fs.readFile(__dirname + "/dist/index.html", "utf8", (err, htmlData) => {
      if (err) {
        console.error("Error during file reading", err);
        return res.status(404).end();
      }

      // inject meta tags
      htmlData = htmlData.replace(
        '<meta property="og:title" content="KW Blog" />',
        `<meta property="og:title" content="Kenji Wilkins - ${article.fields.title}" />`
      );
      htmlData = htmlData.replace(
        '<meta property="og:type" content="website" />',
        `<meta property="og:type" content="article" />`
      );
      htmlData = htmlData.replace(
        '<meta name="keywords" content="Kenji Wilkins,Blog,Engineer," />',
        `<meta name="keywords" content="${keywords}" />`
      );
      if (fileUrl) {
        htmlData = htmlData.replace(
          '<meta property="og:image" content="/logo.png" />',
          `<meta property="og:image" content="${HTTPS}${fileUrl}" />`
        );
        htmlData = htmlData.replace(
          '<meta name="twitter:image" content="/logo.png" />',
          `<meta name="twitter:image" content="${HTTPS}${fileUrl}" />`
        );
      }
      if (description) {
        htmlData = htmlData.replace(
          '<meta property="og:description" content="A blog by Kenji Wilkins" />',
          `<meta property="og:description" content="${description}" />`
        );
        htmlData = htmlData.replace(
          '<meta name="twitter:description" content="A blog by Kenji Wilkins" />',
          `<meta name="twitter:description" content="${description}" />`
        );
      }
      console.log(articleFirstParagraph);
      res.send(htmlData);
    });
  } catch (error) {
    if (error) {
      console.error(error);
      return res.status(404).end();
    }
  }
});

// return index.html to all routes
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(process.env.PORT || 443, () => {
  console.log(`Server started on port ${process.env.PORT || 443}`);
});
