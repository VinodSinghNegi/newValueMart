import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput } from 'mdbreact';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Axios from 'axios';

class ModalPage extends Component {
    state = { modal: false, productId: null, productName: null, newName: null }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    async componentDidMount() {
        await this.setState({ productId: this.props.productId })
        await this.setState({ productName: this.props.productName })
    }

    onFormSubmit = async (event) => {
        const response = await Axios.post("/editproductname", {
            productId: this.state.productId,
            newName: this.state.newName
        })
        this.setState({ productName: response.data })
    }

    render() {

        return (
            <MDBContainer>
                <MDBBtn size="sm" color="grey" onClick={this.toggle}>Edit Name</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}><center></center>Enter new name for : {this.state.productName}</MDBModalHeader>
                    <MDBModalBody>
                        <form onSubmit={this.onFormSubmit}>

                            <MDBInput className="black-text"
                                label="Enter new name here"
                                group
                                type="text"
                                validate
                                required
                                onChange={(event) => this.setState({ newName: event.target.value })}
                            />
                            <MDBBtn type="submit" size="sm" color="grey">Save</MDBBtn>
                        </form>

                    </MDBModalBody>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default ModalPage;