import React from 'react';
import { Link, browserHistory } from 'react-router';

import ReportSection from './partials/ReportSection';
import GdsModal from './partials/GdsModal';
import GdsCornerContent from './partials/GdsCornerContent';

var BarChart = require('react-chartjs').Bar;

var Review = React.createClass({
    getInitialState: function() {
        return {
            showModal: false
        }
    },
    componentDidMount: function() {
        window.scrollTo(0, 0);
        document.body.className = 'gg-theme-blue bg--white';
    },
    _toggleModal: function() {
        let _this = this,
            current = _this.state.showModal,
            opposite = !current;

        _this.setState({showModal: opposite});
    },
    _backToCreateReport: function() {
        browserHistory.push("/create-report");
    },
    render: function() {
        let reportType = "Advertising",
            clientName = window.clientName || "Client Name",
            reportTitle = window.reportTitle || "Report Subtitle";

        if (!window.mylesJson) {
            this._backToCreateReport();
        }

        return (
            <div>
                {/* Report title section, needs [client name], [report subtitle], & [report type] */}
                <section className="-p-v-6 -p-h-3 bg--trans-dark-1">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--sm-12 gds-layout__hidden-md-up -text-center -m-b-4">
                                <img className="img--full-width" src="https://c.gumgum.com/ads/com/mgmm/img/svg/gg-vi--color_v2.svg" width="220" alt="GumGum Visual Intelligence" />
                            </div>
                            <div className="gds-layout__column--md-8 -text-center--sm">
                                <p className="-block text--gg-gold gds-text--bold text--uppercase">{reportType} audit for</p>
                                <h1 className="gds-text--header-lg gds-text--bold -block text--white">{clientName}</h1>
                                <h4 className="gds-text--header-sm gds-text--bold -block text--white">{reportTitle}</h4>
                            </div>
                            <div className="gds-layout__column--md-4 gds-layout__hidden-sm-down -text-right">
                                <img className="img--full-width" src="https://c.gumgum.com/ads/com/mgmm/img/svg/gg-vi--color_v2.svg" width="220" alt="GumGum Visual Intelligence" />
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
                                <p className="-m-b-3">Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ornare tortor nec rutrum. Fusce accumsan ex felis, pretium ornare risus lobortis vel. Vivamus at enim eleifend, hendrerit turpis eget, volutpat lorem. In molestie felis at massa posuere fermentum. Maecenas quam leo, dapibus at massa vitae, ornare venenatis lacus. Vivamus massa mi, aliquet vel pharetra at, pellentesque ut lacus. Phasellus convallis, tellus a dignissim vehicula, ligula sapien fermentum massa, sit amet consequat justo odio vitae mauris. Curabitur pretium varius varius.</p>
                                <p>Explain how the 1-99 scores are calculated here.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Loop through sections in report and render them */}
                {window.mylesJson.map(function(section, i) {
                    let themeIndex = i + 1;

                    return (
                        <ReportSection key={i} themeId={i} themeClassName={`color-${themeIndex}`} section={section} />
                    )
                })}

                {/* Footer logo section, doesn't need any data */}
                <section className="-p-a-4 bg--color-5">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--sm-12 -text-center">
                                <img className="footer-logo" src="https://c.gumgum.com/ads/com/mgmm/img/svg/gg-vi--white_v2.svg" width="220" alt="GumGum Visual Intelligence" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modal for saving report and generating link */}
                <GdsModal display={this.state.showModal} toggleModal={this._toggleModal} />

                {/* Corner-content */}
                <GdsCornerContent toggleModal={this._toggleModal} />
            </div>
        );
    }
});

module.exports = Review;
