import React from 'react';
import { Route, Switch } from "react-router-dom";
import View from '@View';
import RouterConfig from './RouterConfig';

export default class Router extends View {
    render() {
        return (
            <Switch>
                {
                    RouterConfig.map((item) => {
                        return (<Route exact key={item.url} path={item.url} component={item.component} />);
                    })
                }
            </Switch>
        );
    }
}
