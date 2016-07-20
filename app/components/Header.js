import React from 'react'
import { Link } from 'react-router'

var Header = React.createClass({
    render: function() {
        var pageTitle = this.props.pageTitle || "GumGum Hackathon";

        return (
            <header>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/report">Report</Link></li>
                    <li><Link to="/review">Review</Link></li>
                    <li><Link to="/export">Export</Link></li>
                </ul>
            </header>
        );
    }
});

module.exports = Header;
