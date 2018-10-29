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
        console.log(this.props.ArticlesToShow[i].Skill);
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
            console.log("pushing into java");
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
    fillArticle(list)
    {
        let returnArray = [];
        for(var i = 0;i < list.length;i++)
        {
            returnArray.push(<p>{list[i].LinkName}: <a href={list[i].LinkUrl}>Link</a></p>)
        }
        return returnArray;
    }
    //not ever really going to use this in production, I just need to make sure there are no redundant articles
    RenderAll()
    {
      let rows = [];
      
      //going through the list of Articles and then storing them based on their language in a LanguageObject with a list of the Articles
      let Articles = [];
      let LanguageObject = {LanguagName:"",ArticleList: []};
      if(this.state.Articles.length.length > 0)
      {
        LanguageObject.ArticleList.push(this.state.Articles[0]);
        LanguageObject.LanguagName = this.state.Articles[0].Language;
        Articles.push(LanguageObject);
      }
      //go through the list of state articles and for each compare it to the already stored LanguageObjects.
      //if we already have a language object of the current state articles language then push into the language object
      //otherwise create a new language object and push it into the Articles.
      for(var i = 1;i < this.state.Articles.length;i++)
      {
        let foundHome = false;
        for(var y = 0; y < Articles.length;y++)
        {
          if(Articles[y].LanguagName === this.state.Articles[i].Language)
          {
             Articles[y].ArticleList.push(this.state.Articles[i]);
             foundHome = true;
          }
        }
        if(foundHome === false)
        {
          let LanguageObject = {LanguagName:"",ArticleList: []};
          LanguageObject.ArticleList.push(this.state.Articles[i]);
          LanguageObject.LanguagName = this.state.Articles[i].Language;
          Articles.push(LanguageObject);
        }
      }
      //actual rendering
      for(var i = 0;i < Articles.length;i++)
      {
          rows.push(<div>
            <h2>{Articles[i].LanguagName}</h2>
            {this.fillArticle(Articles[i].ArticleList)}
            </div>)
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