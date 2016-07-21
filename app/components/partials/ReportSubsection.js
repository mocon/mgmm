import React from 'react'

var RegionalComparison = React.createClass({
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
                        <h5 className={`text--${theme} gds-text--bold text--uppercase -m-b-2`}>{tier1.name} ({tier1.id})</h5>
                        <div className="regional-chart -block">
                            <ul className="regional-chart__list">



                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = RegionalComparison;
