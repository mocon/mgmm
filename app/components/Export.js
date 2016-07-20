import React from 'react'
import { Link } from 'react-router'

import Header from './Header'
import Footer from './Footer'

var Export = React.createClass({
  getInitialState: function() {
    return {
      pageTitle: 'Export Report'
    }
  },
  componentDidMount: function() {
    window.scrollTo(0, 0);
  },
  render: function() {
    return (
      <div>
        <Header pageTitle={this.state.pageTitle} />
        <section className="main-content">
          <p>Export goes here</p>
        </section>
        <Footer />
      </div>
    );
  }
});

module.exports = Export;
