let Products = require('../../../../DB/products');

module.exports = {
	Query: {
		showProducts: () => {
			return Products;
		},
	},
};

/*

query{
  showProducts{
    firstName
    lastName
    admin
    phoneNumber
    gender
    birthDate
    img
    password
  }
}

*/
