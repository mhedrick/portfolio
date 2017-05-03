import React, { Component } from 'react';
import WorkBox from '../WorkBox';
import WorkData from '../../data/work.json'

class Work extends Component {
    render() {
        let work = [];
        for (let i = 0; i < WorkData.length; i++) {
            work.push(<WorkBox data={WorkData[i]} key={WorkData[i].title}/>);
        }
        return (
            <div>
                <h1>my work</h1>
                <p>a selection of projects I've worked on ... mostly for practice.  My production level code is proprietary.</p>
                <div className="card-columns">
                    {work}
                    {work}
                    {work}
                    {work}
                    {work}
                    {work}
                    {work}
                    {work}
                    {work}
                    {work}
                </div>
            </div>
        );
    }
}
export default Work;
