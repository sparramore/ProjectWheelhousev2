import React, { Component } from "react";
import ReactDOM from "react-dom";
import API from "../../utils/API";


export default class UserList extends Component {
state = {
    userList: []
}
    componentDidMount() {
        API.getUsers()
        .then( res => 
            {
                this.setState({userList:res.data});
                console.log(this.state.userList);
            });
        
      }

      render()
      {
        return (
            <div>
            stuff here
            </div>
        )
      }
}