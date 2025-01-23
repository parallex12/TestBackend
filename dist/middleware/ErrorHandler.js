"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const logger_js_1 = require("../utils/logger.js");
const ErrorHandler = (error, request, reply) => {
    logger_js_1.logger.error(error);
    reply.status(500).send({ error: "Something went wrong" });
};
exports.ErrorHandler = ErrorHandler;
