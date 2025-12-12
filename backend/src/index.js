// src/index.js
import express from "express";
import cors from "cors";

// Routers (function-style import; exported as default)
import sermonsRouter from "./routes/sermons.router.js";

const initializeApp = () => {
  const app = express();

  // Allowed frontend origins
  const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
  ];

  // Middleware
  app.use(express.json());

  app.use(
    cors({
      origin: (origin, callback) => {
        // Allow requests with no origin (like Postman)
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );

  // Register routers
  sermonsRouter(app);

  // Default route
  app.get("/", (req, res) => {
    res.send("Backend server is running with multi-frontend support!");
  });

  return app;
};

const app = initializeApp();
export default app;
