import React, { Component } from "react";
import { MDBMask, MDBRow, MDBCol, MDBContainer,MDBBtn } from "mdbreact";
import {BrowserRouter as Router, Route ,Link} from "react-router-dom"
import Dashboard from "./dashboard"


class Homepage extends Component {

    state={value:0}

    changeValue=(val)=>{
        this.setState({value:val})
    }

  render() {
      console.log("homepage ",this.state.value)
      if(this.state.value===0){
        return (

            <MDBMask className=" d-flex justify-content-center align-items-center">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="12" className="mb-4 white-text text-center">
                    <h1 className="display-3 mb-0 pt-md-5 pt-5 indigo-text font-weight-bold">
                      VALUE{" "}
                      <span className="orange-text font-weight-bold">
                        CODERS{" "}
                      </span>
                      <span className="white-text font-weight-bold">MART</span>
                    </h1>
                    <hr className="hr-light my-4" />
                    <h5 className="text-uppercase pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 orange-text font-weight-bold">
                      CODE - COFFEE - REPEAT{" "}
                    </h5>
                  </MDBCol>
                </MDBRow>
      
                {/* <Router>
                <Link to="/"> */}
                <div className=" d-flex justify-content-center ">
                <MDBBtn  color="blue" onClick={()=>this.changeValue(1),this.props.value(this.state.value)}>Lets Start !</MDBBtn>
                </div>
                {/* </Link>
                <Route exact path="/" component={Dashboard}/>
                </Router> */}
      
              </MDBContainer>
            </MDBMask>
      
          );

      }
      else{
          return(
              <Dashboard/>
          )
      }
    
  }
}

export default Homepage;
