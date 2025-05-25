import { Router } from "express";
import multer from "multer";
import mech_ImageController from "../../controller/mechanic/images.js";
import mech_AuthMiddleware from "../../middleware/mechanic/index.js";

const mech_ImageRouter = Router();

const mech_Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/mechanic/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
const upload = multer({ storage: mech_Storage });
mech_ImageRouter.post(
  "/upload-image",
  // mech_AuthMiddleware,
  upload.single("image"),
  mech_ImageController.uploadImage
);
mech_ImageRouter.get(
  "/get-image",
  // mech_AuthMiddleware,
  mech_ImageController.getImage
);

export default mech_ImageRouter;
