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
const auth_1 = __importDefault(require("../modules/auth"));
const user_1 = __importDefault(require("../modules/user"));
const summary_1 = __importDefault(require("../modules/finance/summary"));
const invoice_1 = __importDefault(require("../modules/invoice"));
const AppRoutes = (app) => {
    (0, auth_1.default)(app);
    (0, user_1.default)(app);
    (0, summary_1.default)(app);
    (0, invoice_1.default)(app);
    app.get("/", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        reply.send({ message: "API is running" });
    }));
};
exports.default = AppRoutes;
