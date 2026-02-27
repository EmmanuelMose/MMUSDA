import express from "express";
import {
  createOfferingController,
  getAllOfferingsController,
  getByPhoneAndNameController,
  deleteOfferingController
} from "./offering.controller.js";

const offeringsRouter = express.Router();

offeringsRouter.post("/", createOfferingController);
offeringsRouter.get("/", getAllOfferingsController);
offeringsRouter.get("/search", getByPhoneAndNameController);
offeringsRouter.delete("/:id", deleteOfferingController);

export default offeringsRouter;