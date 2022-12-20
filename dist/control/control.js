"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMethod = exports.getoneMethod = exports.getallMethod = exports.postMethod = void 0;
const model_1 = __importDefault(require("../model/model"));
const cloudinary_1 = __importDefault(require("../configuration/cloudinary"));
const postMethod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Author, Title, Summary, 
        //   ISBN,
        //   Views,
        //   AuthorImage,
        Category, } = req.body;
        const cloudImage = yield cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
        const isbn1 = Math.floor(Math.random() * 10000);
        const isbn2 = Math.floor(Math.random() * 10000);
        const isbn3 = Math.floor(Math.random() * 10000);
        const isbn4 = Math.floor(Math.random() * 10000);
        const dataUpload = yield model_1.default.create({
            Author,
            Title,
            CoverImage: cloudImage.secure_url,
            Summary,
            ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
            //   Views,
            AuthorImage: Author.charAt(0).toUpperCase(),
            Category,
        });
        return res.status(200).json({
            message: "...😒",
            data: dataUpload,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `...😒:${error}`,
        });
    }
});
exports.postMethod = postMethod;
const getallMethod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBooks = yield model_1.default.find();
        return res.status(201).json({
            message: `...😒`,
            data: allBooks,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `...😒: ${error}`,
        });
    }
});
exports.getallMethod = getallMethod;
const getoneMethod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oneBook = yield model_1.default.findById(req.params.id);
        return res.status(201).json({
            message: `...😒`,
            data: oneBook,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `...😒: ${error}`,
        });
    }
});
exports.getoneMethod = getoneMethod;
const updateMethod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Author, Title, Summary, 
        //   ISBN,
        //   Views,
        //   AuthorImage,
        Category, } = req.body;
        const cloudImage = yield cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
        const isbn1 = Math.floor(Math.random() * 10000);
        const isbn2 = Math.floor(Math.random() * 10000);
        const isbn3 = Math.floor(Math.random() * 10000);
        const isbn4 = Math.floor(Math.random() * 10000);
        const replaceBook = yield model_1.default.findByIdAndUpdate(req.params.id, {
            Author,
            Title,
            CoverImage: cloudImage.secure_url,
            Summary,
            ISBN: `${isbn1}-${isbn2}-${isbn3}-${isbn4}`,
            //   Views,
            AuthorImage: Author.charAt(0).toUpperCase(),
            Category,
        }, { new: true });
        return res.status(201).json({
            message: `...😒`,
            data: replaceBook,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `...😒: ${error}`,
        });
    }
});
exports.updateMethod = updateMethod;
