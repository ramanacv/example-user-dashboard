/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { earth, city } from 'assets/images'
import {
  Box, Container, Flex,  Button,
  Heading, Paragraph, Section,
  BackgroundGradient, BackgroundImage
} from 'atomic'

import UPortAttestAddressForm from 'features/uport/UPortAttestAddressForm'
import UPortAttestEvent from 'features/uport/UPortAttestEvent'
import UPortERC20Transfer from 'features/uport/UPortERC20Transfer'
import EventsList from 'features/Events/EventsList'
import ERC20Transfer from 'features/ERC20/ERC20Transfer'
import ERC20Approve from 'features/ERC20/ERC20Approve'
import ERC20Deploy from 'features/ERC20/ERC20Deploy'
import AdminUserList from 'features/AdminUserList'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box>
  <Box align='center' justify='center' py={100} >
    <Container mt={25} w={[980]} ta='center' >
      <Heading f={[4,5]} color="purple" >
        BuidlBox - Beta
      </Heading>
      <Paragraph f={[1]}>
        The BuidlBox is a boilerplate for rapidly prototyping creating Web 2.0 and Web 3.0 applications.
      </Paragraph>

      <Paragraph f={[1]}>
        The boilerplate includes includes ready-to-go components and integrations with popular decentralized solutions (uPort, IPFS, ethers.js, Web3, ShapeShift, 0x), so developers can quickly launch new decentralized applications, without worrying about the details.
      </Paragraph>

      <Flex justify='space-evenly' mt={20} >
        <Box w={[1,1,0.30]} p={10} >
          <Heading f={[3]} color='purple' >
            Generate Attestation
          </Heading>
          <Paragraph f={[1]}>
            Privately sign attestations. Send to self-sovereign identities.
          </Paragraph> 
        </Box>
        <Box w={[1,1,0.30]} p={10} >
          <Heading f={[3]} color='purple' >
            Smart Contract Functions
          </Heading>
          <Paragraph f={[1]}>
            Privately sign attestations. Send to self-sovereign identities.
          </Paragraph> 
        </Box>
        <Box w={[1,1,0.30]} p={10} >
          <Heading f={[3]} color='purple' >
            Decentralized Authentication
          </Heading>
          <Paragraph f={[1]}>
            Privately sign attestations. Send to self-sovereign identities.
          </Paragraph> 
        </Box>
      </Flex>

      <Box mt={40} >
        <Heading f={[4,5]} color='purple'>
          The Growing Community
        </Heading>
        <AdminUserList/>
      </Box>

    </Container>
  </Box>
  <Section gradient="purple" py={[50,150]} >
    <BackgroundImage src={earth} o={0.5} />
    
    <Container w={[980]} color="charcoal" bg="white" p={45} br={5} boxShadow={2} z={5} pos='relative' >
      <Flex>
        <Box w={[1,1,0.5]} >
          <Heading f={[4,5]}>
            Generate Attestation
          </Heading>
          <Paragraph f={[1]}>
            Privately sign attestations. Send to self-sovereign identities.
          </Paragraph> 
        </Box>
        <Box w={[1,1,0.5]} >
          <UPortAttestAddressForm/>
        </Box>
      </Flex>
    </Container>

  </Section>

    <Section bg="white" py={[50,150]} >
    
    <Container w={[980]} >
      <Flex>
        <Box w={[1,1,0.5]} >
          <Heading f={[4,5]}>
            Smart Contract 
          </Heading>
          <Paragraph f={[2]}>
            Send smart contract function signing requests to uPort identities. Instantly.
          </Paragraph>
          <Paragraph f={[1]}>
            The uPort infrastructure enables a buttery smooth user experierence. Users of a decentralized application won't have to worry about gas costs or generating private keys. Simply login and starting interacting with the decentralized application.
          </Paragraph>
        </Box>
        <Box w={[1,1,0.5]} p={20} >
          <UPortERC20Transfer/>
        </Box>
      </Flex>
    </Container>

  </Section>

  <Section gradient="purple" py={[50,150]} >
    <BackgroundImage src={city} o={0.5} z={0} />

    <Container w={[980]} color="charcoal" bg="white" p={45} br={5} boxShadow={2} z={5} pos='relative' >
      <Flex>
        <Box w={[1,1,0.5]} >
          <Heading f={[4,5]}>
            Create Event Attestation
          </Heading>
          <Paragraph f={[2]}>
            Create a proof of attendance system to reward event participants.
          </Paragraph>
        </Box>
        <Box w={[1,1,0.5]} >
          <UPortAttestEvent/>
        </Box>
      </Flex>
      <Box mt={20} >
        <EventsList/>
      </Box>
    </Container>

  </Section>

</Box>