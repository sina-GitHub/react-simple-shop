import React from "react";
import {
  Toolbar,
  // InputBase,
  makeStyles,
  fade,
//   Hidden,
  Typography,
} from "@material-ui/core";
// import SearchIcon from '@material-ui/core/Icon';
import { ExitToApp, Translate } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import internetLogo from "../../assets/images/internet.png";
import "./Navbar.css";

import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#eee",
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: "0 10px 0 0 ",
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "115px",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "30ch",
      },
    },
    [theme.breakpoints.up("md")]: {
      width: "12ch",
      "&:focus": {
        width: "60ch",
      },
    },
  },
  "navbar-icon": {
    cursor: "pointer",
    [theme.breakpoints.up("xs")]: {
      margin: "0 5px !important",
    },
    [theme.breakpoints.up("md")]: {
      margin: "0 10px 0 0 !important",
    },
  },
}));

export default function CustomAppBar() {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const history = useHistory();

  return (
    <Toolbar variant='dense'>
      <Typography variant='h6' className={classes.title}>
        <img className='img-logo' src={internetLogo} alt='404' />
      </Typography>

      {/* <Hidden only={['xs', 'sm']}>
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder={t('search')}
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						inputProps={{'aria-label': 'search'}}
					/>
				</div>
			</Hidden> */}

      <div className='navbar-routes'>
        <Link className={classes["navbar-icon"]} to='/'>
          {t("home")}
        </Link>

        <Link className={classes["navbar-icon"]} to='/about'>
          {t("about")}
        </Link>

        <Link className={classes["navbar-icon"]} to='/admin/users'>
          {t("users")}
        </Link>
      </div>

      <div className='translate'>
        <Translate className={classes["navbar-icon"]} />
        <div className='translate-box'>
          <div className='translate-langs'>
            <div
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              English
            </div>
            <div
              onClick={() => {
                i18n.changeLanguage("fa");
              }}
            >
              فارسی
            </div>
          </div>
        </div>
      </div>

      <span className={classes["navbar-icon"]}>
        <ExitToApp onClick={() => history.push("/authentication")} />
      </span>

      <Drawer />
    </Toolbar>
  );
}
