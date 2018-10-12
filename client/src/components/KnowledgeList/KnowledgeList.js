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
        });

      }

      createBubbles = () => {
        let table = []
        for (let i = 0; i < this.state.KnowledgeList.length; i++)
        {
            console.log(this.state.KnowledgeList[i].Skill);
            table.push(<KnowledgeBubble skill={this.state.KnowledgeList[i].Skill} description ={this.state.KnowledgeList[i].SkillDescription}></KnowledgeBubble>);
        }
        return table
      }

    render (){
        return(
            <div>
                {this.createBubbles()}
                making a changes just so i can push to git again.
            </div>
        )

    }
  };