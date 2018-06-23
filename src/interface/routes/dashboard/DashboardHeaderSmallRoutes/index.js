/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route } from 'atomic'
/* ------------------------- External Dependencies -------------------------- */
import RegionBranding  from 'components/regions/RegionBranding'
import RegionDiagnostics  from 'components/regions/RegionDiagnostics'

export default props =><Route path="/dashboard" component={RegionDiagnostics} />