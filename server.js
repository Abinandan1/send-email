import express from "express";
import emailRouter from "./routes/email.js";
import morgan from "morgan";

const app = express();

app.use(express.json());

app.use(morgan("tiny"));

app.use("/api/v1", emailRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
