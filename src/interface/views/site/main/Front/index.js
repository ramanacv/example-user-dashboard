/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box
} from 'atomic'
import Features from './features'
import Intergations from './integrations'
import Attestations from './attestations'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box>
  <Features/>
  <Attestations/>
  <Intergations/>
</Box>