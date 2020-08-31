const User = require("../../../../database/models/users.model");

module.exports = {
  Mutation: {
    async register(parent, args, context, info) {
      const { username, email, password } = args;

      const new_user = new User({
        username,
        email,
        password,
        date: new Date().toISOString(),
      });

      await new_user.save();

      return {
        id: new_user._id,
        username,
        nickname: new_user.nickname,
        email,
        admin: new_user.admin,
        date: new_user.date,
        phoneNumber: new_user.phoneNumber,
      };

      // ######################## end of register ########################
    },
  },
};

/*

mutation{
  register(username:"33" email:"33" password:"asd12" confirm:"1"){
    id
    username
    nickname
    email
    admin
    date
    phoneNumber
  }
}

*/
