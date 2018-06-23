/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { MetaMaskContract, appManager, cloudFunctions, firebaseDatabase } from 'assets/images'
import { branduPort, brandFirebase, brandMetaMask, brandInfura, brandEthereum, brandBountiesNetwork } from 'assets/svg'
import {
  Flex, Box, Section, Container, Button,
  Heading, Image, Paragraph, Link, Span, SVG,
  BrowserDisplay, BackgroundImage
} from 'atomic'
import PerfectScrollbar from 'react-perfect-scrollbar'


const IdentityCore = props =>
<Flex align='center'>
  
  <Box w={[1,1,0, 0.55]} ta='left' px={[20,40]} >
    <SVG svg={branduPort} w={60} />
    <Heading f={[4,5]} color='purple' >
      Register A Distributed Application
    </Heading>
    <Heading f={[2,3]} color='charcoal' >
      Launch a new distributed application using the uPort AppManager
    </Heading>
    <Paragraph color='charcoal' f={[1]} mb={40} >
      To privately sign and request credentials and attestations requires generating a public/private key-pair and registering the public key in an Ethereum Claims Registry. Using Firebase Cloud Functions we can easily deploy the required functionality.
    </Paragraph>
    <a href='https://appmanager.uport.me/' target="_blank" >
      <Button>
          Register Decentralized Application
      </Button>
    </a>
  </Box>

  <Box w={[1,1,0.45]} py={[20,40]}>
    <BrowserDisplay>
      <Image src={appManager} w={1} />
    </BrowserDisplay>
  </Box>

</Flex>

const IdentityServer = props =>
<Flex align='center' mt={30} >

  <Box w={[1,1,0, 0.55]} ta='left' px={[20,40]}  order={[1,1, 2]} >
    <SVG svg={brandFirebase} w={60} />
    <Heading f={[4,5]} color='purple' >
      Firebase Cloud Functions
    </Heading>
    <Heading f={[2,3]} color='charcoal' >
      Deploy Private Keys in A Cloud Environment
    </Heading>
    <Paragraph color='charcoal' f={[1]} mb={40} >
      Starting managing decentralized identity login using ready-to-go Firebase Cloud Functions. Be sure the reference the README for details on how to upload private keys in the runtime environment.   
    </Paragraph>
    <Link to='solutions/uport' >
      <Button>
          Learn More
      </Button>
    </Link>
  </Box>

  <Box w={[1,1,0.45]} order={[2, 2, 1]} py={[20,40]}>
    <BrowserDisplay>
      <Image src={firebaseDatabase} w={1} />
    </BrowserDisplay>
  </Box>

</Flex>



export default props =>
<Section py={[50,100]} >
  <Container w={[1220]} >
    <IdentityCore/>
    <IdentityServer/>
  </Container>
</Section>