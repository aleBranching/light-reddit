"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const Post_1 = require("./entities/Post");
const path_1 = __importDefault(require("path"));
exports.default = {
    entities: [Post_1.Post],
    dbName: "light-reddit",
    user: "postgres",
    password: "postgres",
    type: "postgresql",
    migrations: {
        path: path_1.default.join(__dirname, "./migrations"),
        glob: "!(*.d).{js,ts}",
    },
    debug: !constants_1.__prod__,
};
console.log(__dirname);
//# sourceMappingURL=mikro-orm.config.js.map