import React, { Component } from 'react';

import { MDBContainer, MDBBtn } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import DialogBox from "./boxforstepper"
import ShowAllProduct from "./showAllProducts"
import EditProduct from "./editProduct"

class Dashboard extends Component {
    state = { value: 0, productId: null }


    getProductId = (id) => {
        this.setState({ productId: id })
    }
    removeProductId = () => {
        this.setState({ productId: null })

    }


    render() {

        if (this.state.productId === null) {
            return (
                <div>
                    <MDBContainer className="d-flex justify-content-center ">
                        <div  >
                            <DialogBox />
                        </div >
                    </MDBContainer>
                    <MDBContainer className="d-flex justify-content-center ">
                        <div  >
                            <ShowAllProduct productId={this.getProductId} value={this.changeValue} />
                        </div >
                    </MDBContainer>
                </div>
            )
        }

        else if (this.state.productId !== null) {
            return (
                <div>
                    <MDBContainer className="d-flex justify-content-center  pt-3">
                        <div  >
                            <EditProduct productId={this.state.productId} />
                        </div >
                    </MDBContainer>

                    <MDBContainer className="d-flex justify-content-center ">
                        <div  >
                            <MDBBtn size="sm" color="blue" onClick={() => { this.removeProductId() }}>Back</MDBBtn>
                        </div >
                    </MDBContainer>
                </div>
            )
        }


    }
}
export default Dashboard