import express from "express";
import FamiliesController from "./families.controller.js";
import multer from "multer";
import path from "path";

const familiesRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

familiesRouter.get("/", FamiliesController.getAll);
familiesRouter.post("/", upload.single("photo"), FamiliesController.create);
familiesRouter.put("/:id", upload.single("photo"), FamiliesController.update);
familiesRouter.delete("/:id", FamiliesController.delete);

export default familiesRouter;