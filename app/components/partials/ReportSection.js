import React from 'react'

var BarChart = require('react-chartjs').Bar;

var ReportSection = React.createClass({
    render: function() {
        var themeId = this.props.themeId,
            themeColors = ["#f0515a", "#00b4aa", "#545487", "#f36b23", "#00acc8"],
            chartData = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "A dataset",
                        fillColor: themeColors[themeId],
                        strokeColor: "rgba(0,0,0,0)",
                        data: [65, 59, 80, 81, 56, 55, 40],
                    }
                ]
            },
            chartOptions = {
                responsive: true,
                maintainAspectRatio: false
            };

        return (
            <div>
                {/* Section header, needs [category name] */}
                <section className={`-p-a-4 bg--${this.props.themeClassName} text--white`}>
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--sm-12 -text-center">
                                <h3 className="gds-text--header-md gds-text--bold text--uppercase">[Category name] goes here</h3>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section content, needs [graph content], & [analysis] */}
                <section className="-p-a-4">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            <div className="gds-layout__column--md-8 -m-b-4-sm">
                                <BarChart data={chartData} options={chartOptions} height="300" />
                            </div>
                            <div className="gds-layout__column--md-4">
                                <h3 className="gds-text--header-sm gds-text--bold text--uppercase -m-b-2">Analysis</h3>
                                <p>[Analysis] goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat ornare tortor nec rutrum. Fusce accumsan ex felis, pretium ornare risus lobortis vel. Vivamus at enim eleifend, hendrerit turpis eget, volutpat lorem.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});

module.exports = ReportSection;
