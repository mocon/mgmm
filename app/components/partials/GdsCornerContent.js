import React from 'react';
import { Link } from 'react-router';

var GdsCornerContent = React.createClass({
    getInitialState: function() {
        return {
            side: "gds-corner-content--right",
            shown: ""
        }
    },
    _toggleSide: function() {
        let _this = this,
            currentSide = _this.state.side;

        if (currentSide === "gds-corner-content--right") {
            _this.setState({side: "gds-corner-content--left"});
        } else {
            _this.setState({side: "gds-corner-content--right"});
        }
    },
    _toggleShown: function() {
        let _this = this,
            currentShown = _this.state.shown;

        if (currentShown === "gds-corner-content--shown") {
            _this.setState({shown: ""});
        } else {
            _this.setState({shown: "gds-corner-content--shown"});
        }
    },
    render: function() {
        return (
            <div className={`gds-corner-content ${this.state.side} ${this.state.shown}`}>
                <div onClick={this._toggleShown} className="gds-corner-content__header">
                    <h4 className="gds-corner-content__title">Save & Share Link</h4>
                    <div className="gds-corner-content__controls">
                        {/*<button onClick={this._toggleSide} className="gds-corner-content__button"><i className="fa fa-arrows-h"></i></button>*/}
                        <button className="gds-corner-content__button"><i className="fa fa-arrows-v"></i></button>
                    </div>
                </div>
                <div className="gds-corner-content__block -p-a-3">
                    <button onClick={this.props.toggleModal} className="gds-button gds-button--primary gds-button--block">Generate Shareable Link</button>
                    <Link className="no-underline" to="/"><button onClick={this.props.toggleModal} className="gds-button gds-button--link gds-button--block">Back to Reports</button></Link>
                </div>
            </div>
        );
    }
});

module.exports = GdsCornerContent;
