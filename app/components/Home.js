import React from 'react';
import { Link } from 'react-router';

import GdsLayout from './layout/GdsLayout';

var Home = React.createClass({
    getInitialState: function() {
        return {
            showCards: "",
            reports: [
                {name: "Honda"},
                {name: "Buick"},
                {name: "McDonald's"},
                {name: "L'Oreal"},
                {name: "Virgin America"},
                {name: "Honda"},
                {name: "Buick"},
                {name: "McDonald's"},
                {name: "L'Oreal"},
                {name: "Virgin America"},
                {name: "Honda"},
                {name: "Buick"},
                {name: "McDonald's"},
                {name: "L'Oreal"},
                {name: "Virgin America"}
            ]
        }
    },
    componentDidMount: function() {
        let _this = this;

        window.scrollTo(0, 0);
        document.body.className += ' -has-page-header gg-theme-blue -has-slide-nav';

        // Add classes to cards to fade them in
        setTimeout(function() {
            _this.setState({showCards: "fade-in"});
        }, 500);
    },
    render: function() {
        let pageName = "View All Reports",
            cardFade = this.state.showCards;

        return (
            <GdsLayout pageName={pageName}>
                <section>
                    <div className="gds-layout__column--md-12">
                        <h1 className="gds-text--header-lg -m-b-4">All Reports</h1>
                    </div>
                    <ul className="grid-holder">
                        {/* Loop through "reports" and render them */}
                        {this.state.reports.map(function(report, i) {
                            let reportIndex = i + 1;

                            return (
                                <li key={i} data-index={reportIndex} className={`gds-layout__column--sm-6 gds-layout__column--md-4 gds-layout__column--lg-3 grid-item -m-b-1 ${cardFade}`}>
                                    <div className="gds-card grid-card">
                                        <div className="grid-image"></div>
                                        <div className="grid-text -ellipsis">{report.name} Report</div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </GdsLayout>
        );
    }
});

module.exports = Home;
