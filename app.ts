import express from "express";
import config from "config";
import mongoose from "mongoose";

const app = express();
const PORT: number = config.get("port");

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/personal/create", require("./routes/create.routes"));
app.use("/api/personal", require("./routes/app.routes"));
app.use("/api/channels/", require("./routes/create.routes"));
app.use("/api/data", require("./routes/data.routes"));

async function start(): Promise<void> {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    app.listen(PORT, (): void => {
      console.log(`Server started on port ${PORT}`);
    })
  } catch (error) {
    console.log("Sorry but something is wrong ", error.message);
    process.exit(1);
  }
}
start();