import React from 'react';
import { Link } from 'react-router';

import offCanvas from '../../modules/offCanvas';

let GdsHeader = React.createClass({
    componentDidMount: function() {
        offCanvas.load();
    },
    render: function() {
        let pageName = this.props.pageName || "GumGum Hackathon",
            avatarStyle = {display: 'none'};

        return (
            <header className="gds-page-header">
                <div className="gds-page-header__product-bar">
                    <h6 className="gds-page-header__product-name">Data Explorer</h6>
                    <img className="gds-page-header__logo" src="https://ds.gumgum.com/images/svg/logo-white.svg"/>
                </div>
                <div className="gds-page-header__nav-bar">
                    <div className="gds-page-header__primary-nav" id="gg-slide-nav-button">
                        <button className="gds-page-header__menu">
                            <span className="gds-page-header__menu-line"></span>
                            <span className="gds-page-header__menu-line"></span>
                            <span className="gds-page-header__menu-line"></span>
                            <span className="gds-page-header__menu-line"></span>
                        </button>
                        <h4 className="gds-page-header__page-name gds-text__header--small">{pageName}</h4>
                    </div>
                    <div className="gds-page-header__secondary-nav">
                        <div className="gds-avatar" gg-avatar style={avatarStyle}>
                            <div className="gds-avatar__image">
                                <img src="https://ds.gumgum.com/images/ken.png" alt="Ken Weiner" height="100%" />
                            </div>
                            <div className="gds-avatar__menu">
                                <ul className="gds-avatar__menu-list">
                                    <li className="gds-avatar__menu-list-item -ellipsis"><a className="gds-avatar__menu-list-link" href="#">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="-clear-both"></div>
                </div>
            </header>
        );
    }
});

module.exports = GdsHeader;
