import React, { Component } from "react";
import "./Dashboard.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dropdown from "../DropDown/dropdown"



export default class Dashboard extends React.Component {

	constructor(props)
	{
		super(props);
	}
	componentDidMount() {

	}

	HandleClose()
	{
	}

	render() {
		return (
			<div>
				<AppBar>
					<Toolbar>
						<Dropdown HandleClick={this.props.MenuClick} open={this.props.open} toggleButton={this.props.toggleButton} MenuSelection={this.props.MenuSelection}></Dropdown>
						<Typography variant="headline">
							Project Wheelhouse
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
		);
	}

};