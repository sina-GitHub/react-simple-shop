const Post = require("app/models/post.model");
const checkAuth = require("api/actions/checkAuth");

module.exports = {
  Mutation: {
    async createPost(parent, args, context) {
      /*
        we use context for:
        1-protected resolvers
        2-to access req,res of express
      */
      let { body } = args;
      const user = checkAuth(context);

      const newPost = new Post({
        body,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString(),
      });

      return await newPost.save();
    },
    // ######################## end of createPost ########################
  },
};

/*

mutation{
  createPost(body:"text Body2..."){
    id
    body
    username
    createdAt
  }
}

{
  "authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzk2MmM2MGI1OWYzMGY3MGM4MjFjMSIsImVtYWlsIjoidXNlcjFAZ21haWwuY29tIiwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTU5MDI1NjQzMCwiZXhwIjoxNTkwMjYwMDMwfQ.lCDmV04dzNjrL2Tk4d_IwXhBxG1zZCKvYBJWOLLmXS8.eyJpZCI6IjVlYzk2MmM2MGI1OWYzMGY3MGM4MjFjMSIsImVtYWlsIjoidXNlcjFAZ21haWwuY29tIiwidXNlcm5hbWUiOiJ1c2VyMSIsImlhdCI6MTU5MDI1NjMyNywiZXhwIjoxNTkwMjU5OTI3fQ.0jhfkNy-FFlKuCed1o9dXG2qeRH_do-8n8NpvZkmXB8"
}


*/
