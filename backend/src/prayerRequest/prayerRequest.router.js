import express from "express";
import * as prayerController from "./prayerRequests.controller.js";

const prayerRouter = express.Router();

prayerRouter.post("/", prayerController.createPrayerRequest);
prayerRouter.get("/public", prayerController.getPublicPrayerRequests);

export default prayerRouter;
