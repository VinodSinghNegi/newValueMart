import React, { Component } from "react"
import { MDBContainer, MDBBtn, MDBNavbarNav, MDBNavItem } from "mdbreact";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Axios from "axios";
import Cookie from "js-cookie"

class Logout extends Component {
    state = { loggedToken: null, isLogout: null };


    onLogout = async event => {
        event.preventDefault()
        const token = await JSON.parse(Cookie.get("mytoken"))

        this.setState({ loggedToken: token.token })

        const res = await Axios.post("/logout", {
            token: this.state.loggedToken
        });
        this.setState({ isLogout: res.data });
        if (this.state.isLogout === "success") {
            Cookie.remove("mytoken")
            this.props.value(0)
        }

    };

    render() {
        return (
            <MDBContainer>
                <MDBNavbarNav right>
                    <MDBNavItem active>
                        <MDBBtn color="blue" onClick={this.onLogout}>
                            Logout
                        </MDBBtn>
                    </MDBNavItem>
                </MDBNavbarNav >
            </MDBContainer>
        )
    }


}

export default Logout