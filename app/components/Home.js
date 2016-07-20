import React from 'react'
import { Link } from 'react-router'

import Header from './Header'
import Footer from './Footer'

var Home = React.createClass({
  componentDidMount: function() {
    window.scrollTo(0, 0);
  },
  render: function() {
    return (
      <div>
        <Header />
        <section className="main-content">
          <p>List of all reports goes here</p>
        </section>
        <Footer />
      </div>
    );
  }
});

module.exports = Home;
