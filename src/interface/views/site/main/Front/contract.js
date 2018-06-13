/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { codingOutside } from 'assets/images'
import {
  Flex, Box, Section, Container,
  Heading, Paragraph, BackgroundImage
} from 'atomic'
// Features 
import UPortERC20Transfer from 'features/uport/UPortERC20Transfer'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Section bg="white" py={[50,150]} >
  <BackgroundImage src={codingOutside}/>
  <Container w={[980]} >
    <Flex>
      <Box w={[1,1,0.5]} px={30} >
        <Heading f={[3,4]}>
          Smart Contract Interactions
        </Heading>
        <Paragraph f={[2]}>
          Send smart contract function signing requests to uPort identities. Instantly.
        </Paragraph>
        <Paragraph f={[1]}>
          The uPort infrastructure enables a buttery smooth user experierence. Users of a decentralized application won't have to worry about gas costs or generating private keys. Simply login and starting interacting with the decentralized application.
        </Paragraph>
        <Paragraph f={[1]}>
          Nulla dictum ligula mi, at egestas orci finibus consectetur. Nulla ornare convallis elit. Nunc auctor elit quis egestas egestas. Fusce eu luctus velit. Sed lobortis iaculis velit, non imperdiet sem commodo nec.
        </Paragraph>
      </Box>
      <Box w={[1,1,0.5]} p={20} >
        <Heading f={[3]} ta='center' >
          ERC20 Transfer Example
        </Heading>
        <Heading f={[1]} ta='center' >
          Send a Transaction Signing request directly to the uPort Mobile App
        </Heading>
        <UPortERC20Transfer/>
        <Paragraph f={[0]} color='gray' >
          Requires first logging in with uPort to send transaction request.
        </Paragraph>
      </Box>
    </Flex>
  </Container>
</Section>