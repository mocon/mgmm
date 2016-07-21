import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Home from './components/Home';
import Report from './components/Report';
import Review from './components/Review';

document.addEventListener('DOMContentLoaded', () => {
    render((
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/create-report" component={Report} />
            <Route path="/review-report" component={Review} />
        </Router>
    ), document.querySelector('[data-ui-role="content"]'));
});
