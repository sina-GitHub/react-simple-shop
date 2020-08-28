const Post = require("app/models/post.model");
const checkAuth = require("api/actions/checkAuth");

const { UserInputError, AuthenticationError } = require("apollo-server");

module.exports = {
  Mutation: {
    async deleteComment(parent, args, context) {
      const { postId, commentId } = args;
      const { username } = checkAuth(context);
      const post = await Post.findById(postId);

      if (post) {
        const commentIndex = post.comments.findIndex(
          (cm) => cm.id === commentId
        );
        if (post.comments[commentIndex].username === username) {
          post.comments.splice(commentIndex, 1);
          await post.save();

          return post;
        } else throw new AuthenticationError("action not allowed");
      } else {
        throw new UserInputError("post not found");
      }
    },
    // ######################## end of deleteComment ########################
  },
};

/*

mutation{
  deleteComment(postId:"5eca4b2c0ff06d11d4ce8a25" commentId:"5eca72f1520b45256c98daa0"){
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
