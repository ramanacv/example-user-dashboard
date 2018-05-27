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
import PersonProfile from 'features/people/PersonProfile'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Switch>
  <Route 
    path={`/dashboard/people/:eid`}
    component={PersonProfile}
    styled={{
      header: {
        color: 'white',
        py: [100,150]
      }
    }}

  /> 
  <Route
    exact
    path={`/dashboard/people`} 
    component={AdminUserList}
  />
  {/* <Route
    exact
    collection={props.collection}
    path={`/dashboard/${props.entity}/add`} 
    component={FormEntityAddDynamic}
    formExtend={props.formExtend}
  />*/}
</Switch>