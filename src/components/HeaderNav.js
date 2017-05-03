
import React, { Component } from 'react';
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import Contact from './Contact';

class HeaderNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-toggleable-sm sticky-top navbar-light m-5">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand logo pr-1">
                    <i className="mr-2 fa fa-hand-peace-o" />
                    maggie k hedrick
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="ml-auto">
                        <div className="row">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink exact to="/about" className="nav-link" activeClassName="active">About</NavLink>
                                </li>
                                <span className="navbar-text">/</span>
                                <li className="nav-item">
                                    <NavLink to="/work" className="nav-link" activeClassName="active">Work</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="row">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item" style={{ width: '20em' }}>
                                    <Switch>
                                        <Route path="/(about|work)" component={Contact} />
                                    </Switch>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    };
};

export default HeaderNav;
