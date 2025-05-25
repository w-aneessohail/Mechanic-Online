import { Router } from "express";
import requestServices_Controller from "../../controller/customer/request_Services.js";
import cust_AuthMiddleware from "../../middleware/customer/index.js";
const request_SRouter = Router();

request_SRouter.post(
  "/services",
  cust_AuthMiddleware,
  requestServices_Controller.create
);
request_SRouter.get("/services", requestServices_Controller.readAll);
request_SRouter.get("/servicesw", requestServices_Controller.readwhere);
// request_SRouter.get("/servicesc", requestServices_Controller.readcomplete);

request_SRouter.get(
  "/services/:serviceId",
  requestServices_Controller.readById
);
request_SRouter.put(
  "/services/:serviceId",
  // cust_AuthMiddleware,
  requestServices_Controller.update
);
request_SRouter.delete(
  "/services/:serviceId",
  // cust_AuthMiddleware,

  requestServices_Controller.delete
);
request_SRouter.put(
  "/services/:serviceId/location",
  // cust_AuthMiddleware,
  requestServices_Controller.update
);

export default request_SRouter;
