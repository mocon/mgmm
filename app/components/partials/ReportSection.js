import React from 'react'

import RegionalComparison from './RegionalComparison';

var BarChart = require('react-chartjs').Bar;

var ReportSection = React.createClass({
    render: function() {
        var themeId = this.props.themeId,
            themeName = this.props.themeClassName,
            themeColors = ["#f0515a", "#00b4aa", "#545487", "#f36b23", "#00acc8"],
            chartData = {
                labels: ["January", "February", "March", "April", "May", "June", "July"], // TODO: Pass this in via props
                datasets: [
                    {
                        label: "A dataset",
                        fillColor: themeColors[themeId],
                        strokeColor: "rgba(0,0,0,0)",
                        data: [65, 59, 80, 81, 56, 55, 40] // TODO: Pass this in via props
                    }
                ]
            },
            chartOptions = {
                responsive: true,
                maintainAspectRatio: false
            },
            regionsInSection = [
                {name: "Pacific"},
                {name: "Mountain"},
                {name: "Central"},
                {name: "Atlantic"}
            ];

        // TODO: Pass in [category name] & [analysis] via props

        return (
            <div>
                {/* Colored header, needs [category name] */}
                <section className={`-p-a-4 bg--${this.props.themeClassName} text--white`}>
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--sm-12 -text-center">
                                <h3 className="gds-text--header-md gds-text--bold text--uppercase">[Category name] goes here</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* National header */}
                <section className="-p-a-2 bg--gray-dark text--white">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--sm-12 -text-center">
                                <h3 className="gds-text--header-sm gds-text--bold text--uppercase">National</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bar graph data, needs [graph content], & [analysis] */}
                <section className="-p-a-4">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--md-8 -m-b-4-sm">
                                <BarChart data={chartData} options={chartOptions} height="300" />
                            </div>
                            <div className="gds-layout__column--md-4">
                                <h3 className="gds-text--header-sm gds-text--bold text--uppercase -m-b-2">Analysis</h3>
                                <p>[National analysis] goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ornare tortor nec rutrum. Fusce accumsan ex felis, pretium ornare risus lobortis vel. Vivamus at enim eleifend, hendrerit turpis eget, volutpat lorem.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Regional header */}
                <section className="-p-a-2 bg--gray-medium text--white">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--sm-12 -text-center">
                                <h3 className="gds-text--header-sm gds-text--bold text--uppercase">Regional</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison/ranking data, needs [] */}
                <section className="-p-a-4">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--md-12 -m-b-3">
                                {/* Loop through regional comparisons in report and render them */}
                                {regionsInSection.map(function(section, i) {
                                    return (
                                        <RegionalComparison key={i} name={section.name} theme={themeName} />
                                    )
                                })}
                            </div>
                            <div className="gds-layout__column--md-12">
                                <h3 className="gds-text--header-sm gds-text--bold text--uppercase -m-b-2">Analysis</h3>
                                <p>[Regional analysis] goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ornare tortor nec rutrum. Fusce accumsan ex felis, pretium ornare risus lobortis vel. Vivamus at enim eleifend, hendrerit turpis eget, volutpat lorem.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});

module.exports = ReportSection;
