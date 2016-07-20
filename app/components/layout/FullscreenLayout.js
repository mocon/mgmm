import React from 'react';

const FullscreenLayout = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
});

module.exports = FullscreenLayout;
