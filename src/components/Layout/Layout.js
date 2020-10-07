import React from 'react';

import Aux from '../../hoc/Aux';
import Navbar from '../Navbar/Navbar';
import Info from '../Info/Info';
import Photo from '../../containers/Photo/Photo';

import { Switch, Route, withRouter } from 'react-router-dom';

const layout = () => (
  <Aux>
    <Navbar></Navbar>
    <Switch>
      <Route path="/" exact component={withRouter(Photo)}></Route>
      <Route path="/info" exact component={withRouter(Info)}></Route>
    </Switch>
  </Aux>
);

export default layout;
