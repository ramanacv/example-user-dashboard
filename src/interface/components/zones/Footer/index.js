/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { universe } from 'assets/images'
import { waves } from 'assets/svg'
import {
  Flex, Box, Container, HorizontalRule,
  Heading, Paragraph, Section, Link, List,
  BackgroundImage, Shape
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Section
  color='white'
  bg='navy'
  gradient='purple'
  py={[80,110,180]}
>
<Shape bottom left right h={[ '70px', '90px', "100px"]} mt={[-70, -90, -125]} svg={waves} />
  <BackgroundImage src={universe} o={0.1}/>
  <Container w={[1280]} >
    <Flex align='center' justify='space-between' direction='row' w={[1]} h={'20vh'}  >
      <Box w={[1,1,0.3]} >
        <Heading f={[3,4]}>
          BuidlBox by uPort
        </Heading>
        <Paragraph f={[2]}>Open Source The World</Paragraph>
        <Paragraph f={[0]}>
        uPort returns ownership of identity to the individual. uPort's open identity system allows users to register their own identity on Ethereum, send and request credentials, sign transactions, and securely manage keys & data. 
        </Paragraph>
        <Paragraph f={[0]}>
          © 2018 uPort/ConsenSys
        </Paragraph>
      </Box>
    </Flex>
  </Container>
</Section>
