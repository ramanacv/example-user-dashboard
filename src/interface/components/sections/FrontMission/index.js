/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { terminalLinux } from 'assets/images'
import {
  Flex, Box, 
  Heading, Paragraph, Container, Section, HorizontalRule,
  BackgroundImage
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Section
  color='white'
  gradient='purple'
  py={[30,60,120]}
  {...props}
>
<BackgroundImage src={terminalLinux} o={0.125} />
  <Container w={[1,1, 920]} >
    <Flex justify='space-evenly' >
      <Box px={10} w={0.333333} >
        <Heading f={[3,4]}>
          Blockchain and Serverless
        </Heading>
        <HorizontalRule bi='crimson' />
        <Paragraph f={[1]}>
          Quickly build React Dashboard systems. Utilize a collection of decentralized technologies. And, even spin-up serverless architecure using Amazon Lambdas or Firebase Cloud Functions.
        </Paragraph>
      </Box>
      <Box px={10} w={0.333333} >
        <Heading f={[3,4]}>
          Helpful Documentation
        </Heading>
        <HorizontalRule bi='crimson' />
        <Paragraph f={[1]}>
          Quickly get setup with decentralized login essentials like decentralized identity login systems, an interplantery file-system (IPFS) and preconfigured Redux Store Actions, Reducers and Sagas for communication Infura via the Ethers.js module library.
        </Paragraph>
      </Box>
      <Box px={10} w={0.333333} >
        <Heading f={[3,4]}>
          Modern Build Process
        </Heading>
        <HorizontalRule bi='crimson' />
        <Paragraph f={[1]}>
          Winning is great - helping people is better. Joining the DemocracyDAO means you're valuing collaboration over reward.
        </Paragraph>
      </Box>
    </Flex>
  </Container>
  <Heading level={[3]} f={[3]} ta='center' mt={80} >
    Want help during a hackathon? Join the Riot uPort Hackathon Channel for Community guidance.
  </Heading>
</Section>
