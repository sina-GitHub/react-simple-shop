const register = require("./users/register").Mutation;

module.exports = {
  Mutation: {
    ...register,
  },
};
