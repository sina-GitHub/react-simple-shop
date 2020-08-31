const Post = require("../../../../database/models/post.model");
const checkAuth = require("../../actions/checkAuth");

const { UserInputError } = require("apollo-server");

module.exports = {
  Mutation: {
    async createComment(parent, args, context) {
      const { postId, body } = args;
      const user = checkAuth(context);

      if (body.trim() === "") {
        throw new UserInputError("Empty comment", {
          errors: {
            body: "comment body must not be empty",
          },
        });
      }

      const post = await Post.findById(postId);

      if (post) {
        post.comments.unshift({
          body,
          username: user.username,
          createdAt: new Date().toISOString(),
        });
        await post.save();
        return post;
      } else throw new UserInputError("post not found");
    },
    // ######################## end of createComment ########################
  },
};
/*

mutation{
  createComment(postId:"5eca4b2c0ff06d11d4ce8a25" body:"bad..."){
    id
    body
    comments{
      id
      username
      body
      createdAt
    }
  }
}

{
  "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlY2E0YjAxMGZmMDZkMTFkNGNlOGEyNCIsImVtYWlsIjoidXNlcjJAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzYW1hbiIsImlhdCI6MTU5MDMyNTYwMiwiZXhwIjoxNTkwMzI5MjAyfQ.ZRPal3YksxyrW4M3aAMQgK7qGzVH0wGFX4ZYlbSozPc"
}




*/
