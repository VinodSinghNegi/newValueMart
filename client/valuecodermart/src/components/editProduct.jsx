import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';
import { MDBBtn, MDBContainer } from "mdbreact";

import Editname from "./namebox"
import Addmore from "./addmore"
import Axios from 'axios';



class MyProducts extends React.Component {
    state = {
        allItems: [],
        productId: null,
        productName: null

    }


    async componentDidMount() {

        await this.setState({ productId: this.props.productId })
        
        const response = await Axios.post('/showitems', {
            productId: this.state.productId
        })

          this.setState({ allItems: response.data })

        const nameResponse=await Axios.post('/showproduct',{
            productId: this.state.productId
        })
              this.setState({productName:nameResponse.data.productName})

    }

    delteteItems = async (id) => {

        await Axios.post("/deleteitems", {
            itemId: id
        })
    }

    editProductName = async () => {
        const response = await Axios.post("/editproductname", {
            productId: this.state.productId
        })
        this.setState({ productName: response })
    }


    render() {

        if (this.state.allItems.length > 0) {

            return (
                <MDBContainer className="rgba-white-light" >

                    <React.Fragment >
                        <div className="orange-text" align="center" >

                            <h3><strong><b>{this.state.productName}</b></strong></h3>

                            <Editname productId={this.state.productId} productName={this.state.productName} />

                            <Addmore productId={this.state.productId} productName={this.state.productName} />
                        </div>

                        <Table size="small" >
                            <TableHead >
                                <TableRow >
                                    <TableCell className="orange-text">Item Name</TableCell>

                                    <TableCell className="black-text" align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.state.allItems.map((item, i) => (
                                
                                    <TableRow key={i}>
                                        <TableCell className="white-text">{item.item.name}</TableCell>

                                        <TableCell align="right">
                                            <MDBBtn size="sm" color="danger" onClick={() => { this.delteteItems(item._id) }}>Delete</MDBBtn>
                                        </TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                        </Table>
                    </React.Fragment>
                </MDBContainer>
            )

        }
        else {
            return (

                <div className="orange-text" align="center" >
                    <h3><b>You have deleted all the items of this product</b></h3>
                    <Addmore productId={this.state.productId} productName={this.state.productName}/>
                </div>

            )
        }


    }

}

export default MyProducts