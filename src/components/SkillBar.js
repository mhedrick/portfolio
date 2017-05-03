
import React, { Component } from 'react';

class HeaderNav extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    {this.props.Skill}
                </div>
                <div className="col">
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${this.props.SkillAmount}%` }}></div>
                    </div>
                </div>
            </div>
        );
    };
};

export default HeaderNav;
