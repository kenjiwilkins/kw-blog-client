import * as express from "express";
const ogs = require("open-graph-scraper");

const router = express.Router();
router.get("/ogp/:url", async (req, res) => {
  // decode url
  const url = decodeURIComponent(req.params.url);
  await ogs({ url }).then((data) => {
    const { error, result } = data;
    if (error) {
      return res.status(404).json(result);
    }
    return res.status(200).json(result);
  });
});

export { router as api };
