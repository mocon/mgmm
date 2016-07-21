import React from 'react'

import ReportSubsection from './ReportSubsection';

var BarChart = require('react-chartjs').Bar;

var ReportSection = React.createClass({
    getInitialState: function() {
        return {
            shouldShowAllCats: false
        }
    },
    _showAllCats: function() {
        let _this = this;

        _this.setState({shouldShowAllCats: true});
    },
    render: function() {
        var shouldShowAllCats = this.state.shouldShowAllCats,
            showAllCats = this._showAllCats,
            themeId = this.props.themeId,
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
                scaleFontFamily: "aspiralight",
                responsive: true,
                maintainAspectRatio: false,
                scaleLabel: function(object) {
                    return "  " + object.value;
                },
                responsive: true,
                pointDot: false,
                showTooltips: false
            },
            categories = [ // Pass these as props
                {
                    "id": "IAB7",
                    "name": "Automotive",
                    "subcats": [{
                        "id": "IAB7-1",
                        "name": "Alternative Medicine",
                        "value": 97
                    },
                    {
                        "id": "IAB7-2",
                        "name": "Alternative Medicine",
                        "value": 92
                    },
                    {
                        "id": "IAB7-2",
                        "name": "Alternative Medicine",
                        "value": 85
                    },
                    {
                        "id": "IAB7-3",
                        "name": "Alternative Medicine",
                        "value": 78
                    }]
                },
                {
                    "id": "IAB7",
                    "name": "Automotive",
                    "subcats": [{
                        "id": "IAB7-1",
                        "name": "Alternative Medicine",
                        "value": 97
                    },
                    {
                        "id": "IAB7-2",
                        "name": "Alternative Medicine",
                        "value": 92
                    },
                    {
                        "id": "IAB7-2",
                        "name": "Alternative Medicine",
                        "value": 85
                    },
                    {
                        "id": "IAB7-3",
                        "name": "Alternative Medicine",
                        "value": 78
                    }]
                },
                {
                    "id": "IAB7",
                    "name": "Automotive",
                    "subcats": [{
                        "id": "IAB7-1",
                        "name": "Alternative Medicine",
                        "value": 97
                    },
                    {
                        "id": "IAB7-2",
                        "name": "Alternative Medicine",
                        "value": 92
                    },
                    {
                        "id": "IAB7-2",
                        "name": "Alternative Medicine",
                        "value": 85
                    },
                    {
                        "id": "IAB7-3",
                        "name": "Alternative Medicine",
                        "value": 78
                    }]
                },
                {
                    "id": "IAB7",
                    "name": "Automotive",
                    "subcats": [{
                        "id": "IAB7-1",
                        "name": "Alternative Medicine",
                        "value": 75
                    },
                    {
                        "id": "IAB7-2",
                        "name": "Alternative Medicine",
                        "value": 61
                    },
                    {
                        "id": "IAB7-2",
                        "name": "Alternative Medicine",
                        "value": 55
                    },
                    {
                        "id": "IAB7-3",
                        "name": "Alternative Medicine",
                        "value": 45
                    }]
                },
                {
                    "id": "IAB7",
                    "name": "Automotive",
                    "subcats": [{
                        "id": "IAB7-1",
                        "name": "Alternative Medicine",
                        "value": 62
                    },
                    {
                        "id": "IAB7-2",
                        "name": "Alternative Medicine",
                        "value": 53
                    },
                    {
                        "id": "IAB7-2",
                        "name": "Alternative Medicine",
                        "value": 45
                    },
                    {
                        "id": "IAB7-3",
                        "name": "Alternative Medicine",
                        "value": 22
                    }]
                }
            ];

        // TODO: Pass in [category name] & [analysis] via props
        return (
            <div>
                {/* Colored header, needs [category name] */}
                <section className={`-p-a-4 bg--${this.props.themeClassName} text--white`}>
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--sm-12 -text-center">
                                <h3 className="gds-text--header-md gds-text--bold text--uppercase">[Campaign name]</h3>
                            </div>
                        </div>
                    </div>
                </section>

                {/* National header */}
                <section className="-p-a-2 bg--gray-dark text--white">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--sm-12 -text-center">
                                <h3 className="gds-text--header-sm gds-text--bold text--uppercase">Tier I IAB Categories</h3>
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
                            <div className="gds-layout__column--md-4 -p-l-4">
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
                                <h3 className="gds-text--header-sm gds-text--bold text--uppercase">Tier II IAB Subcategories</h3>
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
                                {categories.map(function(category, i) {
                                    if (shouldShowAllCats) {
                                        {/* Show all categories */}
                                        return (
                                            <ReportSubsection key={i} theme={themeName} category={category} />
                                        )
                                    } else {
                                        {/* Show only top 2, then "View all", then bottom 2 */}
                                        if (i === 0) {
                                            return (
                                                <ReportSubsection key={i} theme={themeName} category={category} />
                                            )
                                        }
                                        if (i === 1) {
                                            return (
                                                <div>
                                                    <ReportSubsection key={i} theme={themeName} category={category} />
                                                    <button onClick={showAllCats} className="gds-button gds-button--block gds-button--default text--gray-medium -m-h-2 -m-b-4">Show All Categories</button>
                                                </div>
                                            )
                                        }
                                        if (i === categories.length - 2 || i === categories.length - 1) {
                                            return (
                                                <ReportSubsection key={i} theme={themeName} category={category} />
                                            )
                                        }
                                    }
                                })}

                            </div>
                            <div className="gds-layout__column--md-12">
                                <h3 className="gds-text--header-sm gds-text--bold text--uppercase -m-t-3 -m-b-2">Analysis</h3>
                                <p className="-p-b-6">[Regional analysis] goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ornare tortor nec rutrum. Fusce accumsan ex felis, pretium ornare risus lobortis vel. Vivamus at enim eleifend, hendrerit turpis eget, volutpat lorem.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});

module.exports = ReportSection;
