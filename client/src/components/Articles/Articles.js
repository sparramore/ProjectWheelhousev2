import React, { Component } from "react";
import API from "../../utils/API";

export default class Article extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
          AllArticleList: [],
          Articles: []
        }
        this.LoadArticles = this.LoadArticles.bind(this);
    }

    pushIntoArticles(articleList,index)
    {
        for(var i = 0; i < this.state.AllArticleList[index].length;i++)
        {
          
          articleList.push(this.props.ArticlesToShow[index][i]);
        }
    }

    LoadArticles()
    {
      let articles = [];
      console.log("getting into Load Articles")
      for(var i = 0; i < this.props.ArticlesToShow.length;i++)
      {
        switch(this.props.ArticlesToShow[i].Skill)
        {
          case "c++":
          {
            console.log("pushing into c++");
            this.pushIntoArticles(articles,i);
            break;
          }
          case "Java":
          {
            this.pushIntoArticles(articles,i);
            break;
          }
          case "Javascript":
          {
            this.pushIntoArticles(articles,i);
            break;
          }
          case "c#":
          {
            this.pushIntoArticles(articles,i);
            break;
          }
          case "PHP":
          {
            this.pushIntoArticles(articles,i);
            break;
          }
          case "Python":
          {
            this.pushIntoArticles(articles,i);
            break;
          }
          case "c":
          {
            this.pushIntoArticles(articles,i);
            break;
          }
          case "SQL":
          {
            this.pushIntoArticles(articles,i);
            break;
          }
        }
      }
      console.log("articles : " + articles);
      this.setState({Articles:articles});
    }

    componentDidMount()
    {
      API.getArticles().then( res => 
        {
            console.log("setting the state");
            this.setState({AllArticleList:res.data});
        });

        this.LoadArticles();

    }
    //not ever really going to use this in production, I just need to make sure there are no redundant articles
    RenderAll()
    {
      let rows = [];

       for(var i = 0;i < this.state.Articles.length;i++)
        {
         rows.push(<div>{this.state.Articles[i].LinkName}</div>)
        }
      return rows;
    }
    
    
    render() {
      return (
        <div>
          {this.RenderAll()}
        </div>
      );
    }
  }