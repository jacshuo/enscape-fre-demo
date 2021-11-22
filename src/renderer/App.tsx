import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import './App.scss';
// import { PONG } from '../ipcs/events';
import routes, { RouteInfo } from '../routes';

const generateRoute: (routeList: RouteInfo[]) => React.ReactNode = (
  routeList
) => {
  return routeList.map((route) => {
    if (route.children && route.children.length > 0) {
      return (
        <Route key={route.path} path={route.path} exact={route.exact}>
          {generateRoute(route.children)}
        </Route>
      );
    }
    return (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    );
  });
};

export default function App() {
  useEffect(() => {
    // window['electron'].ping();
    // window['electron'].on(PONG, (msg) => {
    //   console.log(msg);
    // });
    console.log(history);
  }, [history]);
  console.log(generateRoute(routes));
  return (
    <Router>
      <Switch>{generateRoute(routes)}</Switch>
    </Router>
  );
}
