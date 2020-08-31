import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import Authentication from './pages/Authentication';
import Users from './pages/Users';
import User from './pages/User';

export default function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/admin/users" component={Users} />
			<Route exact path="/admin/users/:user" component={User} />
			<Route exact path="/admin" component={Admin} />
			<Route exact path="/authentication" component={Authentication} />
		</Switch>
	);
}
