import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";
import { addDummyAdmin } from "./controller/adminController.js";
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/admin", adminRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/student", studentRoutes);

const PORT = process.env.PORT || 5001;
app.get("/", (req, res) => {
  res.send("Hello to college erp API");
});

const startServer = () => {
  const server = app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );

  // Show a friendly message if the port is already occupied.
  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.error(
        `Port ${PORT} is already in use. Stop the existing server process, then restart.`
      );
      return;
    }

    console.error("Server startup error:", error.message);
  });
};

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    startServer();
    // Non-blocking async dummy admin creation
    addDummyAdmin().catch((err) => console.error("Dummy admin creation error:", err.message));
  })
  .catch((error) => console.log("Mongo Error", error.message));
