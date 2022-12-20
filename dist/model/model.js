"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BookSchema = new mongoose_1.default.Schema({
    Author: String,
    Title: String,
    CoverImage: String,
    Summary: String,
    ISBN: String,
    Views: [],
    AuthorImage: String,
    Category: String,
}, { timestamps: true });
const dummyBooksModel = mongoose_1.default.model("dummybooks", BookSchema);
exports.default = dummyBooksModel;
