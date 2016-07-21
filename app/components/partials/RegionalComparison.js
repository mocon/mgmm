import React from 'react'

var RegionalComparison = React.createClass({
    render: function() {
        return (
            <div className="gds-layout__column--md-12 gds-layout__column--lg-6">
                <div className="regional-comparison -m-b-3">
                    <h5 className={`text--${this.props.theme} gds-text--bold text--uppercase`}>{this.props.name}</h5>
                    <div className="regional-chart -block">
                        <ul className="regional-chart__list">
                            <li className="regional-chart__item">
                                <img className="img--full-width" src="https://c.gumgum.com/ads/com/mgmm/img/raster/logo--burgerking.png" alt="Burger King" />
                                <div className={`regional-chart__item-score bg--${this.props.theme} text--white`}>98</div>
                            </li>
                            <li className="regional-chart__item">
                                <img className="img--full-width" src="https://c.gumgum.com/ads/com/mgmm/img/raster/logo--burgerking.png" alt="Burger King" />
                                <div className={`regional-chart__item-score bg--${this.props.theme} text--white`}>94</div>
                            </li>
                            <li className="regional-chart__item">
                                <img className="img--full-width" src="https://c.gumgum.com/ads/com/mgmm/img/raster/logo--burgerking.png" alt="Burger King" />
                                <div className={`regional-chart__item-score bg--${this.props.theme} text--white`}>86</div>
                            </li>
                            <li className="regional-chart__item">
                                <img className="img--full-width" src="https://c.gumgum.com/ads/com/mgmm/img/raster/logo--burgerking.png" alt="Burger King" />
                                <div className={`regional-chart__item-score bg--${this.props.theme} text--white`}>81</div>
                            </li>
                            <li className="regional-chart__item">
                                <img className="img--full-width" src="https://c.gumgum.com/ads/com/mgmm/img/raster/logo--burgerking.png" alt="Burger King" />
                                <div className={`regional-chart__item-score bg--${this.props.theme} text--white`}>79</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = RegionalComparison;
