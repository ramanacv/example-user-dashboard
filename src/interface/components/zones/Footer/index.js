/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { gitcoin } from 'assets/images'
import {
  Flex, 
  Heading, Paragraph, Section, Link,
  BackgroundImage
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Section
  color='white'
  gradient='blue'
  py={[30,60,120]}
>
  <BackgroundImage src={gitcoin}/>
  <Flex align='center' justify='center' direction='column' w={[1]} h={'20vh'}  >
    <Paragraph f={[4]}>Open Source The World</Paragraph>
    <Heading f={[2]}>
      <a href="https://gitcoin.co/explorer?q=uport" target="_blank" >View Active Bounties</a>
    </Heading>
  </Flex>
</Section>
