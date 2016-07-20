import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Home from './components/Home';
import Report from './components/Report';
import Review from './components/Review';
import Export from './components/Export';

document.addEventListener('DOMContentLoaded', () => {
    render((
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/report" component={Report} />
            <Route path="/review" component={Review} />
            <Route path="/export" component={Export} />
        </Router>
    ), document.querySelector('[data-ui-role="content"]'));
});
