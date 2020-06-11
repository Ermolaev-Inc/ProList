import express from "express";
import config from "config";
import mongoose from "mongoose";

const app = express();
const PORT = config.get("port");

app.get("/", (req, res) => {
  res.send("Hello from ProList 📝");
})

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    })
  } catch (error) {
    console.log("Sorry but something is wrong ", error.message);
    process.exit(1);
  }
}
start();