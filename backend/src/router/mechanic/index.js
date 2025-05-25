import { Router } from "express";
import mechanicController from "../../controller/mechanic/index.js";
import mech_AuthMiddleware from "../../middleware/mechanic/index.js";
const mechanicRouter = Router();

mechanicRouter.post("/mechanic", mechanicController.create);
mechanicRouter.get("/mechanic", mechanicController.read);
mechanicRouter.put(
  "/mechanic/:mech_id",
  // mech_AuthMiddleware,
  mechanicController.update
);
mechanicRouter.delete(
  "/mechanic/:mech_id",
  // mech_AuthMiddleware,
  mechanicController.delete
);

export default mechanicRouter;
