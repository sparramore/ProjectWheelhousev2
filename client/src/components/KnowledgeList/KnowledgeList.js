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
            console.log("setting the state");
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
        let rows = [];
        let counter = 0;
        for(var i = 0;i < 2;i++)
        {
            let rowId = `row${i}`;
            let cell = [];
            console.log("in first for loop");
            console.log("length: " + this.state.KnowledgeList.length);
            for (var idx = 0; idx < this.state.KnowledgeList.length/2; idx++){
                console.log("counter: " + counter);
                console.log("idx: " + idx);
                let cellID = `cell${i}-${idx}`;
                console.log("cellID :" + cellID);                
                cell.push(<td key={cellID} id={cellID}><KnowledgeBubble skill={this.state.KnowledgeList[counter].Skill} description ={this.state.KnowledgeList[counter].SkillDescription}></KnowledgeBubble></td>)
                counter++;
            }
            rows.push(<tr key={i} id={rowId}>{cell}</tr>)
        }
        
        return(
<table id="simple-board">
               <tbody>
                 {rows}
                 blerh
               </tbody>
</table>              
        )

    }
  };