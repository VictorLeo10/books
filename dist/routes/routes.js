"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const control_1 = require("../control/control");
const multer_1 = require("../configuration/multer");
const router = (0, express_1.Router)();
exports.router = router;
router.route("/onebook/:id").get(control_1.getoneMethod);
router.route("/allbooks").get(control_1.getallMethod);
router.route("/newbook").post(multer_1.coverImageUpload, control_1.postMethod);
router.route("/replacebook/:id").patch(multer_1.coverImageUpload, control_1.updateMethod);