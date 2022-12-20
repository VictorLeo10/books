"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coverImageUpload = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (request, file, cb) => {
        cb(null, "uploads");
    },
    filename: (request, file, cb) => {
        cb(null, file.originalname);
    },
});
const coverImageUpload = (0, multer_1.default)({
    storage: storage,
}).single("CoverImage");
exports.coverImageUpload = coverImageUpload;
