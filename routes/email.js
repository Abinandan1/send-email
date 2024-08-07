import express from "express";
import { sendEmail } from "../controllers/sendEmail.js";

const router = express.Router();

router.post("/email", sendEmail);

export default router;
