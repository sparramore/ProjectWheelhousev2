import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const appStyle = {
	paddingTop: '10%'
  };


export default class About extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount()
    {
        console.log("component mounted");

    }

    handleClick = () => {

    };

    render() {
        console.log("rendering");
        return (
            <div>
                <Paper style={appStyle}>
                
                </Paper>
                <Button className="SubmitButton" onClick={this.handleClick}>
                Sign Up!
                </Button>
            </div>

        );
    }
}