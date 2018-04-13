/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Flex,
  Heading, Paragraph, BackgroundGradient,
  Route, HorizontalRule
} from 'atomic'

import contracts from 'contracts'
import EthersContractInit from 'assimilation/containers/ethers/EthersContractInit'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center'>
  <Container w={[980]} py={150} >
  {
  Object.keys(contracts).map(i=>
    <EthersContractInit
      path={`/dashboard/contracts/${contracts[i].contractName}`}
      component={EthersContractInit}
      delta={contracts[i].contractName}
      contractName={contracts[i].contractName}
      ethName={contracts[i].contractName}
      ethAbi={contracts[i].abi}
      ethAddress={'0x345ca3e014aaf5dca488057592ee47305d9b3e10'}
    />
  )}
  </Container>
</Box>