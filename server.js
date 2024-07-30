import express from "express";
import emailRouter from "./routes/email.js";
import morgan from "morgan";

const app = express();

app.use(express.json());

app.use(morgan("tiny"));

app.use("/api/v1", emailRouter);

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
