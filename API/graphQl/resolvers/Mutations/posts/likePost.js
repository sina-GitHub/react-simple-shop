const Post = require("app/models/post.model");
const checkAuth = require("api/actions/checkAuth");

const { UserInputError } = require("apollo-server");

module.exports = {
  Mutation: {
    async likePost(parent, args, context) {
      const { postId } = args;
      const { username } = checkAuth(context);

      const post = await Post.findById(postId);
      if (post) {
        if (post.likes.find((like) => like.username === username)) {
          // Post already likes, unlike it
          post.likes = post.likes.filter((like) => like.username !== username);
        } else {
          // Not liked, like post
          post.likes.push({
            username,
            createdAt: new Date().toISOString(),
          });
        }

        await post.save();
        return post;
      } else throw new UserInputError("Post not found");
    },
    // ######################## end of likePost ########################
  },
};

/*

mutation{
  likePost(postId:"5eca4b2c0ff06d11d4ce8a25"){
    id
    body
    likes{
      id
      username
    }
  }
}


*/
