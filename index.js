const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
  console.log("HomePage Model!!");
  res.send("You are on the HomePage!!!");
});

app.listen(8080, async () => {
  console.log("Listening on the port 8080!!");
});
