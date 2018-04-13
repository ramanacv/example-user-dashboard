/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'
import MeetupEvent from 'features/MeetupEvent'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box p={25} >
  <MeetupEvent
    contractAddress="0x311a70681f008d51f01e75032ee766718c9d74ba"
    contractName="MeetupEvent"
  />
</Box>