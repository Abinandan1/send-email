import express from "express";
import emailRouter from "./routes/email.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).json({ msg: "send email api" });
});

app.use("/api/v1", emailRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
