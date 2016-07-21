import React from 'react';
import { Link } from 'react-router';

var Export = React.createClass({
    componentDidMount: function() {
        window.scrollTo(0, 0);
        document.body.className = 'bg--white';
    },
    render: function() {
        return (
            <div>
                <section className="main-content">
                    <p>Export goes here</p>
                </section>
            </div>
        );
    }
});

module.exports = Export;
