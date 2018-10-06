import React, { Component } from "react";
import "./LoginModal.css";
var passport = require('passport');



export default class LoginModal extends Component  {
    

    render (){
        return(
            <div className={this.props.show ? "modal display-block" : "modal display-none"}>
            <section className="modal-main">
              {this.props.children}
              <button onClick={this.props.handleClose}>close</button>
            </section>
          </div>
        )

    }
  };