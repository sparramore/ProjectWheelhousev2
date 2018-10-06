import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "../LoginModal/LoginModal"

export default class Dashboard extends Component {
    state = { show: false };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <main>
                <h1 class="DashboardHeader">React Modal</h1>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <form action="/login" method="post">
                        <div>
                            <label>Username:</label>
                            <input type="text" name="username" /><br />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" name="password" />
                        </div>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>

                </Modal>
                <button type="button" onClick={this.showModal}>
                    open
        </button>
            </main>
        );
    }
}