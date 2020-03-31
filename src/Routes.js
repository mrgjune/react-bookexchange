import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Books from "./Books";
import Book from "./Book";
import Home from "./Home";


class Routes extends Component {
    render() {
        //const { getCurrentUser } = this.props;

        return (
            <div className="pt-5">
                <BrowserRouter >
                    <Switch>
                        <Route exact path="/" render={() => <Home />} />
                        <Route exact path="/books" render={() => <Books />} />
                        <Route exact path="/books/:book" render={rtProps => <Book {...rtProps} />} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}



export default Routes;
