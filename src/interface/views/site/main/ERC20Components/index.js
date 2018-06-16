/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container,
  Heading, Paragraph,
} from 'atomic'


import UportCredentialsRequest from 'assimilation/containers/uport/UPortCredentialsRequest'

import ERC20Transfer from 'features/tokens/ERC20Transfer'
import ERC20TransferFrom from 'features/tokens/ERC20TransferFrom'
import ERC20Approve from 'features/tokens/ERC20Approve'
import ERC20Deploy from 'features/tokens/ERC20Deploy'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center'>
<Container w={[420]} py={50} >
  <UportCredentialsRequest
    display="cardAccount"
    requested={['name', 'avatar', 'country', 'location', 'phone', 'email']}
  />
  </Container>
  <Container w={[620]} py={50} >
    <Box ta="center" >
      <Heading f={[3]}>
        ERC20 Components
      </Heading>
      <Paragraph f={[1]}>
        Easily interact with ERC20 smart contracts using uPort
      </Paragraph>
    </Box>
      <Box boxShadow={1} br={15} mt={40} p={20} >
        <Heading f={[3]} ta="center" >
          Transfer
        </Heading>
        <ERC20Transfer contractName="PAK" address="0xdf4fae0cf4109ad7afa39bbddfaa4dc5637dc5ca" />
      </Box>
      <Box boxShadow={1} br={15} mt={40} p={20} >
        <Heading f={[3]} ta="center" >
          Transfer From
        </Heading>
        <ERC20TransferFrom contractName="PAK" address="0xdf4fae0cf4109ad7afa39bbddfaa4dc5637dc5ca" />
      </Box>
      <Box boxShadow={1} br={15} mt={40} p={20} >
        <Heading f={[3]} ta="center" >
          Approve
        </Heading>
        <ERC20Approve contractName="PAK" address="0xdf4fae0cf4109ad7afa39bbddfaa4dc5637dc5ca" />
      </Box>
      <Box boxShadow={1} br={15} mt={40} p={20} >
        <Heading f={[3]} ta="center" >
          Deploy ERC20 Smart Contract
        </Heading>
        <ERC20Deploy />
      </Box>
  </Container>
</Box>