import React, { Component } from "react";

import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";




class Productname extends Component {

    render() {

        return (
            <MDBContainer >
                <MDBRow >
                    <MDBCol >

                        <div className="h5 text-center blue-text py-4">Name your product</div>
                        <div className="white-text">
                            <MDBInput className="black-text"
                                label="Product Name"
                                icon="gift"
                                group
                                type="text"
                                value={this.props.productName}
                                validate
                                required
                                onChange={(event) => this.props.giveProductName(event.target.value)}
                            />
                        </div>


                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };
}


export default Productname;