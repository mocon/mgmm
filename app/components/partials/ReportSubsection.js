import React from 'react'

var ReportSubsection = React.createClass({
    getInitialState: function() {
        return {
            showAllSections: false
        }
    },
    render: function() {
        let tier1 = this.props.tier1,
            theme = this.props.theme;

        return (
            <div>
                <div className="gds-layout__column--md-12">
                    <div className={`regional-comparison border-${theme} -m-b-4`}>
                        <h5 data-score-before={tier1.value} className={`tier-1-name gds-text--bold text--uppercase -p-b-2 -m-b-3`}>{tier1.name} ({tier1.id})</h5>
                        <div className="regional-chart -block">
                            <ul className="regional-chart__list">

                                {/* Loop through subCategories in report and render them */}
                                {tier1.tier2s.map(function(tier2, i) {
                                    return (
                                        <li key={i} className="regional-chart__item">
                                            <h3 className="gds-text--bold -ellipsis">{tier2.name}</h3>
                                            <p className="-m-b-2">{tier2.id}</p>
                                            <div className={`regional-chart__item-score bg--${theme} text--white`} data-score={tier2.value}>{tier2.value}</div>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ReportSubsection;
