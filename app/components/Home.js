import React from 'react';
import { Link } from 'react-router';

import GdsLayout from './layout/GdsLayout';

var Home = React.createClass({
    componentDidMount: function() {
        window.scrollTo(0, 0);
        document.body.className += ' -has-page-header gg-theme-blue -has-slide-nav';
    },
    render: function() {
        let pageName = "View All Reports";

        return (
            <GdsLayout pageName={pageName}>
                <section>
                    <p>List of all reports goes here</p>
                </section>
            </GdsLayout>
        );
    }
});

module.exports = Home;
