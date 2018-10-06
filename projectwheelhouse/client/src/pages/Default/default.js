import React, { Component } from "react";
import "./default.css";
import Dashboard from "../../components/Dashboard/Dashboard"


class Default extends Component{
    render() {
        return (
            <div>
                <div class="pageHeader"></div>
                <Dashboard></Dashboard>
            </div>
        )
    }
}

export default Default;