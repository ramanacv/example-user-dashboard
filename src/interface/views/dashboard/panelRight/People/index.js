/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Switch } from 'react-router-dom';
/* ------------------------- Internal Dependencies -------------------------- */
import { svg } from 'assets'

import {
  Flex, Box,
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient,
  Route,
} from 'atomic'
/*-* Foundry *-*/
import AdminUserList from 'features/AdminUserList'
import PersonTransactions from 'features/people/PersonTransactions'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box>
  <Switch>
    <Route 
      path={`/dashboard/people/:eid`}
      component={PersonTransactions}
      styled={{
        bg: 'grayLight',
        color: 'charcoal',
        p: 15,
        w: 300
      }}
    /> 
  </Switch>
</Box>