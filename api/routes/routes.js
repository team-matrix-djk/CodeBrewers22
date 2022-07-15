import { Router } from "express";
import { helloWorldController } from "../controllers/controllers.js";

const router = Router();

router.get("/helloworld", helloWorldController);

export default router;
