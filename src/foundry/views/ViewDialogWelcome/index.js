/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box>
  <Heading f={[4,5]}>
    Welcome to the Decentralized Ecosystem
  </Heading>
  <Paragraph f={[1]}>
    <strong>Are you ready to start buidling?</strong> The Ethereum Blockchain is an amazing technology. But, it can be complicated for new developers. Understanding how to use state management systems like a Blockchain/Redux and wrapping encapsulated logic is no small task.
  </Paragraph>
  <Paragraph f={[1]}>
    The BuidlBox helps developers quickly and easily build non-trivial applications using ready-to-go code and examples. 
  </Paragraph>
  <Paragraph f={[1]}>
    uPort wants to all developers to achieve maximum velocity. Which is why we're creating the BuidlBox to include more then just uPort. Yes. Of course we want you to build with uPort. But more importantly we want you meaningful and unique solutions to challenging problems. 
  </Paragraph>
  <Heading f={[3]}>
    Open Source the World
  </Heading>
</Box>