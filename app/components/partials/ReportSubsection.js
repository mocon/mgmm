import React from 'react'

var RegionalComparison = React.createClass({
    getInitialState: function() {
        return {
            showAllSections: false
        }
    },
    render: function() {
        let category = this.props.category,
            theme = this.props.theme,
            numberOfSubcats = category.subcats.length;

        return (
            <div>
                <div className="gds-layout__column--md-12">
                    <div className={`regional-comparison border-${theme} -m-b-4`}>
                        <h5 className={`text--${theme} gds-text--bold text--uppercase -m-b-2`}>{category.name} ({category.id})</h5>
                        <div className="regional-chart -block">
                            <ul className="regional-chart__list">

                                {/* Loop through subCategories in report and render them */}
                                {category.subcats.map(function(subcategory, i) {
                                    return (
                                        <li key={i} className="regional-chart__item">
                                            <h3 className="gds-text--bold -ellipsis">{subcategory.name}</h3>
                                            <p className="-m-b-2">{subcategory.id}</p>
                                            <div className={`regional-chart__item-score bg--${theme} text--white`} data-score={subcategory.value}>{subcategory.value}</div>
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

module.exports = RegionalComparison;
