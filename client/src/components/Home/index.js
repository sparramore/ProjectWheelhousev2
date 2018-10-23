import React, { Component } from "react";
import "./style.css";
import Dashboard from "../Dashboard/Dashboard"
import KnowledgeList from "../KnowledgeList/KnowledgeList"
import About from '../About/About'
import Article from '../Articles/Articles'

import Button from '@material-ui/core/Button'
import { AppBar } from "@material-ui/core";




export default class Home extends React.Component {

	constructor(props)
	{
		super(props);
		this.state = { currentState: 0, open: false}
		this.toggleButton = this.toggleButton.bind(this);
		this.handleMenuCick = this.handleMenuCick.bind(this);
		this.handleMenuSelection = this.handleMenuSelection.bind(this);
		this.Rendermain = this.Rendermain.bind(this);
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

	

	Rendermain= () => 
	{
	if(this.state.currentState == 1)
	{
		console.log("got into if");
		return(
		<div>
			<Dashboard MenuClick={this.handleMenuCick} open={this.state.open} toggleButton={this.toggleButton} MenuSelection={this.handleMenuSelection} />
			<KnowledgeList ObjectClick={this.handleObjectClick} />
		</div>);
	}
	else if(this.state.currentState == 0) 
	{
		console.log("getting into about");
		return(
		<div>
			<Dashboard MenuClick={this.handleMenuCick} open={this.state.open} toggleButton={this.toggleButton} MenuSelection={this.handleMenuSelection} />
			<About />
		</div>);
	}
	else if(this.state.currentState == 2)
	{
		console.log("getting into about");
		return(
		<div>
			<Dashboard MenuClick={this.handleMenuCick} open={this.state.open} toggleButton={this.toggleButton} MenuSelection={this.handleMenuSelection} />
			<Article />
		</div>);
	}
}

	render(){

		return (	
			<div>
				{this.Rendermain()}
			</div>				
		);
	}

};