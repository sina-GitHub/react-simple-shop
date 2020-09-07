const showUsers = require("./users/showUsers").Query;

module.exports = {
  Query: {
    ...showUsers,
  },
};
