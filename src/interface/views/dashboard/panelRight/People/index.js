/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Switch } from 'react-router-dom';
/* ------------------------- Internal Dependencies -------------------------- */
import { svg } from 'assets'

import {
  Box,
  Route,
} from 'atomic'
/*-* Foundry *-*/
import MenuPerson from 'components/menus/MenuPerson'
import PersonTransactions from 'features/people/PersonTransactions'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Switch>
  <Route 
    path={`/dashboard/people/:eid`}
    component={MenuPerson}
    styled={{
      bg: 'grayLight',
      color: 'charcoal',
      p: 15,
      w: 300
    }}
  />
</Switch>