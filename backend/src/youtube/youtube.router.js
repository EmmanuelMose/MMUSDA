import express from "express";
import { getLatestVideo } from "../youtube/youtube.controller.js";

const youtubeRouter = express.Router();

// Use the correct router variable
youtubeRouter.get("/latest", getLatestVideo);

export default youtubeRouter;
