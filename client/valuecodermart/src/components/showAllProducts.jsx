import React from 'react';
import Axios from "axios"
import Cookie from "js-cookie"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';
import { MDBBtn, MDBContainer } from "mdbreact";




class MyProducts extends React.Component {
    state = {
        allProducts: [],
        productName: null,

    }

    async componentDidMount() {

        const cookie = await JSON.parse(Cookie.get("mytoken"))

        const userId = cookie.userId

        const response = await Axios.post("/showproduct", {
            userId: userId
        })
        this.setState({ allProducts: response.data })

    }

    deleteProduct = async (id) => {

        await Axios.post("/deleteproduct", {
            productId: id
        })
    }



    render() {
        if (this.state.allProducts.length > 0) {
            return (
                <MDBContainer className="rgba-white-light" >
                    <React.Fragment >
                        <Table >

                            <TableHead>
                                <TableRow >
                                    <TableCell className="green-text" align="center"><h4><b>Product Name</b></h4></TableCell>
                                    <TableCell className="orange-text" align="center"><h4><b>Edit</b></h4></TableCell>
                                    <TableCell className="red-text" align="center"><h4><b>Delete</b></h4></TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>

                                {this.state.allProducts.map((product, i) => (
                                    
                                    <TableRow key={i}>

                                        <TableCell className="white-text">
                                            {product.productName}
                                        </TableCell>

                                        <TableCell className="white-text" align="right">
                                            <MDBBtn size="sm" color="orange"
                                                onClick={() => this.props.productId(product._id)}>
                                                Edit
                                            </MDBBtn>
                                        </TableCell>

                                        <TableCell align="right">
                                            <MDBBtn size="sm" color="danger"
                                                onClick={() => this.deleteProduct(product._id)} >
                                                Delete
                                            </MDBBtn>
                                        </TableCell>

                                    </TableRow>
                                ))
                                }
                            </TableBody>

                        </Table>
                    </React.Fragment>
                </MDBContainer>
            )
        }

        else {
            return (
                <MDBContainer className="rgba-white-light" >
                    <div className="green-text" align="center">
                        
                            <h4><b>Your cart is Empty ! Add something !</b></h4>
                        
                    </div>
                </MDBContainer>
            )
        }
    }

}


// const mapStateToProps = (state) => {

//     console.log("state", state.product.state)
//     return { products: state.product }
// }
// export default connect(
//     mapStateToProps, { showProduct, showProducts, updateProduct, deleteProduct }
// )(MyProducts);
export default MyProducts