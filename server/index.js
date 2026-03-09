import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./db.js";
import { addDummyAdmin } from "./controller/adminController.js";

dotenv.config();

const PORT = process.env.PORT || 5001;

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

connectDB()
  .then(() => {
    startServer();
    // Non-blocking async dummy admin creation
    addDummyAdmin().catch((err) =>
      console.error("Dummy admin creation error:", err.message)
    );
  })
  .catch((error) => console.log("Mongo Error", error.message));
