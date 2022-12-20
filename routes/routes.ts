import { Router } from "express";
import {
  postMethod,
  getoneMethod,
  getallMethod,
  updateMethod,
} from "../control/control";
import { coverImageUpload } from "../configuration/multer";

const router = Router();

router.route("/onebook/:id").get(getoneMethod);
router.route("/allbooks").get(getallMethod);
router.route("/newbook").post(coverImageUpload, postMethod);
router.route("/replacebook/:id").patch(coverImageUpload, updateMethod);

export { router };
