/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Link, List } from 'atomic'
import contracts from 'contracts'

/* ------------------------------- Component -------------------------------- */
export default props =>
<List>
{
  Object.keys(contracts).map(i=>
  <Link
    to={`/dashboard/contracts/${contracts[i].contractName}`}
    children={contracts[i].contractName}
  />
)}
</List>