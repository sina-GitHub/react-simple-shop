const Query = require("./Queries/Queries");
// const Mutation = require("./Mutations/Mutations");

module.exports = resolvers = {
  ...Query,
  // ...Mutation,
};

/*
  _we should use "...Query" if we use the whole exported object

  _we should use "Query" if we use:
   require("./Queries/all_queries/Queries").Query

*/
