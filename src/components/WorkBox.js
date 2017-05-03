import React, { Component } from 'react';

class WorkBox extends Component {
    render() {
        let work = this.props.data;
        return (
            <div className="card border-0">
                <img className="card-img-top img-fluid mx-auto d-block img-thumbnail" src={work.img} alt={work.title} />
                <div className="card-block">
                    <h4 className="card-title"><a href={work.link}>{work.title}</a></h4>
                    <p className="card-text">{work.blurb}</p>
                    <a href={work.gitLink}>view on github</a>
                </div>
            </div>
        );
    }
}
export default WorkBox;
