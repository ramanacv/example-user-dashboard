/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route } from 'react-router';
/* ------------------------- External Dependencies -------------------------- */
import { Aside } from 'components/zones'

export default () => (
  <div>
    <Route path="/dashboard" component={Aside} />
  </div>);
