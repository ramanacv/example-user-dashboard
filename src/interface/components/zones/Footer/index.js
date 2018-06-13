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
          Vestibulum vel arcu auctor, venenatis odio vel, varius dui. Praesent suscipit consectetur imperdiet. Mauris accumsan sed enim in ultricies. Sed aliquet nulla et justo finibus, nec rhoncus nulla condimentum. Integer ultrices pellentesque est, id tempus quam ornare nec.
        </Paragraph>
        <Paragraph f={[0]}>
          © 2018 uPort/ConsenSys
        </Paragraph>
      </Box>
      <Flex w={[1,1,0.65]} justify='space-between' pl={[0,0, 100]}>

        {/* 
          Documentation Menu
        */}
        <Flex w={[1,1,0.3]} direction='column' >
          <Heading f={[3]} fw="300" >
            Documentation
          </Heading>
          <HorizontalRule w={1} />
          <List p={0} listStyle='none' >
            <Link>Launch The BuidlBox</Link>
            <Link>The Basic Structure</Link>
            <Link>Merging Web 2.0 and Web 3.0</Link>
            <Link>Managing Private Keys</Link>
          </List>
        </Flex>
        {/* 
          Documentation Menu
        */}
        <Flex w={[1,1,0.3]} direction='column' >
          <Heading f={[3]} fw="300" >
            Community
          </Heading>
          <HorizontalRule w={1} />
          <List p={0} listStyle='none' >
            <Link>GitHub</Link>
            <Link>Twitter</Link>
            <Link>Medium</Link>
            <Link>Riot</Link>
          </List>
        </Flex>
        {/* 
          Documentation Menu
        */}
        <Flex w={[1,1,0.3]} direction='column' >
          <Heading f={[3]} fw="300" >
            Organization
          </Heading>
          <HorizontalRule w={1} />
          <List p={0} listStyle='none' >
            <Link>Verify Identity</Link>
            <Link>Social Profile</Link>
            <Link>Add Project</Link>
          </List>
        </Flex>

      </Flex>
    </Flex>
  </Container>
</Section>
