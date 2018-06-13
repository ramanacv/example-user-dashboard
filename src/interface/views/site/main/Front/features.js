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
      Identity At The core
    </Heading>
    <Heading f={[2,3]} color='charcoal' >
      Build truly distributed applications with a decentralized database.
    </Heading>
    <Paragraph color='charcoal' f={[1]} mb={40} >
    Morbi sodales magna id nisl fermentum viverra. Ut quam eros, rhoncus ac risus vel, tempus congue lorem. Maecenas euismod tincidunt ipsum, nec varius quam viverra sit amet. Sed sit amet lobortis sapien, vel bibendum justo. Suspendisse venenatis gravida nisi eget tincidunt. Proin eleifend justo sed libero molestie lacinia.
    </Paragraph>
    <Link to='solutions/uport' >
      <Button>
          Learn More
      </Button>
    </Link>
  </Box>

  <Box w={[1,1,0.45]} py={[20,40]}>
    <BrowserDisplay>
      <Image src={appManager} w={1} />
    </BrowserDisplay>
  </Box>

</Flex>

const IdentityServer = props =>
<Flex align='center'>
  
  <Box w={[1,1,0, 0.55]} ta='left' px={[20,40]}  order={[1,1, 2]} >
    <SVG svg={brandFirebase} w={60} />
    <Heading f={[4,5]} color='purple' >
      Firebase Integration
    </Heading>
    <Heading f={[2,3]} color='charcoal' >
      Launch a new private server to manage uPort Signing Keys in minutes
    </Heading>
    <Paragraph color='charcoal' f={[1]} mb={40} >
    Morbi sodales magna id nisl fermentum viverra. Ut quam eros, rhoncus ac risus vel, tempus congue lorem. Maecenas euismod tincidunt ipsum, nec varius quam viverra sit amet. Sed sit amet lobortis sapien, vel bibendum justo. Suspendisse venenatis gravida nisi eget tincidunt. Proin eleifend justo sed libero molestie lacinia.
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

const IdentityComponents = props =>
<Flex align='center'>
  
  <Box w={[1,1,0, 0.55]} ta='left' px={[20,40]} >
    <SVG svg={brandMetaMask} w={60} />
    <Heading f={[4,5]} color='purple' >
      Buidling Blocks
    </Heading>
    <Heading f={[2,3]} color='charcoal' >
      Start experimenting with Web3 technology quickly and easily.
    </Heading>
    <Paragraph color='charcoal' f={[1]} mb={40} >
    Morbi sodales magna id nisl fermentum viverra. Ut quam eros, rhoncus ac risus vel, tempus congue lorem. Maecenas euismod tincidunt ipsum, nec varius quam viverra sit amet. Sed sit amet lobortis sapien, vel bibendum justo. Suspendisse venenatis gravida nisi eget tincidunt. Proin eleifend justo sed libero molestie lacinia.
    </Paragraph>
    <Link to='solutions/uport' >
      <Button>
          Learn More
      </Button>
    </Link>
  </Box>

  <Box w={[1,1,0.45]} py={[20,40]}>
    <BrowserDisplay>
      <Image src={MetaMaskContract} w={1} />
    </BrowserDisplay>
  </Box>

</Flex>


export default props =>
<Section py={[50,100]} >
  <Container w={[1220]} >
    <IdentityCore/>
    <IdentityServer/>
    <IdentityComponents/>
  </Container>
</Section>