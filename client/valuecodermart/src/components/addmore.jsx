import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Additems from "./additems"

class ModalPage extends Component {
    state = { modal: false }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <MDBContainer>
                <MDBBtn color="grey" size="sm" onClick={this.toggle}>Add more items!</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Welcome To Value Coders Mart</MDBModalHeader>
                    <MDBModalBody>

                        <Additems productId={this.props.productId} productName={this.props.productName} />

                    </MDBModalBody>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default ModalPage;