import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { Router, Route, browserHistory } from 'react-router-dom';
import { Home, PlanetDetail } from 'pages';
import store from './store';

import App from 'components/App';

const Root = () => {
    return (
        <Provider store = {store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
        // <Provider store = {store}>
        //     <Router>
        //         <div>
        //             <Route exact path='/' component={Home}/>                    
        //             <Route path='/detail' component={PlanetDetail}/>
        //         </div>
        //     </Router>
        // </Provider>
    );
};

export default Root;