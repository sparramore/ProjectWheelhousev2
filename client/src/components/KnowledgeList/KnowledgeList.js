import React, { Component } from "react";
import "./KnowledgeList.css";
import KnowledgeBubble from "./KnowledgeBubble"
import API from "../../utils/API";
import Button from '@material-ui/core/Button'

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
            KnowledgeKnownClicked:[],
            KnowledgeUnknownClick:[],
            KnownOrUnKnown:0
        }
        this.HandleKnownClick = this.HandleKnownClick.bind(this);
        this.HandleUnKnownClick = this.HandleUnKnownClick.bind(this);
        this.createBubbles = this.createBubbles.bind(this);
        this.SwitchState = this.SwitchState.bind(this);
        this.RenderButton = this.RenderButton.bind(this);
    }
    
    componentDidMount() {
        API.getKnowledges().then( res => 
        {
            console.log(res.data);
            this.setState({KnowledgeList:res.data});
        });
        console.log("props Object to Learn" + this.props.ObjectToLearn);
        this.setState({KnowledgeUnknownClick:this.props.ObjectToLearn});
        console.log("KnowledgeKnownClicked: " + this.state.KnowledgeUnknownClick);
      }

      createBubbles(type){
        let rows = [];
        let counter = 0;
        for(var i = 0;i < 2;i++)
        {
            let rowId = `row${i}`;
            let cell = [];
            for (var idx = 0; idx < this.state.KnowledgeList.length/2; idx++){
                let cellID = `cell${i}-${idx}`;
                if(type === false)
                {
                    if(this.state.KnowledgeKnownClicked.includes(counter))
                    {
                        cell.push(<td key={cellID} ><KnowledgeBubble ObjectClick={this.HandleKnownClick} skill={this.state.KnowledgeList[counter].Skill} description ={this.state.KnowledgeList[counter].SkillDescription } id={counter} imageLink={this.state.KnowledgeList[counter].ImageLink} backgroundColor="red"></KnowledgeBubble></td>)
                    }
                    else
                    {
                        cell.push(<td key={cellID} ><KnowledgeBubble ObjectClick={this.HandleKnownClick}  skill={this.state.KnowledgeList[counter].Skill} description ={this.state.KnowledgeList[counter].SkillDescription } id={counter} imageLink={this.state.KnowledgeList[counter].ImageLink} backgroundColor="white"></KnowledgeBubble></td>)
                    }   
                }
                else
                {
                    if(this.state.KnowledgeUnknownClick.includes(counter))
                    {
                        cell.push(<td key={cellID} ><KnowledgeBubble ObjectClick={this.HandleUnKnownClick} skill={this.state.KnowledgeList[counter].Skill} description ={this.state.KnowledgeList[counter].SkillDescription } id={counter} imageLink={this.state.KnowledgeList[counter].ImageLink} backgroundColor="red"></KnowledgeBubble></td>)
                    }
                    else
                    {
                        cell.push(<td key={cellID} ><KnowledgeBubble ObjectClick={this.HandleUnKnownClick}  skill={this.state.KnowledgeList[counter].Skill} description ={this.state.KnowledgeList[counter].SkillDescription } id={counter} imageLink={this.state.KnowledgeList[counter].ImageLink} backgroundColor="white"></KnowledgeBubble></td>)
                    } 
                }
             
                
                counter++;
            }
            rows.push(<tr key={i} id={rowId}>{cell}</tr>)
        }
        return rows;
    }

    HandleKnownClick(id)
    {
        let knowledge = this.state.KnowledgeKnownClicked;
        var found = false;
        for(var i = 0;i < knowledge.length;i++)
        {   
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
        this.setState(state => ({ KnowledgeKnownClicked: knowledge }));
    }

    HandleUnKnownClick(id)
    {
        console.log("knowledge Known Clicked : " + this.state.KnowledgeKnownClicked)
        let knowledge = this.state.KnowledgeUnknownClick;
        var found = false;
        for(var i = 0;i < knowledge.length;i++)
        {   
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
        console.log("KnowledgeList-knowledge : " + knowledge.length);
        console.log("KnowledgeList-KnowledgeList : " + this.state.KnowledgeList[1].Skill);
        this.props.ObjectClick(knowledge,this.state.KnowledgeList);
        this.setState(state => ({ KnowledgeUnknownClick: knowledge }))
    }

    SwitchState()
    {
        let stateObject = this.state.KnownOrUnKnown;
        this.setState(state => ({ KnownOrUnKnown: !stateObject }))
    }

    RenderButton()
    {
        if(this.state.KnownOrUnKnown === 0)
        {
            return <Button onClick={this.SwitchState}>Switch To Knowledge to learn</Button>
        }
        else
        {
            return <Button onClick={this.SwitchState}>Go back to what you know</Button>
        }
    }

    render (){
        let rows = this.state.KnownOrUnKnown? this.createBubbles(0): this.createBubbles(1);
        
        return(
        <table id="simple-board">
            <tbody> 
                {rows} 
                {this.RenderButton()} 
            </tbody>
        </table>              
        )

    }
  };