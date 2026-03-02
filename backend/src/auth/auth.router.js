import express from "express";
import { register, verify, login, requestReset, resetPassword } from "./auth.controller.js";

export const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/verify", verify);
authRouter.post("/login", login);
authRouter.post("/forgot-password", requestReset);
authRouter.post("/reset-password", resetPassword);