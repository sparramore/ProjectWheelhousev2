import React, { Component } from "react";
import "./KnowledgeList.css";
import KnowledgeBubble from "./KnowledgeBubble"
import API from "../../utils/API";

/*
pull information for all of the knowledge from the database
loop through the information and make a knowledgebubble for each
pass in whatever information we are going to show in the cards
*/



export default class KnowledgeList extends Component  {
    state = {
        KnowledgeList: []
    }
    componentDidMount() {
        API.getKnowledges().then( res => 
        {
            this.setState({KnowledgeList:res.data});
            console.log(this.state.KnowledgeList);
            for(var i = 0;i < this.state.KnowledgeList.length;i++)
            {
               
            }
        });
        //getting all of the knowledge out of the database.

        console.log("hello");
        // //going through the loop of all of the knowledge items

      }

    render (){
        return(
            <div>
          </div>
        )

    }
  };