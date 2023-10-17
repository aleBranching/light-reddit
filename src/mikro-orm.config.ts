import { Options } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";

export default {
  entities: [Post],
  dbName: "light-reddit",
  user: "postgres",
  password: "postgres",

  type: "postgresql",
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    // pathTs: undefined, // path to the folder with TS migrations (if used, we should put path to compiled files in `path`)
    glob: "!(*.d).{js,ts}",
  },
  debug: !__prod__,
} as Options;

// bob.password;
console.log(__dirname);
