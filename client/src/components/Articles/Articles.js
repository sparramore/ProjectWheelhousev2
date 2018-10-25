import React, { Component } from "react";
import API from "../../utils/API";

export default class Article extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
          ArcticleList: [],
        }
    }

    componentDidMount()
    {
      API.getArticles().then( res => 
        {
            console.log(res.data);
            console.log("setting the state");
            this.setState({ArcticleList:res.data});
        });
    }
    
    
    render() {
      return (
        <div>
          
        </div>
      );
    }
  }