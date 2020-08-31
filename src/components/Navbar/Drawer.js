import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {Hidden} from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
	list: {
		width: 260,
	},
	fullList: {
		width: 'auto',
	},
	menuicon: {
		cursor: 'pointer',
		color: '#fff',
		margin: '0 0 0 5px !important',
	},
});

export default function TemporaryDrawer() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({...state, [anchor]: open});
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			{userProfile()}
			<Divider />
			<List>
				{/* {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
				<ListItem button>
					<ListItemText>
						<Link to="/">Home</Link>
					</ListItemText>
				</ListItem>

				<ListItem button>
					<ListItemText>
						<Link to="/about">About</Link>
					</ListItemText>
				</ListItem>

				<ListItem button>
					<ListItemText>
						<Link to="/admin/users">Admin</Link>
					</ListItemText>
				</ListItem>
			</List>
		</div>
	);

	return (
		<div>
			<Hidden only={['sm', 'md', 'lg', 'xl']}>
				{['left'].map((anchor) => (
					<React.Fragment key={anchor}>
						<MenuIcon
							className={classes.menuicon}
							onClick={toggleDrawer(anchor, true)}
						/>

						<Drawer
							anchor={anchor}
							open={state[anchor]}
							onClose={toggleDrawer(anchor, false)}
						>
							{list(anchor)}
						</Drawer>
					</React.Fragment>
				))}
			</Hidden>
		</div>
	);
}

function userProfile() {
	return (
		<div
			style={{
				height: '200px',
				display: 'flex',
				justifyContent: 'center',
				textAlign: 'center',
			}}
		>
			<AccountCircleIcon
				style={{
					width: '100px',
					height: '100px',
					margin: 'auto',
				}}
			/>
		</div>
	);
}
