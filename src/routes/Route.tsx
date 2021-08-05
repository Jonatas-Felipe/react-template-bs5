import React, { ComponentType, useMemo } from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouterProps,
} from 'react-router-dom';

import Default from '~/pages/_Layouts/Default';

interface RouteProps extends ReactDOMRouterProps {
  isPrivate?: boolean;
  component: ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const Layout = useMemo(() => {
    return Default;
  }, []);

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return (
          <Layout>
            <Component />
          </Layout>
        );
      }}
    />
  );
};

export default Route;
