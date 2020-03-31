import React, { Component } from "react";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./NavBar";


class App extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>


    );

  }
}

export default App;
