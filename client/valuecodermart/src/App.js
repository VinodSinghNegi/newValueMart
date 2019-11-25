import React, { Component } from 'react';
import Cookie from "js-cookie"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from "./components/navbar"
import Dashboard from "./components/dashboard"
import Intro from "./components/Intro"
import Login from "./components/login"
import Signup from "./components/signup"



class App extends Component {
  state = { logedToken: undefined, value: 0 }


  changingValue = (res) => {
    this.setState({ value: res })

    const token = Cookie.get("mytoken")
    this.setState({ logedToken: token })
  }


  async componentDidMount() {
    const token = Cookie.get("mytoken")
    this.setState({ logedToken: token })

  }


  render() {

    if (this.state.logedToken !== undefined && this.state.value === 0) {

      return (
        <Router>
          <div>
            <Navbar value={this.changingValue} />
            <Route exact path="/" component={Dashboard} />


          </div>
        </Router>
      )
    }

    else if (this.state.value === 0) {
      return (
        <div >
          <Navbar value={this.changingValue} />
          <Intro />

        </div>
      )
    }

    else if (this.state.value === 1) {
      return (
        <div >
          <Navbar value={this.changingValue} />
          <Login value={this.changingValue} />
        </div>
      )
    }

    else if (this.state.value === 2) {
      return (
        <div >
          <Navbar value={this.changingValue} />
          <Signup />
        </div>
      )
    }



  }
}

export default App;
