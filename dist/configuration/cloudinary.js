"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: "drdzyxgjd",
    api_key: "638321971618414",
    api_secret: "pb06gVcQ8FuT5wCGPSMT-HRxQ5Q",
    secure: true,
});
exports.default = cloudinary_1.v2;
