import React, {useContext} from "react";
import {Container} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {useTranslation} from "react-i18next";
import {useLocation, useHistory} from "react-router-dom";

import {users} from "../assets/mock data/users";
import {UserSearchContext} from "../data store/UserSearchStore";
import NotFound404 from "../components/Users404";
import "./styles/Users.css";

export default function Users() {
  const location = useLocation();
  const history = useHistory();
  const [search, setSearch] = useContext(UserSearchContext);
  const {t} = useTranslation();

  let user = location.search.split("Query=").reverse()[0];
  function handelQuery() {
    if (user) {
      setSearch(user);
    }
  }

  const inputValue = (e) => {
    setSearch(e.target.value);
    history.push(`/users?Query=${e.target.value}`);
  };

  let renderInfo;

  const renderUsers = users.map((item, index) => {
    if (search === "") {
      return (
        <div key={index} className="users users-container">
          <div className="users h1-container">
            <h1 className="users h1">{`${item.firstName} ${item.lastName}`}</h1>
          </div>

          <div className="users image-container">
            <img src={item.img} alt="" className="users image" />
          </div>
        </div>
      );
    }

    if (item.firstName !== "" && item.firstName === search.toString()) {
      return (
        <div key={index} className="users users-container">
          <div className="users h1-container">
            <h1 className="users h1">{`${item.firstName} ${item.lastName}`}</h1>
          </div>

          <div className="users image-container">
            <img src={item.img} alt="ASD" className="users image" />
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

  return (
    <div onLoad={() => handelQuery()}>
      <form className="users search-bar" noValidate autoComplete="off">
        <div className="users search">
          <TextField
            id="filled-search"
            label={t("search the user")}
            type="search"
            variant="filled"
            value={search}
            onChange={(e) => inputValue(e)}
          />
        </div>
      </form>
      <Container className="users container-component">{renderInfo}</Container>
    </div>
  );
}
