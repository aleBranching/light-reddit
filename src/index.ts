import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
// import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config";
import { Post } from "./entities/Post";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";

import express from "express";
import { PostResolver } from "./resolvers/post";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();

  const app = express();

  app.get("/", (_, res) => {
    res.json({ message: "hello there" });
  });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log("server has started on localhost:4000");
  });

  const emFork = orm.em.fork(); // <-- create the fork

  // const post = emFork.create(Post, { title: "my first post" });

  // await emFork.persistAndFlush(post);
  // let result = await emFork.find(Post , {});

  // console.log(result);

  // orm.em.create(Post, {title: "my first post"})
};

main().catch((err) => {
  console.error(err);
});
