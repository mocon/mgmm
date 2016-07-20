import React from 'react'

var Footer = React.createClass({
  render: function() {
    var currentYear = new Date().getFullYear();

    return (
      <footer>&copy; Copyright GumGum {currentYear}</footer>
    );
  }
});

module.exports = Footer;
