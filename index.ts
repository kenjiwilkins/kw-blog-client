import * as express from "express";

const app = express();
app.use(express.static(__dirname + "/dist"));

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
