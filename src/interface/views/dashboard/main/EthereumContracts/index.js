/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { dataMining } from 'assets/shapes'
import {
  Flex, Box, 
  Heading, SVG,
  HorizontalRule,
  Route
} from 'atomic'
import contracts from 'contracts'
import EthersContractInit from 'assimilation/containers/ethers/EthersContractInit'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box p={20} >
  {
    Object.keys(contracts).map(i=>
    <Route
      path={`/dashboard/contracts/${contracts[i].contractName}`}
      component={EthersContractInit}
      delta={contracts[i].contractName}
      contractName={contracts[i].contractName}
      ethName={contracts[i].contractName}
      ethAbi={contracts[i].abi}
      ethAddress={'0x345ca3e014aaf5dca488057592ee47305d9b3e10'}
    />
  )}
</Box>