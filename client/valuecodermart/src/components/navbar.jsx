import React, { Component } from "react";
import { MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav, MDBNavItem } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router } from 'react-router-dom';
import Cookie from "js-cookie"
import LoginSignupButton from "./buttons/loginAndSignup"
import LogoutButton from "./buttons/logoutButton"



class Navbar extends Component {


    changetoken = () => {
        const token = Cookie.get("mytoken")
        if (token === undefined) {
            return (
                <React.Fragment>
                    <LoginSignupButton value={this.props.value} />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <LogoutButton value={this.props.value} />
                </React.Fragment>
            )
        }

    }

    render() {
        return (
            <Router>
                <MDBNavbar className="rgba-white-light" dark expand="md">
                    <MDBNavbarNav left >
                        <MDBNavItem active >
                            <MDBBtn color="blue" onClick={(e) => { this.props.value(0) }}>
                                Home
                            </MDBBtn>
                        </MDBNavItem>
                    </MDBNavbarNav>

                    <MDBNavbarBrand>
                        <strong className="orange-text">Value Coders Mart</strong>
                    </MDBNavbarBrand>
                    {this.changetoken()}
                </MDBNavbar>
            </Router >
        );
    }
}

export default Navbar;