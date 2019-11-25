import React, { Component } from "react"
import { MDBBtn, MDBNavbarNav, MDBNavItem, MDBContainer } from "mdbreact";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


class LoginSignup extends Component {

    render() {
        return (
            <MDBContainer>
                <MDBNavbarNav right>
                    <MDBNavItem active>
                        <MDBBtn color="blue" onClick={(e) => { this.props.value(1) }}>
                            Login
                        </MDBBtn>
                    </MDBNavItem>

                    <MDBNavItem active>
                        <MDBBtn color="blue" onClick={(e) => { this.props.value(2) }}>
                            Create Account
                        </MDBBtn>
                    </MDBNavItem>

                </MDBNavbarNav >
            </MDBContainer>

        )
    }

}
export default LoginSignup

