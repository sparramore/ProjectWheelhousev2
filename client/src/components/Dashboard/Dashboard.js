import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dropdown from "../DropDown/dropdown"
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';


const appStyle = {
	position: 'relative'
  };


class Dashboard extends React.Component {

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
			
			<AppBar style={appStyle}>
				<Toolbar>
					<Dropdown HandleClick={this.props.MenuClick} open={this.props.open} toggleButton={this.props.toggleButton} MenuSelection={this.props.MenuSelection}></Dropdown>
					<Typography variant="headline">
						Project Wheelhouse
					</Typography>
				</Toolbar>
			</AppBar>
		);
	}

};

export default (Dashboard)