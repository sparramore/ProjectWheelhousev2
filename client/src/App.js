import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

import Index from "./pages/Default/default";
import Wheelhouse from "./pages/Wheelhouse/wheelhouse";
import NoMatch from "./pages/NoMatch";
import Dashboard from "./components/Dashboard/Dashboard";
import UserList from "./components/UserList/userList";
import Knowledge from "./components/KnowledgeList/KnowledgeList";
import Bubble from "./components/KnowledgeList/KnowledgeBubble";
import Articles from "./components/Articles/Articles";
import API from "./utils/API"

class App extends Component {
  state = {
    username: "",
    password: "",
    auth: {
      userId: "",
      username: "",
      isAuthenticated: false
    }
  };

  componentWillMount() {
    axios.get("/auth/isAuthenticated").then((result) => {
      const { userId, isAuthenticated, username } = result.data
      this.setState({
        auth: {
          userId,
          isAuthenticated,
          username
        }
      });
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    //call a sign In function
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      username: "",
      password: ""
    });
    const { name } = event.target;
    axios.post(name, newUser).then((data) => {
      if (data.data.isAuthenticated) {
        const { userId, isAuthenticated, username } = data.data;
        this.setState({
          auth: {
            userId,
            isAuthenticated,
            username
          }
        });
      }
    });
  }

  handleLogout = (event) => {
    event.preventDefault();
    axios.get("/auth/logout").then((result) => {
      this.setState({
        auth: {
          userId: "",
          username: "",
          isAuthenticated: false
        }
      });
    })
  };

  render() {
    const loggedIn = this.state.auth.isAuthenticated;
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => {
            return <Redirect to="/home" />
          }} />
          <Route exact path="/signup" render={() => {
            if (loggedIn) {
              return <Redirect to="/home" />
            } else {
              return <SignUp
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                email={this.state.email}
                password={this.state.password}
              />
            }
          }} />
          <Route exact path="/home" render={() => {
            return <Home handleLogout={this.handleLogout} auth={this.state.auth} />
          }
          } />
          <Route exact path="/user" render={() => {
            return <UserList />
          }} />
          <Route exact path="/knowledges" render={() => {
            return <Knowledge />
          }} />
          <Route exact path="/articles" render={() => {
            return <Articles />
          }} />
          <Route exact path="/cpp" render={() => {
            API.scrapecpp();
            return null
          }} />
          <Route exact path="/java" render={() => {
            API.scrapejava();
            return null
          }} />
          <Route exact path="/javascript" render={() => {
            API.scrapejavascript();
            return null
          }} />
          <Route exact path="/csharp" render={() => {
            API.scrapecsharp();
            return null
          }} />
          <Route exact path="/php" render={() => {
            API.scrapephp();
            return null
          }} />
          <Route exact path="/python" render={() => {
            API.scrapepython();
            return null
          }} />
          <Route exact path="/c" render={() => {
            API.scrapec();
            return null
          }} />
          <Route exact path="/sql" render={() => {
            API.scrapesql();
            return null
          }} />
        </div>
      </Router>
    );
  }
}

export default App;