import { Router } from "express";
import multer from "multer";
import cust_ImageController from "../../controller/customer/images.js";
// import cust_AuthMiddleware from "../../middleware/customer/index.js";

const cust_ImageRouter = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/uploads/customer/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

cust_ImageRouter.post(
  "/upload-image",
  // cust_AuthMiddleware,
  upload.single("image"),
  cust_ImageController.uploadImage
);
cust_ImageRouter.get(
  "/get-image",
  // cust_AuthMiddleware,
  cust_ImageController.getImage
);

export default cust_ImageRouter;
