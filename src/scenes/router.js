import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main/Main';
import NotFound from './NotFound/NotFound'


export const routes = {
    main: '/',
    active: '/active',
    completed: '/completed'
};


export default function Router() {
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




