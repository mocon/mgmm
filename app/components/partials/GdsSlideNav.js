import React from 'react'
import { Link } from 'react-router'

var GdsSlideNav = React.createClass({
    render: function() {
        return (
            <nav className="gds-slide-nav">
                <div className="gds-slide-nav__group">
                    <label className='gds-slide-nav__label'>Main Menu</label>
                    <ul className="gds-slide-nav__list">
                        <li className="gds-slide-nav__list-item gds-slide-nav__list-item--primary">
                            <Link to="/" className="gds-slide-nav__link">View All Reports</Link>
                        </li>
                        <li className="gds-slide-nav__list-item gds-slide-nav__list-item--primary">
                            <Link to="/create-report" className="gds-slide-nav__link">Create Report</Link>
                        </li>
                        <li className="gds-slide-nav__list-item gds-slide-nav__list-item--primary">
                            <Link to="/review-report" className="gds-slide-nav__link">Review Report</Link>
                        </li>
                        {/* <li className="gds-slide-nav__list-item gds-slide-nav__list-item--primary">
                            <Link to="/export-report" className="gds-slide-nav__link">Export Report</Link>
                        </li>*/}
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = GdsSlideNav;
