import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Addproduct from "./addproducts"

class ModalPage extends Component {
    state = { modal: false, addproduct: <Addproduct /> }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <MDBContainer>
                <MDBBtn color="indigo" onClick={this.toggle}>Add Products</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Welcome To Value Coders Mart</MDBModalHeader>
                    <MDBModalBody>

                        {this.state.addproduct}

                    </MDBModalBody>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default ModalPage;