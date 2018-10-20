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
    constructor(props)
    {
        super(props);
        this.state={
            KnowledgeList: [],
            KnowledgeClicked:[]
        }
        this.HandleItemClick = this.HandleItemClick.bind(this);
    }
    
    componentDidMount() {
        console.log("component mounted");
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
            table.push(<KnowledgeBubble  skill={this.state.KnowledgeList[i].Skill} description ={this.state.KnowledgeList[i].SkillDescription}></KnowledgeBubble>);
        }
        return table
      }

    HandleItemClick(id)
    {
        let knowledge = this.state.KnowledgeClicked;
        console.log("handle item click happened: " + id);
        var found = false;
        for(var i = 0;i < knowledge.length;i++)
        {   
            console.log("KnowledgeID: " + knowledge[i])
            if(id === knowledge[i])
            {
                found = true;
                knowledge.splice(i,1);
            }
        }
        if(found === false)
        {
            knowledge.push(id);
        }
        console.log(knowledge);
        this.setState(state => ({ KnowledgeClicked: knowledge }))
    }

    render (){
        let rows = [];
        let counter = 0;
        for(var i = 0;i < 2;i++)
        {
            let rowId = `row${i}`;
            let cell = [];
            console.log(this.state.KnowledgeList);
            console.log("in first for loop");
            console.log("length: " + this.state.KnowledgeList.length);
            for (var idx = 0; idx < this.state.KnowledgeList.length/2; idx++){
                console.log("counter: " + counter);
                console.log("idx: " + idx);
                let cellID = `cell${i}-${idx}`;
                console.log("cellID :" + cellID);
                if(this.state.KnowledgeClicked.includes(counter))
                {
                    console.log("Red Item: " + counter);
                    cell.push(<td key={cellID} ><KnowledgeBubble ObjectClick={this.HandleItemClick} skill={this.state.KnowledgeList[counter].Skill} description ={this.state.KnowledgeList[counter].SkillDescription } id={counter} backgroundColor="red"></KnowledgeBubble></td>)
                }
                else
                {
                    cell.push(<td key={cellID} ><KnowledgeBubble ObjectClick={this.HandleItemClick}  skill={this.state.KnowledgeList[counter].Skill} description ={this.state.KnowledgeList[counter].SkillDescription } id={counter} backgroundColor="white"></KnowledgeBubble></td>)
                }                
                
                counter++;
            }
            rows.push(<tr key={i} id={rowId}>{cell}</tr>)
        }
        
        return(
        <table id="simple-board">
            <tbody>
                {rows}
            </tbody>
        </table>              
        )

    }
  };