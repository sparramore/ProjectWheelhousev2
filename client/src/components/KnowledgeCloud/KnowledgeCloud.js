import React, { Component } from 'react';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import CloudItem from './CloudItem';
import './KnowledgeCloud.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";

const styles = {
    large: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    small: {
        opacity: 0.7,
        fontSize: 16
    }
};

class KnowledgeCloud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            KnowledgeList: [],
            clicked: []
        }
        //this.HandleKnownClick = this.HandleKnownClick.bind(this);
        this.RenderCards = this.RenderCards.bind(this);
    }

    // RenderCards() {
    //     let cards = [];
    //     console.log("KnowledgeList Length: " + this.state.KnowledgeList.length)
    //     for (var i = 0; i < this.state.KnowledgeList.length; i++) {
    //         console.log("Skill: " + this.state.KnowledgeList[i].Skill);
    //         console.log("Skill Description: " + this.state.KnowledgeList[i].SkillDescription);
    //         cards.push(<Card key="i">
    //             <CardActionArea>
    //                 <CardContent>
    //                     <Typography gutterBottom variant="headline" component="h2">
    //                         {this.state.KnowledgeList[i].Skill}
    //                     </Typography>
    //                     <Typography component="p">
    //                         {this.state.KnowledgeList[i].SkillDescription}
    //                     </Typography>
    //                 </CardContent>
    //             </CardActionArea>
    //             <CardActions>
    //             </CardActions>
    //         </Card>)
    //     }
    //     console.log("Cards: " + cards)
    //     return cards;
    // }

    RenderCards() {
        let cards = [];
        console.log("KnowledgeList Length: " + this.state.KnowledgeList.length)
        for (var i = 0; i < this.state.KnowledgeList.length; i++) {
            console.log("Skill: " + this.state.KnowledgeList[i].Skill);
            console.log("Skill Description: " + this.state.KnowledgeList[i].SkillDescription);
            cards.push(<div>this.state.KnowledgeList[i].Skill</div>)
        }
        console.log("Cards: " + cards)
        return cards;
    }


    componentDidMount() {
        API.getKnowledges().then(res => {
            console.log(res.data);
            this.setState({ KnowledgeList: res.data });
        });
        //this.setState({KnowledgeUnknownClick:this.props.ObjectToLearn});
        // setInterval(() => {
        //     this.forceUpdate();
        // }, 3000);
    }

    render() {
        let cards = this.RenderCards();
        return (
            <div className='app-outer'>
                <div className='app-inner'>
                    <h1>react-tag-cloud demo</h1>
                    <TagCloud
                        className='tag-cloud'
                        style={{
                            fontFamily: 'sans-serif',
                            //fontSize: () => Math.round(Math.random() * 50) + 16,
                            fontSize: 30,
                            color: () => randomColor({
                                hue: 'blue'
                            }),
                            padding: 5,
                        }}>
                        {/* {cards} */}
                        {this.state.KnowledgeList.map(function (k, idx) {
                            return (
                                <Card key="idx">
                                    <CardActionArea>
                                        <CardContent>
                                            <Typography gutterBottom variant="headline" component="h2">
                                                {k.Skill}
                                            </Typography>
                                            <Typography component="p">
                                                {k.SkillDescription}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    </CardActions>
                                </Card>
                            )
                        })}
                        {/* <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="headline" component="h2">
                                        c++
                                    </Typography>
                                    <Typography component="p">
                                        blahblahblah
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                            </CardActions>
                        </Card> */}
                    </TagCloud>
                </div>
            </div>
        );
    }
}

export default KnowledgeCloud;
