import React from 'react';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';

import App from 'components/App';

const Root = () => {
    return (
        // <BrowserRouter>
            <Provider store = {store}>
                <App />
            </Provider>
        // </BrowserRouter>
    );
};

export default Root;