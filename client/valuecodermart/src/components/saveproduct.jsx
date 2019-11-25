import React, { Component } from "react";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



class Saveitems extends Component {
    state = { finalProduct: "", finalItems: [], value: 0 }

    componentDidMount() {

        this.setState({ finalProduct: this.props.productName, finalItems: this.props.itemList })

    }

    render() {

        return (
            <MDBContainer >
                <MDBRow >
                    <MDBCol >


                        <div className="blue-text h3 text-center ">Product Name :<br />
                            <div className="orange-text h5 text-center ">
                                {this.state.finalProduct}
                            </div>
                        </div>

                        <div className="blue-text h5 text-center ">Items selected :<br />
                            <div className="orange-text h5 text-center ">
                                <ul>
                                    {this.state.finalItems.map(item => (
                                        <li key={item.id}>
                                            {item.name}
                                            {"   "}
                                            <input type="number" min="1" max="10" defaultValue="1" 
                                                onChange={(event) => this.props.quantity(item.id, item.name, event.target.value)}
                                            />
                                            <MDBBtn size="sm" color="grey" onClick={()=>{
                                                this.props.helper(1)}}>Done
                                            </MDBBtn>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                        </div>
                        <p className="grey-text ">Want to save !</p>


                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };
}


export default Saveitems;