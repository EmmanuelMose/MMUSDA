import express from "express";
import cors from "cors";
import youtubeRoutes from "./youtube/youtube.router.js";
import prayerRouter from "./prayerRequests/prayerRequests.router.js";
import sermonsRouter from "./sermons/sermons.router.js";

const initializeApp = () => {
  const app = express();

  const allowedOrigins = [
    "https://mmusda.vercel.app",
    "https://mmusdaadmin.vercel.app"
  ];

  app.use(express.json());

  app.use(cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE"]
  }));

  app.use("/sermons", sermonsRouter);
  app.use("/youtube", youtubeRoutes);
  app.use("/api/prayer-requests", prayerRouter);

  app.get("/", (req, res) => {
    res.send("Backend server is running with multi-frontend support!");
  });

  return app;
};

const app = initializeApp();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
