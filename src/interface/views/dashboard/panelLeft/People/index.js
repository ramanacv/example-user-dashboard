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
import {PersonSearch} from 'entity'
import PersonProfileVerifications from 'features/people/PersonProfileVerifications'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Switch>
  <Route
    path={`/dashboard/people/:eid`}
    component={PersonProfileVerifications}
    styled={{
      bg: 'grayLight',
      color: 'charcoal',
      p: 15,
      w: 300
    }}
  />
</Switch>