import React, { Component } from "react";
import Cookie from "js-cookie"
import Axios from "axios"


import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



class Login extends Component {
    
    state = { email: "", password: "", responseToken: "", errorMsg: "", dashboard: null }
    

    onFormSubmit = async (event) => {
        event.preventDefault();
        const response = await Axios.post("/login", {
            email: this.state.email,
            password: this.state.password
        })
        if(response.data!=="Wrong Email or Password")
        {
            this.setState({ responseToken: response.data })

            Cookie.set("mytoken", this.state.responseToken)
            this.props.value(0)
    }
    else{
        this.setState({errorMsg:"Wrong Email or Password"})
    }
    }


    render() {

        return (
            <MDBContainer >
                <MDBRow className="rgba-black-light d-flex justify-content-center " >
                    <MDBCol md="6" >

                        <form onSubmit={this.onFormSubmit}>
                            <p className="h4 text-center white-text py-4">Login</p>
                            <div className="white-text">
                                <MDBInput className="white-text"
                                    label="Type your email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={(event) => this.setState({ email: event.target.value })}
                                />
                                <MDBInput
                                    label="Type your password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                    onChange={(event) => { this.setState({ password: event.target.value }) }}
                                />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                            </div>
                        </form>
                        {this.state.errorMsg}

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };
}


export default Login;