import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
// import { Router, Route, browserHistory } from 'react-router-dom';
import { Home, PlanetDetail } from 'pages';
import store from './store';

import App from 'components/App';

const Root = () => (
    <Provider store = {store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);

export default Root;