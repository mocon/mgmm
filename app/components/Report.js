import React from 'react';
import { Link, browserHistory } from 'react-router';
import Axios from 'axios';

import GdsLayout from './layout/GdsLayout';

var apiPath = 'http://192.168.74.160:9090/iab-reports';

var Report = React.createClass({
    getInitialState: function() {
        return {
            loadingStyle: {display: 'none'}
        }
    },
    componentDidMount: function() {
        window.scrollTo(0, 0);
        document.body.className += ' -has-page-header gg-theme-blue -has-slide-nav';
    },
    _isLoading: function() {
        let _this = this;

        _this.setState({loadingStyle: {display: 'block'}});
    },
    _sendApiRequest: function(e) {
        let _this = this,
            idsToSearch = _this.refs.campaignId.value,
            array = idsToSearch.split(",").map(function(val){
                return parseInt(val);
            }),
            postBody = {
                "campaignIds": array
            },
            config = {
                headers: {'Content-Type': 'application/json'}
            };

        e.preventDefault();
        _this._isLoading();

        Axios.post(apiPath, postBody, config)
        .then(function (response) {
          _this.setState({json: response.data});
          window.mylesJson = response.data; // shame
          browserHistory.push("/review-report"); // go to Review
        })
        .catch(function (response) {
          console.log('Error fetching JSON: ' + response);
        });
    },
    render: function() {
        let pageName = "New Report";

        return (
            <div>
                {/* Loading animation */}
                <div className="loading-bg" style={this.state.loadingStyle}>
                    <div className="gds-loading">
                      <div className="gds-loading__dot"></div>
                    </div>
                </div>
                <GdsLayout pageName={pageName}>
                    <section>
                        <div className="gds-layout__column--md-12">
                            <h1 className="gds-text--header-lg -m-b-4">Generate New Report</h1>
                        </div>
                        <div className="gds-layout__column--md-12">
                            <form ref="searchForm" onSubmit={this._sendApiRequest}>
                                <div className="gds-form-group -m-b-3">
                                    <label className="gds-form-group__label">Campaign IDs, comma separated</label>
                                    <input className="gds-form-group__text-input" type="text" ref="campaignId" placeholder="Campaign ID" />
                                </div>
                                <button type="submit" className="gds-button gds-button--primary gds-button--lg">Generate Report</button>
                            </form>
                        </div>
                    </section>
                </GdsLayout>
            </div>
        );
    }
});

module.exports = Report;
