const {ApolloServer} = require("apollo-server");

require("dotenv").config();
global.config = require("./config");

const typeDefs = require("./graphQl/typeDefs/typeDefs");
const resolvers = require("./graphQl/resolvers/resolvers");

new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => ({req}),
})
  .listen({port: config.PORT})
  .then((res) => {
    console.log(`Server started at ${res.url}`);
  })
  .catch(() => {
    console.log(`Failed to start at ${config.PORT}`);
  });
