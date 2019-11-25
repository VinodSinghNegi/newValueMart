import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Axios from "axios";

class Signup extends Component {
    state = { username: "", email: "", password: "", responseFromServer: "" }

    onFormSubmit = async event => {
        event.preventDefault()
        const response = await Axios.post("/signup", {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
        this.setState({ responseFromServer: response.data })

    }

    render() {
        return (
            <MDBContainer>
                <MDBRow className="rgba-black-light d-flex justify-content-center ">
                    <MDBCol md="6">

                        <form onSubmit={this.onFormSubmit}>
                            <p className="h4 text-center white-text py-4">Sign up</p>
                            <div className="white-text">
                                <MDBInput className="white-text"

                                    label="Your name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={event => { this.setState({ username: event.target.value }) }}
                                />
                                <MDBInput
                                    label="Your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={event => { this.setState({ email: event.target.value }) }}
                                />
                                <MDBInput
                                    label="Your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                    onChange={event => { this.setState({ password: event.target.value }) }}
                                />
                            </div>
                            <div className="text-center py-4 mt-3">
                                <MDBBtn color="indigo" type="submit">
                                    Create Account
                                </MDBBtn>
                            </div>
                            {this.state.responseFromServer}
                        </form>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };
}
export default Signup;