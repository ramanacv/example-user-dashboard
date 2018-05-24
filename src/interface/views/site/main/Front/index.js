/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Flex,  Button,
  Heading, Paragraph,
  BackgroundGradient
} from 'atomic'

import UPortAttestAddressForm from 'features/uport/UPortAttestAddressForm'
import UPortAttestEvent from 'features/uport/UPortAttestEvent'
import UPortERC20Transfer from 'features/uport/UPortERC20Transfer'
import EventsList from 'features/Events/EventsList'
import ERC20Transfer from 'features/ERC20/ERC20Transfer'
import ERC20Approve from 'features/ERC20/ERC20Approve'
import ERC20Deploy from 'features/ERC20/ERC20Deploy'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center' py={100} >
  <Container mt={25} w={[860]} >
    <ERC20Deploy/>
    <UPortERC20Transfer/>
    <UPortAttestAddressForm/>
    <UPortAttestEvent/>
    <EventsList/>
  </Container>
</Box>