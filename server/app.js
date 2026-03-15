import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import adminRoutes from "./routes/adminRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";

const app = express();

const getAllowedOrigins = () => {
  const origins = [
    process.env.FRONTEND_URL,
    "http://localhost:3000",
    "http://localhost:5173",
  ];

  return origins.filter(Boolean);
};

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = getAllowedOrigins();

      // Allow non-browser requests and approved frontend URLs.
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use("/api/admin", adminRoutes);
app.use("/api/faculty", facultyRoutes);
app.use("/api/student", studentRoutes);

app.get("/", (req, res) => {
  res.send("Hello to college erp API");
});

export default app;
