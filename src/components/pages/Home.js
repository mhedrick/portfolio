import React, { Component } from 'react';
import Contact from '../Contact';

class Home extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column py-5">
        <h1 className="display-1 logo">Hi, I'm Maggie.</h1>
          <p className="lead">a web developer.</p>
          <div className="w-25">
            <Contact />
          </div>
      </div>
    );
  }
}
export default Home;
