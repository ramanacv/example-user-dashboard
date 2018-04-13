/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Flex,  Button,
  Heading, Paragraph,
  BackgroundGradient
} from 'atomic'

import Resources from 'components/sections/FrontResources'
import EnsScan from 'features/EnsScan'
import MeetupEvent from 'features/MeetupEvent'
import DialogOpen from 'containers/dialog/DialogOpen'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center'>

    <Container mt={25} w={[560]} >
      <Heading f={[5,6]}>
        Collection of Features
      </Heading>
    <Paragraph f={[1]}>
      Do you wish you could start a new project without worrying about the "details" and just start building? The BuidlBox contains a collection of decentralized application components, features and integrations.
    </Paragraph>
    </Container>

    <Container mt={25} w={[560]} >
      <Heading f={[5,6]}>
        uPort
      </Heading>
      <Flex justify="space-between" >
        <DialogOpen foundry='WrapperMeetupEvent'>
          <Button gradient='purple' w={1} >
            Meetup RSVP
          </Button>
        </DialogOpen>
        <DialogOpen foundry='ViewHowItWorks'>
          <Button gradient='purple' w={1} >
            Token Interaction
          </Button>
        </DialogOpen>
        <DialogOpen foundry='ViewHowItWorks'>
          <Button gradient='purple' w={1} >
            Theme Selection
          </Button>
        </DialogOpen>
      </Flex>
    </Container>

    <Container mt={45} w={[560]} >
      <Heading f={[5]}>
        IPFS
      </Heading>
      <Flex justify="space-between" >
        <DialogOpen foundry='ViewHowItWorks'>
          <Button gradient='cherry' w={1} >
            Upload Files
          </Button>
        </DialogOpen>
        <DialogOpen foundry='ViewHowItWorks'>
          <Button gradient='cherry' w={1} >
            Download Files
          </Button>
        </DialogOpen>
        <DialogOpen foundry='ViewHowItWorks'>
          <Button gradient='cherry' w={1} >
            Share Files
          </Button>
        </DialogOpen>
      </Flex>
    </Container>
    
    <Container mt={45} w={[560]} >
      <Heading f={[5]}>
        ENS
      </Heading>
      <Flex justify="space-between" >
        <DialogOpen foundry='ViewHowItWorks'>
          <Button gradient='blueLight' w={1} >
            Name Resolution
          </Button>
        </DialogOpen>
        <DialogOpen foundry='ViewHowItWorks'>
          <Button gradient='blueLight' w={1} >
            Generate Bid
          </Button>
        </DialogOpen>
        <DialogOpen foundry='ViewHowItWorks'>
          <Button gradient='blueLight' w={1} >
            Create Sub-Domain
          </Button>
        </DialogOpen>
      </Flex>
    </Container>

    <Container w={[620]} ta='center' py={150} >
      <Box p={40} gradient="purple" color="white" boxShadow={3} >
        <MeetupEvent
          contractAddress="0x311a70681f008d51f01e75032ee766718c9d74ba"
          contractName="MeetupEvent"
        />
      </Box>
    </Container>
  <Resources/>
</Box>