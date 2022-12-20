"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const liveURI = "mongodb+srv://firstdatabaseUser:database10@cluster0.bthnwpa.mongodb.net/?retryWrites=true&w=majority";
mongoose_1.default.connect(liveURI);
mongoose_1.default.connection
    .on("open", () => {
    console.log("...😒: connected");
})
    .once("error", (error) => {
    console.log("...😒 failed to connect:", error);
});
