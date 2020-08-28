const Post = require("app/models/post.model");
const checkAuth = require("api/actions/checkAuth");
const { AuthenticationError } = require("apollo-server");

module.exports = {
  Mutation: {
    async deletePost(parent, args, context) {
      let { postId } = args;
      const user = checkAuth(context);
      const post = await Post.findById(postId);
      try {
        if (user.username === post.username) {
          post.delete();
          return "deleted";
        } else {
          throw new AuthenticationError("action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    // ######################## end of deletePost ########################
  },
};

/*
mutation{
  deletePost(postId: "5ec3f905b1811c29d8051b19")
}
{
  "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzM5NDYwNGMzNDFjMDgzYzMwMGU5OSIsImVtYWlsIjoidXNlcjFAZ21haWwuY29tIiwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTU4OTkwMTEzNywiZXhwIjoxNTg5OTA0NzM3fQ.mnKV_ri-MdIXS8jeNjYWPbLIpCPgmWUJVT0eD13Oggw"
}

*/
