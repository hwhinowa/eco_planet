import React from 'react';
import { Provider } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';
// import { browserHistory } from 'react-router';
import { Home, PlanetDetail } from 'pages';
import store from './store';

import App from 'components/App';

const Root = () => (
    <Provider store = {store}>
        {/* <Router> */}
            <App/>
        {/* </Router> */}
    </Provider>
);

export default Root;