const {gql} = require('apollo-server');

module.exports = typeDefs = gql`
	type user {
		firstName: String!
		lastName: String!
		admin: Boolean!
		phoneNumber: String!
		email: String!
		gender: String!
		birthDate: String!
		img: String!
		password: String!
		disabled: Boolean!
	}

	type Query {
		showUsers: [user]
	}

	type Mutation {
		register(
			username: String!
			email: String!
			password: String!
			confirm: String!
		): user
	}
`;
