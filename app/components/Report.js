import React from 'react';
import { Link } from 'react-router';

import GdsLayout from './layout/GdsLayout';

var Report = React.createClass({
    componentDidMount: function() {
        window.scrollTo(0, 0);
        document.body.className += ' -has-page-header gg-theme-blue -has-slide-nav';
    },
    render: function() {
        let pageName = "Create Report";

        return (
            <GdsLayout pageName={pageName}>
                <section>
                    <p>Create Report</p>
                </section>
            </GdsLayout>
        );
    }
});

module.exports = Report;
