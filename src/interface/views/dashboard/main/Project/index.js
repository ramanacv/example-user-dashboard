/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Switch } from 'react-router-dom';
/* ------------------------- Internal Dependencies -------------------------- */
import {Route} from 'atomic'
/*-* Foundry *-*/
import {ProjectProfile} from 'entity'
import {ProjectList} from 'entity'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Switch>
  <Route 
    path={`/projects/:eid`}
    component={ProjectProfile}
    styled={{
      header: {
        color: 'white',
        py: [100,150]
      }
    }}
  /> 
  <Route 
    path={`/dashboard/projects/:eid`}
    component={ProjectProfile}
    styled={{
      header: {
        color: 'white',
        py: [100,150]
      }
    }}
  /> 
  <Route
    exact
    path={`/dashboard/projects`} 
    component={ProjectList}
    styled={{
      p: 50
    }}
  />
</Switch>