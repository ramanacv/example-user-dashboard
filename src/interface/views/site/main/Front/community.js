/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { earth, city } from 'assets/images'
import { branduPort } from 'assets/svg'
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, SVG,
  BrowserDisplay
} from 'atomic'

export default props =>
<Flex>
  <Box w={[1,1,0, 0.45]}>
    <Box ml={[1,1,0, '-60%']} w={[1,1,0, '160%']} >
      <BrowserDisplay>
        <Image src="earth"/>
      </BrowserDisplay>
    </Box>
  </Box>

  <Box w={[1,1,0, 0.45]}>
    <Flex direction='column' >

      {/* uPort Item */}
      <Flex>
        <Flex align='center' justify='center' w={[1,1, 0.2]} >
          <SVG svg={branduPort}/>
        </Flex>
        <Box w={[1,1, 0.8]} ta='left' >
          <Heading f={[4,5]}>
            uPort
          </Heading>
          <Heading f={[2]}>
            Personal Data Management Platform
          </Heading>
          <Paragraph f={[1]}>
            Ut placerat dolor sapien, et varius justo rutrum quis. Donec sollicitudin tincidunt risus non feugiat. Suspendisse consequat sit amet nibh et condimentum. Aliquam molestie vehicula urna et posuere. Quisque elit metus, mattis et ipsum nec, tempus finibus enim.
          </Paragraph>
        </Box>
      </Flex>
    </Flex>
  </Box>
</Flex>