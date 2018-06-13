/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { brandGitcoin, brandTruffle, brandDrizzle, brandDharma, brandOrigin } from 'assets/graphics'
import { brandMetaMask, brandInfura, brandEthereum, brandBountiesNetwork, brandColony, branduPort } from 'assets/svg'
import {
  Flex, Box, Container, Button, Section,
  Heading, Image, Paragraph, SVG, BackgroundImage
} from 'atomic'

export default props =>
<Section>
<Container mt={25} w={[1220]} ta='center' >
  <Container w={[560]} ta='center' py={[30,60]} >
      <Heading f={[4,5]} fw="300" >
        Launch Into The Web of Trust
      </Heading>
      <Heading f={[1,2]} fw="300" >
        Start Buidling Distributed Applications in Just a Few Clicks
      </Heading>
      <Flex justify='space-between' my={[20,30]} >
        <Button>
          Download BuidlBox
        </Button>
        <Button>
          View Tutorials
        </Button>
        <Button>
          Join The Community
        </Button>
      </Flex>
  </Container>
  <Flex direction='row' justify='space-between' px={[20,40,45]} wrap='wrap' >
  
    {/* Begin : MetaMask Item */}
    <Flex 
      bg='white'
      boxShadow={0} br={10}
      mb={[20,30]} w={[1,1,0.3]}
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
      mb={[20,30]} w={[1,1,0.3]}
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
      mb={[20,30]} w={[1,1,0.3]}
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
    {/* End : Drizzle Item */}

    {/* Begin : Truffle Item */}
    <Flex
      bg='white'
      boxShadow={0} br={10}
      mb={[20,30]} w={[1,1,0.3]}
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
    {/* End : Truffle Item */}

    {/* Begin : Ethers Item */}
    <Flex
      bg='white'
      boxShadow={0} br={10}
      mb={[20,30]} w={[1,1,0.3]}
      hover={{
        boxShadow: 1
      }}
    >
      <Flex align='center' justify='center' w={[1,1, 0.3]} p={20} >
      <SVG svg={brandEthereum} w={70} />
      </Flex>
      <Box bg="" w={[1,1, 0.7]} ta='left' p={25} >
        <Heading f={[2,3]} color='charcoal' >
          Ethers.js
        </Heading>
        <Heading f={[1]} color='purple' >
          Javascript Library
        </Heading>
        <Paragraph f={[1]}>
          Ut placerat dolor sapien, et varius justo rutrum quis. Donec sollicitudin tincidunt risus non feugiat. Suspendisse consequat sit amet nibh et condimentum.
        </Paragraph>
        <Paragraph color='charcoal' f={[1]}>
          <strong>Learn More</strong>
        </Paragraph>
      </Box>
    </Flex>
    {/* End : Ethers Item */}

    {/* Begin : Bounties Network Item */}
    <Flex 
      bg='white'
      boxShadow={0} br={10}
      mb={[20,30]} w={[1,1,0.3]}
      hover={{
        boxShadow: 1
      }}
    >
      <Flex align='center' justify='center' w={[1,1, 0.3]} p={20} >
        <SVG svg={brandBountiesNetwork} w={60} />
      </Flex>
      <Flex justify='center' direction='column' w={[1,1, 0.7]} ta='left' p={25} >
        <Heading f={[2,3]} color='charcoal' >
          Bounties Network
        </Heading>
        <Heading f={[1]} color='purple' >
          White Label Bounties
        </Heading>
        <Paragraph f={[1]}>
          Ut placerat dolor sapien, et varius justo rutrum quis. Donec sollicitudin tincidunt risus non feugiat. Suspendisse consequat sit amet nibh et condimentum.
        </Paragraph>
        <Paragraph color='charcoal' f={[1]}>
          <strong>Learn More</strong>
        </Paragraph>
      </Flex>
    </Flex>
    {/* End : Bounties Network Item */}

    {/* Begin : Colony Item */}
    <Flex 
      bg='white'
      boxShadow={0} br={10}
      mb={[20,30]} w={[1,1,0.3]}
      hover={{
        boxShadow: 1
      }}
    >
      <Flex align='center' justify='center' w={[1,1, 0.3]} p={20} >
        <SVG svg={brandColony} w={60} />
      </Flex>
      <Flex justify='center' direction='column' w={[1,1, 0.7]} ta='left' p={25} >
        <Heading f={[2,3]} color='charcoal' >
          Colony
        </Heading>
        <Heading f={[1]} color='purple' >
          Create Distributed Communities
        </Heading>
        <Paragraph f={[1]}>
          Ut placerat dolor sapien, et varius justo rutrum quis. Donec sollicitudin tincidunt risus non feugiat. Suspendisse consequat sit amet nibh et condimentum.
        </Paragraph>
        <Paragraph color='charcoal' f={[1]}>
          <strong>Learn More</strong>
        </Paragraph>
      </Flex>
    </Flex>
    {/* End : Bounties Network Item */}
    {/* Begin : Bounties Network Item */}
    <Flex 
      bg='white'
      boxShadow={0} br={10}
      mb={[20,30]} w={[1,1,0.3]}
      hover={{
        boxShadow: 1
      }}
    >
      <Flex align='center' justify='center' w={[1,1, 0.3]} p={20} >
        <Image src={brandDharma} w={70} />
      </Flex>
      <Flex justify='center' direction='column' w={[1,1, 0.7]} ta='left' p={25} >
        <Heading f={[2,3]} color='charcoal' >
          Dharma
        </Heading>
        <Heading f={[1]} color='purple' >
          Decenralized Loans
        </Heading>
        <Paragraph f={[1]}>
          Ut placerat dolor sapien, et varius justo rutrum quis. Donec sollicitudin tincidunt risus non feugiat. Suspendisse consequat sit amet nibh et condimentum.
        </Paragraph>
        <Paragraph color='charcoal' f={[1]}>
          <strong>Learn More</strong>
        </Paragraph>
      </Flex>
    </Flex>
    {/* End : Bounties Network Item */}
    {/* Begin : Bounties Network Item */}
    <Flex 
      bg='white'
      boxShadow={0} br={10}
      mb={[20,30]} w={[1,1,0.3]}
      hover={{
        boxShadow: 1
      }}
    >
      <Flex align='center' justify='center' w={[1,1, 0.3]} p={20} >
        <Image src={brandOrigin} w={70} />
      </Flex>
      <Flex justify='center' direction='column' w={[1,1, 0.7]} ta='left' p={25} >
        <Heading f={[2,3]} color='charcoal' >
          Origin Protocol
        </Heading>
        <Heading f={[1]} color='purple' >
          Decentralized Marketplaces
        </Heading>
        <Paragraph f={[1]}>
          Ut placerat dolor sapien, et varius justo rutrum quis. Donec sollicitudin tincidunt risus non feugiat. Suspendisse consequat sit amet nibh et condimentum.
        </Paragraph>
        <Paragraph color='charcoal' f={[1]}>
          <strong>Learn More</strong>
        </Paragraph>
      </Flex>
    </Flex>
    {/* End : Bounties Network Item */}
  
  </Flex> 
</Container>

<Container w={[560]} ta='center' py={[30,60]} >
  <SVG svg={branduPort} w={150} />
  <Heading f={[4,5]} fw="300" >
    Built atop the uPort Protocol
  </Heading>
  <Heading f={[1,2]} fw="300" >
    Bring Your Own Database
  </Heading>
</Container>

<Container w={[560]} ta='center' py={[30,60]} >
      <Image src={brandGitcoin} w={160} />
    <Heading f={[3,4]} fw="300" >
      Powered by the Gitcoin Community
    </Heading>
    <Heading f={[1,2]} fw="300" >
      <a href="https://gitcoin.co/explorer" target="_blank"> <Button>View Active Bounties</Button></a>
    </Heading>
    <Paragraph f={[1]}>
      Ut placerat dolor sapien, et varius justo rutrum quis. Donec sollicitudin tincidunt risus non feugiat. Suspendisse consequat sit amet nibh et condimentum.
    </Paragraph>
</Container>
  
</Section>