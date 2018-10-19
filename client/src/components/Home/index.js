import React, { Component } from "react";
import "./style.css";
import Dashboard from "../Dashboard/Dashboard"
import KnowledgeList from "../KnowledgeList/KnowledgeList"


function Rendermain(props)
{
	console.log("currentState: " + props.state)
	if(props.state== 0)
	{
		console.log("got into if");
		return(<KnowledgeList></KnowledgeList>);
	}
	else if(props.state == 1) 
	{
		return null;
	}
	else if(props.state == 2)
	{
		return null;
	}
}

export default class Home extends React.Component {

	constructor(props)
	{
		super(props);
		this.state = { currentState: 0, open: false}
		this.toggleButton = this.toggleButton.bind(this);
		this.handleMenuCick = this.handleMenuCick.bind(this);
		this.handleMenuSelection = this.handleMenuSelection.bind(this);
		Rendermain = Rendermain.bind(this);
	}

	handleMenuCick()
	{
		this.setState(state => ({ open: false }));
		console.log("Item Clicked");
	}

	handleMenuSelection(callback)
	{
		console.log("changing the state to " + callback);
		this.setState(state => ({  open: false, currentState: callback }));
	}

	toggleButton()
	{
		console.log("toggling");
		this.setState(state => ({ open: !state.open }));
	}



	render(){

		return (
			<div>
				<Dashboard MenuClick={this.handleMenuCick} open={this.state.open} toggleButton={this.toggleButton} MenuSelection={this.handleMenuSelection}> </Dashboard>
				<Rendermain state={this.state.currentState}></Rendermain>
			</div>
		);
	}

};