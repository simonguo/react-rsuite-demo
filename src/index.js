import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import './less/index.less';
import App from './components/App';

// Pages
import UserTable from './components/modules/UserTable';
import UserChart from './components/modules/UserChart';


const mountApp = (
    <Router history={hashHistory} >
        <Route path="/" component={App}>
            <Route path="user-table" component={UserTable} />
            <Route path="user-chart" component={UserChart} />
            <IndexRedirect to="user-table" />
        </Route>
    </Router>
);

ReactDOM.render(mountApp, document.getElementById('app'));
