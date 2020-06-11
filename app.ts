import express from "express";
import config from "config";

const app = express();
const PORT = config.get("port");

app.get("/", (req, res) => {
  res.send("Hello from ProList 📝");
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})