/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Flex,  Button,
  Heading, Paragraph,
  BackgroundGradient
} from 'atomic'
import MeetupEvent from 'features/examples/MeetupEvent'
import UportCredentialsRequest from 'assimilation/containers/uport/UPortCredentialsRequest'
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
        Meetup Event
      </Heading>
      <Paragraph f={[1]}>
        Register for a public event by staking ether. In the future staking tokens will be included.
      </Paragraph>
    </Box>
    <MeetupEvent
      contractAddress="0x311a70681f008d51f01e75032ee766718c9d74ba"
      contractName="MeetupEvent"
    />
  </Container>
</Box>