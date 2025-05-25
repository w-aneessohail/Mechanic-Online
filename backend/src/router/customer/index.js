import { Router } from "express";
import customerController from "../../controller/customer/index.js";
import cust_AuthMiddleware from "../../middleware/customer/index.js";

const customerRouter = Router();

customerRouter.post("/user", customerController.create);
customerRouter.get("/user", customerController.read);
customerRouter.put(
  "/user/:cust_id",
  // cust_AuthMiddleware,
  customerController.update
);
customerRouter.delete(
  "/user/:cust_id",
  // cust_AuthMiddleware,
  customerController.delete
);

export default customerRouter;
