import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './Routs';
import Navbar from './components/Navbar/Navbar';
import UserSearchStore from './data store/UserSearchStore';

export default function App() {
	return (
		<UserSearchStore>
			<Router>
				<Navbar />
				<Routes />
			</Router>
		</UserSearchStore>
	);
}
