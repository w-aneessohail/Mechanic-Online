import { Router } from "express";
import job_CompletionController from "../controller/mechanic/jobCompletion.js";
// import mech_AuthMiddleware from "../middleware/mechanic/index.js";

const job_CompletionRouter = Router();

job_CompletionRouter.post(
  "/jobcompletion",
  // mech_AuthMiddleware,
  job_CompletionController.create
);
job_CompletionRouter.get(
  "/jobcompletion",
  // mech_AuthMiddleware,
  job_CompletionController.read
);

export default job_CompletionRouter;
