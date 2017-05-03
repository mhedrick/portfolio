import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div id="contact" className="d-flex justify-content-between">
                <a className="text-muted" href="https://www.twitter.com/maggiekhedrick" target="_blank"><i className="fa fa-2x fa-twitter"></i></a>
                <a className="text-muted" href="https://www.linkedin.com/in/maggiekhedrick/" target="_blank"><i className="fa fa-2x fa-linkedin-square"></i></a>
                <a className="text-muted" href="https://codepen.io/maggiekhedrick" target="_blank"><i className="fa fa-2x fa-codepen"></i></a>
                <a className="text-muted" href="https://github.com/mhedrick" target="_blank"><i className="fa fa-2x fa-github-alt"></i></a>
                <a className="text-muted" href="mailto:maggiekhedrick@gmail.com"><i className="fa fa-2x fa-envelope-o"></i></a>
            </div>
        );
    }
}
export default Home;
