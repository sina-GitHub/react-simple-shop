import React, {useContext} from 'react';
import {Container} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {useTranslation} from 'react-i18next';
import {useLocation, useHistory} from 'react-router-dom';
import {useQuery, gql} from '@apollo/client';

import {UserSearchContext} from '../data store/UserSearchStore';
import NotFound404 from '../components/Users404';
import './styles/Users.css';

const QUERY = gql`
	query {
		showUsers {
			firstName
			lastName
			img
		}
	}
`;

export default function Users() {
	// React Hooks
	const location = useLocation();
	const history = useHistory();
	const [search, setSearch] = useContext(UserSearchContext);
	const {t} = useTranslation();
	const {loading, data} = useQuery(QUERY);

	// variables
	let renderUsers; // checks whether Users are rendered
	let renderInfo; // defines rendering between 404 OR users
	let fName; // checks for user firstName
	let lName; // checks for user LastName
	let fNameFound; // searchs for user firstName
	let lNameFound; // searchs for user lastName
	let itemFound; // checks whether user is found(fName or lName)
	let user = location.search.split('Query=').reverse()[0];

	// functions
	function handelQuery() {
		if (user) {
			setSearch(user);
		}
	}
	const inputValue = (e) => {
		setSearch(e.target.value);
		history.push(`/users?Query=${e.target.value}`);
	};

	// conditional rendering based on API load...
	if (!loading && data) {
		renderUsers = data.showUsers.map((item, index) => {
			fName = item.firstName;
			lName = item.lastName;
			fNameFound = fName !== '' && fName.includes(search.toString());
			lNameFound = lName !== '' && lName.includes(search.toString());
			itemFound = fNameFound || lNameFound;

			if (search === '') {
				return (
					<div key={index} className="users users-container">
						<div className="users h1-container">
							<h1 className="users h1">{`${fName} ${lName}`}</h1>
						</div>

						<div className="users image-container">
							<img
								src={require(`../assets/${item.img}`)}
								alt=""
								className="users image"
							/>
						</div>
					</div>
				);
			}

			if (itemFound) {
				return (
					<div key={index} className="users users-container">
						<div className="users h1-container">
							<h1 className="users h1">{`${fName} ${lName}`}</h1>
						</div>

						<div className="users image-container">
							<img
								src={require(`../assets/${item.img}`)}
								alt=""
								className="users image"
							/>
						</div>
					</div>
				);
			}

			return null;
		});

		if (renderUsers.every((value) => value === null)) {
			renderInfo = <NotFound404 />;
		} else {
			renderInfo = renderUsers;
		}
	} else {
		return <NotFound404 />;
	}

	// component main code
	return (
		<div onLoad={() => handelQuery()}>
			<form className="users search-bar" noValidate autoComplete="off">
				<div className="users search">
					<TextField
						id="filled-search"
						label={t('search the user')}
						type="search"
						variant="filled"
						value={search}
						onChange={(e) => inputValue(e)}
					/>
				</div>
			</form>
			<Container className="users container-component">
				<div>{renderInfo}</div>
			</Container>
		</div>
	);
}
