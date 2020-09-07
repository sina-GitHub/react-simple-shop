import React, { useContext } from "react";
import { Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useTranslation } from "react-i18next";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import { UserSearchContext } from "../data store/UserSearchStore";
import NotFound404 from "../components/NotFound404";
import "./styles/Users.css";

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
  let match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const [search, setSearch] = useContext(UserSearchContext);
  const { t } = useTranslation();
  const { loading, data } = useQuery(QUERY);

  // variables
  let renderUsers; // checks whether Users are rendered
  let renderInfo; // defines rendering between 404 OR users
  let fName; // checks for user firstName
  let lName; // checks for user LastName
  let fullName;
  let nameFound;
  let user = location.search.split("Query=").reverse()[0];

  // functions
  function handelQuery() {
    if (user) {
      let queryUser = "";
      let temp = user.split("%20");
      temp.map((item, index) => {
        if (index === temp.length - 1) return (queryUser += item);
        else {
          return (queryUser += item + " ");
        }
      });

      setSearch(queryUser);
    }
  }
  const inputValue = (e) => {
    setSearch(e.target.value);
    history.push(`/admin/users?Query=${e.target.value}`);
  };

  // conditional rendering based on API load...
  if (!loading && data) {
    renderUsers = data.showUsers.map((item, index) => {
      fName = item.firstName;
      lName = item.lastName;
      fullName = item.firstName + " " + item.lastName;
      nameFound = fullName !== "" && fullName.includes(search.toString());

      if (search === "") {
        return (
          <div key={index} className='users users-container'>
            <Link to={`${match.url}/${item.firstName + "-" + item.lastName}`}>
              <h1 className='users h1'>{`${fName} ${lName}`}</h1>
            </Link>

            <div className='users image-container'>
              <img
                src={require(`../assets/${item.img}`)}
                alt=''
                className='users image'
              />
            </div>
          </div>
        );
      }

      if (nameFound) {
        return (
          <div key={index} className='users users-container'>
            <Link to={`${match.url}/${item.firstName + "-" + item.lastName}`}>
              <h1 className='users h1'>{`${fName} ${lName}`}</h1>
            </Link>

            <div className='users image-container'>
              <img
                src={require(`../assets/${item.img}`)}
                alt=''
                className='users image'
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
      <form className='users search-bar' noValidate autoComplete='off'>
        <div className='users search'>
          <TextField
            id='filled-search'
            label={t("search the user")}
            type='search'
            variant='filled'
            value={search}
            onChange={(e) => inputValue(e)}
          />
        </div>
      </form>
      <Container className='users container-component'>
        <div>{renderInfo}</div>
      </Container>
    </div>
  );
}
