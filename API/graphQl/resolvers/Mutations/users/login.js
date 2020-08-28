const { UserInputError } = require("apollo-server");
const bycrypt = require("bcryptjs");

const User = require("../../../../database/models/users.model");
const loginValidator = require("../../actions/loginValidator");
const tokenGenerator = require("../../actions/tokenGenerator");

module.exports = {
  Mutation: {
    async login(parent, { username, password }) {
      //######################## Data Validation ########################
      const { valid, errors } = loginValidator(username, password);
      if (!valid) {
        throw new UserInputError("Error", { errors });
      }
      //################### check for user existance ###################
      const ExistingUser = await User.findOne({ username });
      if (!ExistingUser) {
        errors.general = "user not found";
        throw new UserInputError("user doesn't exist", { errors });
      }
      //################### decryption of password ###################
      const match = await bycrypt.compare(password, ExistingUser.password);
      if (!match) {
        errors.general = "password not found";
        throw new UserInputError("password is wrong", { errors });
      }
      //################## if validation succeded ##################
      const token = tokenGenerator(ExistingUser);
      return {
        ...ExistingUser._doc,
        // ExistingUser._doc contains email, createdAt and...
        id: ExistingUser._id,
        // ExistingUser._doc contains _id but we want an id
        token,
      };
    },
    // ######################## end of login ########################
  },
};

/*

mutation{
  login(username:"user1",password:"dddddd"){
    id
    email
    token
    username
    createdAt
  }
}

*/
