let Users = require('../../../../DB/users');

module.exports = {
	Query: {
		showUsers: () => {
			return Users;
		},
	},
};

/*

query{
  showUsers{
    firstName
    lastName
    admin
    phoneNumber
    email
    gender
    birthDate
    img
    password
    disabled
  }
}

*/
