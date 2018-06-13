/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { earth, brandTruffle, brandDrizzle, codingOutside } from 'assets/images'
import { branduPort, brandMetaMask, brandInfura } from 'assets/svg'
import {
  Flex, Box, Container, Button,
  Heading, Image, Paragraph, Link, Span, SVG,
  BrowserDisplay, BackgroundImage
} from 'atomic'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default props =>
<Flex justify='center' >

  <Box w={[1,1,0, 0.35]}>
    <Box ml={[1,1,0, '-30%']} w={[1,1,0, '130%']} >
    <Heading f={[4,5]} color='purple' >
      Everything You Need
    </Heading>
    <Paragraph color='charcoal' f={[1]} mb={40} >
      Starting prototyping distributed applications today.
    </Paragraph>
      <BrowserDisplay>
        <Image src={earth} w={1} />
      </BrowserDisplay>
    <Container w={[560]} ta='center' py={[30]} >
      <Flex justify='space-between' my={[20,30]} >
        <Button gradient='cherry' >
          Resources
        </Button>
        <Button gradient='green' >
          Bounties
        </Button>
        <Button gradient='ibize' >
          Hackathons
        </Button>
      </Flex>
      <Paragraph f={[0]}>
        Start building the future of distributed applications today.
      </Paragraph>
    </Container>
  </Box>
  </Box>

  <Box w={[1,1,0, 0.65]} px={[30,60]} >
  <Box  py={30} h={650} >
    <PerfectScrollbar wheelPropogation >
      <Flex direction='column' px={[20,40,45]} >
    
        {/* Begin : uPort Item */}
        <Flex 
          bg='white'
          boxShadow={0} br={10}
          mb={[20,30]}
          hover={{
            boxShadow: 1
          }}
        >
          <Flex align='center' justify='center' w={[1,1, 0.3]} p={20} >
            <SVG svg={branduPort} w={60} />
          </Flex>
          <Flex justify='center' direction='column' w={[1,1, 0.7]} ta='left' p={25} >
            <Heading f={[2,3]} color='charcoal' >
              uPort
            </Heading>
            <Heading f={[1]} color='purple' >
              Personal Data Management Platform
            </Heading>
            <Paragraph f={[1]}>
              Ut placerat dolor sapien, et varius justo rutrum quis. Donec sollicitudin tincidunt risus non feugiat. Suspendisse consequat sit amet nibh et condimentum.
            </Paragraph>
            <Paragraph color='charcoal' f={[1]}>
              <strong>Learn More</strong>
            </Paragraph>
          </Flex>
        </Flex>
        {/* End : uPort Item */}
        {/* Begin : MetaMask Item */}
        <Flex 
          bg='white'
          boxShadow={0} br={10}
          mb={[20,30]}
          hover={{
            boxShadow: 1
          }}
        >
          <Flex align='center' justify='center' w={[1,1, 0.3]} p={20} >
            <SVG svg={brandMetaMask} w={60} />
          </Flex>
          <Box bg="" w={[1,1, 0.7]} ta='left' p={25} >
            <Heading f={[2,3]} color='charcoal' >
              MetaMask
            </Heading>
            <Heading f={[1]} color='purple' >
              Interact with The Ethereum Blockchain
            </Heading>
            <Paragraph f={[1]}>
              Ut placerat dolor sapien, et varius justo rutrum quis. Donec sollicitudin tincidunt risus non feugiat. Suspendisse consequat sit amet nibh et condimentum.
            </Paragraph>
            <Paragraph color='charcoal' f={[1]}>
              <strong>Learn More</strong>
            </Paragraph>
          </Box>
        </Flex>
        {/* End : MetaMask Item */}
  
        {/* Begin : Infura Item */}
        <Flex 
          bg='white'
          boxShadow={0} br={10}
          mb={[20,30]}
          hover={{
            boxShadow: 1
          }}
        >
          <Flex align='center' justify='center' w={[1,1, 0.3]} p={20} >
            <SVG svg={brandInfura} w={70} />
          </Flex>
          <Box bg="" w={[1,1, 0.7]} ta='left' p={25} >
            <Heading f={[2,3]} color='charcoal' >
              Infura
            </Heading>
            <Heading f={[1]} color='purple' >
              Blockchain As A Service
            </Heading>
            <Paragraph f={[1]}>
              Ut placerat dolor sapien, et varius justo rutrum quis. Donec sollicitudin tincidunt risus non feugiat. Suspendisse consequat sit amet nibh et condimentum.
            </Paragraph>
            <Paragraph color='charcoal' f={[1]}>
              <strong>Learn More</strong>
            </Paragraph>
          </Box>
        </Flex>
        {/* End : Infura Item */}
        {/* Begin : Infura Item */}
        <Flex 
          bg='white'
          boxShadow={0} br={10}
          mb={[20,30]}
          hover={{
            boxShadow: 1
          }}
        >
          <Flex align='center' justify='center' w={[1,1, 0.3]} p={20} >
            <Image src={brandDrizzle} w={70} />
          </Flex>
          <Box bg="" w={[1,1, 0.7]} ta='left' p={25} >
            <Heading f={[2,3]} color='charcoal' >
              Drizzle
            </Heading>
            <Heading f={[1]} color='purple' >
              Frontend
            </Heading>
            <Paragraph f={[1]}>
              Ut placerat dolor sapien, et varius justo rutrum quis. Donec sollicitudin tincidunt risus non feugiat. Suspendisse consequat sit amet nibh et condimentum.
            </Paragraph>
            <Paragraph color='charcoal' f={[1]}>
              <strong>Learn More</strong>
            </Paragraph>
          </Box>
        </Flex>
        {/* End : Infura Item */}
        {/* Begin : Infura Item */}
        <Flex
          bg='white'
          boxShadow={0} br={10}
          hover={{
            boxShadow: 1
          }}
        >
          <Flex align='center' justify='center' w={[1,1, 0.3]} p={20} >
          <Image src={brandTruffle} w={70} />
          </Flex>
          <Box bg="" w={[1,1, 0.7]} ta='left' p={25} >
            <Heading f={[2,3]} color='charcoal' >
              Truffle
            </Heading>
            <Heading f={[1]} color='purple' >
              Ethereum Swiss Army Knife
            </Heading>
            <Paragraph f={[1]}>
              Ut placerat dolor sapien, et varius justo rutrum quis. Donec sollicitudin tincidunt risus non feugiat. Suspendisse consequat sit amet nibh et condimentum.
            </Paragraph>
            <Paragraph color='charcoal' f={[1]}>
              <strong>Learn More</strong>
            </Paragraph>
          </Box>
        </Flex>
        {/* End : Infura Item */}
  
      </Flex> 
      </PerfectScrollbar>
  </Box>
  </Box>
</Flex>