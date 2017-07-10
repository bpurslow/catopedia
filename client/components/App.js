/**
 * Created by benpurslow on 07/07/2017.
 */
import React from 'react'
import {
    BrowserRouter,
    Route, Switch
} from 'react-router-dom'

import ListContainer from './Cat/ListContainer'

import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Menu from './Layout/Menu'
import NoMatch from "./NoMatch";
import Careers from "./Careers";
import Contact from "./Contact";
import Home from "./Home";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            detailContent: null,
            listContent: null,
            pageTitle: null,
            showMenu: false
        };

        this.triggerMenu = this.triggerMenu.bind(this);
    }

    triggerMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render() {
        return (
            <BrowserRouter>
                <section className="app">
                    <Header menuClick={this.triggerMenu}/>
                    <Menu showMenu={this.state.showMenu} linkClick={this.state.showMenu}/>
                    <section className="app__content">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/cat-alogue" component={ListContainer}/>
                            <Route path="/careers" component={Careers}/>
                            <Route path="/contact" component={Contact}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </section>
                    <Footer/>
                </section>
            </BrowserRouter>
        )
    }
}

export default App