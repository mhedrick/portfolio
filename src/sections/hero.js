import * as React from "react";
import Contact from '../components/contact';

const Hero = () => {



    return (
        <section id="about" className="hero d-flex align-items-center">
        <div className="w-100">
            <h1 className="display-1">Hi! My name is <em>Maggie</em>.</h1>
            <p>
                I like to build things that look good and feel great to use.  Let's chat.
            </p>
            <Contact display={ true }  className="d-flex justify-content-between" />
        </div>
    </section>);
}


export default Hero;