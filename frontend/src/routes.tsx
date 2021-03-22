import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateOccurrence from './pages/CreateOccurrence';

function Routes() {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={CreateOccurrence}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;