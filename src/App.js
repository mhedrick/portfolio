import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';

import HeaderNav from './components/HeaderNav';


class App extends Component {
    render() {
        return (
            <div>
                <HeaderNav />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/work" component={Work} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
