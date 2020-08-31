import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import App from './App';

const client = new ApolloClient({
	uri: 'http://localhost:5000',
	cache: new InMemoryCache(),
});

// query test
// client
// 	.query({
// 		query: gql`
// 			query {
// 				showUsers {
// 					firstName
// 					lastName
// 					admin
// 					phoneNumber
// 					email
// 					gender
// 					birthDate
// 					img
// 					password
// 					disabled
// 				}
// 			}
// 		`,
// 	})
// 	.then((result) => console.log(result))
// 	.catch(() => console.log('fail...'));

export default function Apollo() {
	return (
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	);
}
