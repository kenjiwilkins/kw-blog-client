import * as express from "express";
import rateLimit from "express-rate-limit";
import * as logger from "morgan";

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

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// return index.html to all routes
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
