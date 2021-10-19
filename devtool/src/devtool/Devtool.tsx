import React from 'react';
import { Route } from '../_shared/components';
import { RouteName } from '../_shared/contexts';
import { Layout } from '../_shared/template';
import { Home, Slice, ComponentPage } from './pages';

import '../index.css';
import './style.css';

const Devtool: React.FC = () => {
  return (
    <Layout>
      <Route name={RouteName.HOME}>
        <Home />
      </Route>
      <Route name={RouteName.SLICE}>
        <Slice />
      </Route>
      <Route name={RouteName.COMPONENT}>
        <ComponentPage />
      </Route>
    </Layout>
  );
};

export default Devtool;
