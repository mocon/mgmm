import React from 'react';
import { Link } from 'react-router';

import ReportSection from './partials/ReportSection';

var BarChart = require('react-chartjs').Bar;

var Review = React.createClass({
    componentDidMount: function() {
        window.scrollTo(0, 0);
        document.body.className = '';
    },
    render: function() {
        let reportType = "Advertising";
        let sectionsInReport = [
            {name: "First Section"},
            {name: "Second Section"},
            {name: "Third Section"},
            {name: "Fourth Section"},
            {name: "Fifth Section"}
        ];

        return (
            <div>
                {/* Report title section, needs [client name], [report subtitle], & [report type] */}
                <section className="-p-v-6 -p-h-3 bg--trans-dark-1">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--sm-12 gds-layout__hidden-md-up -text-center -m-b-4">
                                <img className="img--full-width" src="https://c.gumgum.com/ads/com/mgmm/img/svg/gg-vi--color.svg" alt="GumGum Visual Intelligence" />
                            </div>
                            <div className="gds-layout__column--md-8 -text-center--sm">
                                <p className="-block text--gg-gold text--uppercase">[{reportType}] audit for</p>
                                <h1 className="gds-text--header-lg gds-text--bold -block text--white">[Report Client Name] goes here</h1>
                                <h4 className="gds-text--header-sm gds-text--bold -block text--white">[Report Subtitle] goes here</h4>
                            </div>
                            <div className="gds-layout__column--md-4 gds-layout__hidden-sm-down -text-right">
                                <img className="img--full-width" src="https://c.gumgum.com/ads/com/mgmm/img/svg/gg-vi--color.svg" alt="GumGum Visual Intelligence" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* About this report section, needs [description] */}
                <section className="-p-v-6 -p-h-3 bg--white">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--sm-12 -text-center--sm -m-b-3">
                                <h3 className="gds-text--header-sm gds-text--bold -m-b-3 text--uppercase">About this report</h3>
                                <p>[Description] goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ornare tortor nec rutrum. Fusce accumsan ex felis, pretium ornare risus lobortis vel. Vivamus at enim eleifend, hendrerit turpis eget, volutpat lorem. In molestie felis at massa posuere fermentum. Maecenas quam leo, dapibus at massa vitae, ornare venenatis lacus. Vivamus massa mi, aliquet vel pharetra at, pellentesque ut lacus. Phasellus convallis, tellus a dignissim vehicula, ligula sapien fermentum massa, sit amet consequat justo odio vitae mauris. Curabitur pretium varius varius.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Loop through sections in report and render them */}
                {sectionsInReport.map(function(section, i) {
                    let themeIndex = i + 1;

                    return (
                        <ReportSection key={i} themeId={i} themeClassName={`color-${themeIndex}`} />
                    )
                })}

                {/* Footer logo section, doesn't need any data */}
                <section className="-p-a-4 bg--color-1">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--sm-12 -text-center">
                                <img className="footer-logo" src="https://c.gumgum.com/ads/com/mgmm/img/svg/gg-vi--white.svg" alt="GumGum Visual Intelligence" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* End of sections */}
            </div>
        );
    }
});

module.exports = Review;
