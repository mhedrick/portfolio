import React from 'react';

const App = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light m-5">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a href="/" className="navbar-brand logo pr-1">
                    <i className="mr-2 far fa-hand-peace" />
                    {"maggie k hedrick"}
                </a>
            </nav>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center flex-column py-5">
                    <h1 className="display-1 logo">Hi, I'm Maggie.</h1>
                    <p className="lead">a web developer.</p>
                    <div className="w-25">
                        <div id="contact" className="d-flex justify-content-between">
                            <a className="text-muted" href="https://www.twitter.com/maggiekhedrick" target="_blank"><i className="fab fa-2x fa-twitter"></i></a>
                            <a className="text-muted" href="https://www.linkedin.com/in/maggiekhedrick/" target="_blank"><i className="fab fa-2x fa-linkedin-in"></i></a>
                            <a className="text-muted" href="https://codepen.io/maggiekhedrick" target="_blank"><i className="fab fa-2x fa-codepen"></i></a>
                            <a className="text-muted" href="https://github.com/mhedrick" target="_blank"><i className="fab fa-2x fa-github-alt"></i></a>
                            <a className="text-muted" href="mailto:maggiekhedrick@gmail.com"><i className="far fa-2x fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default App;