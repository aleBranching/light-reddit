import { Query, Resolver } from "type-graphql";
import { Post } from "src/entities/Post";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  getAllPosts() {
    return [Post];
  }
}
