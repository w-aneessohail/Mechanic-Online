import { Router } from "express";
import categories_Controller from "../../controller/mechanic/categories.js";
import mech_AuthMiddleware from "../../middleware/mechanic/index.js";
const categoriesRouter = Router();

categoriesRouter.post(
  "/categories",
  // mech_AuthMiddleware,
  categories_Controller.create
);
categoriesRouter.get(
  "/categories",
  mech_AuthMiddleware,
  categories_Controller.read
);

export default categoriesRouter;
