"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../routes/routes");
const cors_1 = __importDefault(require("cors"));
const port = process.env.port || 2031;
const app = (0, express_1.default)();
app.use(express_1.default.json());
require("../configuration/database");
app.use((0, cors_1.default)({ origin: "*" }));
app.get("/", (req, res) => {
    res.status(200).json({
        message: "...😒",
    });
});
app.use("/", routes_1.router);
app.listen(port, () => {
    console.log("...😒:", port);
});
