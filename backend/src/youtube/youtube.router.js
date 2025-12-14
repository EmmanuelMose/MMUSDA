import express from "express";
import { getLatestVideo } from "../controllers/youtube.controller.js";

const youtubeRouter = express.Router();

router.get("/latest", getLatestVideo);

export default youtubeRouter;
