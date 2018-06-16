/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Flex,  Button,
  Heading, Paragraph,
  BackgroundGradient
} from 'atomic'


import UportCredentialsRequest from 'assimilation/containers/uport/UPortCredentialsRequest'

import EnsResolve from 'assimilation/containers/ens/EnsResolve'
import EnsScan from 'features/examples/EnsScan'

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
    <Box ta="center">
      <Heading f={[5,6]}>
        Ethereum Name System
      </Heading>
      <Paragraph f={[1]}>
        Interact with the Ethereum Name System using ready-to-go smart contracts.
      </Paragraph>
    </Box>
    <Box boxShadow={1} gradient="purple" color="white" br={15} mt={40} p={40} >
      <Heading f={[3,4]} ta="center">
        Resolve ENS
      </Heading>
      <EnsResolve/>
    </Box>
    <Box boxShadow={1} gradient="purple" color="white" br={15} mt={40} p={40} >
      <Heading f={[3]} ta="center">
        Resolve ENS
      </Heading>
      <EnsScan/>
    </Box>
  </Container>
</Box>