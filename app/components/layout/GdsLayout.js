import React from 'react';

import GdsSlideNav from '../partials/GdsSlideNav';
import GdsHeader from '../partials/GdsHeader';

const GdsLayout = React.createClass({
    render: function() {
        return (
            <div>
                <GdsSlideNav/>
                <GdsHeader pageName={this.props.pageName}/>
                <div className="gds-slide-content">
                    <div className="gds-layout__container">
                        <div className="gds-layout__row">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = GdsLayout;
