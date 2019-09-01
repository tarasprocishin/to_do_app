import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main/Main';
import NotFound from './NotFound/NotFound'


export const routes = {
    main: '/to_do_app/',
    active: '/to_do_app/active',
    completed: '/to_do_app/completed'
};

 
export default  function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.main} component={Main} />
                <Route path={routes.completed} component={Main} />
                <Route path={routes.active} component={Main} />
                <Route component={NotFound} component={NotFound} />  
            </Switch>
        </BrowserRouter>
    )
}