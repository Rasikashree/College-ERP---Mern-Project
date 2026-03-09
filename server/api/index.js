import dotenv from "dotenv";
import app from "../app.js";
import { connectDB } from "../db.js";
import { addDummyAdmin } from "../controller/adminController.js";

dotenv.config();

let dummyAdminInitialized = false;

export default async function handler(req, res) {
  try {
    await connectDB();

    if (!dummyAdminInitialized) {
      dummyAdminInitialized = true;
      addDummyAdmin().catch((err) =>
        console.error("Dummy admin creation error:", err.message)
      );
    }

    return app(req, res);
  } catch (error) {
    console.error("Serverless handler error:", error.message);
    return res.status(500).json({ backendError: "Server initialization failed" });
  }
}
