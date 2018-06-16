/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Flex,  Button,
  Heading, Paragraph,
  BackgroundGradient
} from 'atomic'


import UportCredentialsRequest from 'assimilation/containers/uport/UPortCredentialsRequest'

import PunchTheClock from 'features/examples/PunchTheClock'

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
        Punch The Clock
      </Heading>
      <Paragraph f={[1]}>
        A minimal smart contract to track arrivals and departures from a specific location.
      </Paragraph>
    </Box>
    <PunchTheClock
      contractAddress="0x565b6d77edac2edd9551177620e6f1185dc5feac"
      contractName="PunchTheClock"
    />
  </Container>
</Box>