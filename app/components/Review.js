import React from 'react';
import { Link } from 'react-router';

var Review = React.createClass({
    componentDidMount: function() {
        window.scrollTo(0, 0);
        document.body.className = '';
    },
    render: function() {
        return (
            <div>
                <section className="main-content">
                    <p>Review report goes here</p>
                </section>
            </div>
        );
    }
});

module.exports = Review;
