import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const appStyle = {
  };


export default class About extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount()
    {

    }

    handleClick = () => {

    };

    render() {
        console.log("rendering About");
        return (
            <div>
                Project Wheelhouse is based on the idea of continuing education.
                It's a website that you can go to in order to learn new technologies or shore up existing knowledge on subjects.
                Simply click any of the eight programming languages and you'll be given daily articles on the subject.
                Future plans for the site:
                <ul>
                    <li>More areas of knowledge</li>
                    <li>The ability to select your current career and get articles on your projected career.</li>
                    <li>Other non-technical skills. For example recipes to learn</li>
                    <li>Rate articles based on how much they helped you understand the subject</li>
                    <li>More scrapers for other websites: Quora, news.mit.edu</li>
                </ul>
            </div>

        );
    }
}