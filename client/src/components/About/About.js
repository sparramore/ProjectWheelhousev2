import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const appStyle = {
	paddingTop: '100%'
  };


export default class About extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount()
    {

    }

    handleClick = () => {

    };

    render() {
        console.log("rendering");
        return (
            <div>
                <Paper style={appStyle}>
                
                </Paper>
            </div>

        );
    }
}