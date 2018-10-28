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

    pushIntoArticles(articleList,index,Language)
    {
        console.log("language : " + Language);
        for(var i = 0; i < this.state.AllArticleList.length;i++)
        {
          console.log("language in link: " + this.state.AllArticleList[i].Language);
          if(this.state.AllArticleList[i].Language == Language)
          {
            console.log("match for c++")
            articleList.push(this.state.AllArticleList[i]);
          }
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
            this.pushIntoArticles(articles,i,"cpp");
            break;
          }
          case "Java":
          {
            this.pushIntoArticles(articles,i,"java");
            break;
          }
          case "Javascript":
          {
            this.pushIntoArticles(articles,i,"javascript");
            break;
          }
          case "c#":
          {
            this.pushIntoArticles(articles,i,"c#");
            break;
          }
          case "PHP":
          {
            this.pushIntoArticles(articles,i,"php");
            break;
          }
          case "Python":
          {
            this.pushIntoArticles(articles,i,"python");
            break;
          }
          case "c":
          {
            this.pushIntoArticles(articles,i,"c");
            break;
          }
          case "SQL":
          {
            this.pushIntoArticles(articles,i,"sql");
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
            this.LoadArticles();
        });

    }
    //not ever really going to use this in production, I just need to make sure there are no redundant articles
    RenderAll()
    {
      let rows = [];
       console.log(this.state.Articles);
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