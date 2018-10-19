import React, { Component } from "react";
import "./Dashboard.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dropdown from "../DropDown/dropdown"



export default class Dashboard extends Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<AppBar>
					<Toolbar>
						<Dropdown></Dropdown>
						<Typography variant="headline">
							Project Wheelhouse
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
		);
	}

};