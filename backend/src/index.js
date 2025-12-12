import express from "express";
import cors from "cors";

// Routers
import sermonsRouter from "./sermons/sermons.router.js";

const initializeApp = () => {
  const app = express();

  const allowedOrigins = [
    "https://mmusda.vercel.app",
    "https://mmusdaadmin.vercel.app"
  ];

  // Middleware
  app.use(express.json());
  app.use(cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) callback(null, true);
      else callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE"]
  }));

  // Routers
  app.use("/sermons", sermonsRouter);

  // Default route
  app.get("/", (req, res) => {
    res.send("Backend server is running with multi-frontend support!");
  });

  return app;
};

const app = initializeApp();
export default app;
