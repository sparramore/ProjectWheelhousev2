import React, { Component } from "react";
import "./style.css";
import Dashboard from "../Dashboard/Dashboard"



export default class Home extends Component {

	handleMenuCick()
	{
		
	}

	render(){
		return (
			<div>
				<Dashboard MenuClick={this.handleMenuCick}> </Dashboard>
			</div>
		);
	}

};