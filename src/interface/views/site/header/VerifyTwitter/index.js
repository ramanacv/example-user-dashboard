/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box,
  Button, Container, Heading, Image, Paragraph, Section
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Section {...props} px={[20,40]}color='white' pos='relative' >
    <Flex direction={['column']}  mh={['20vh']} align='center' justify={['center']} >
      <Heading f={[5,6]}>
        Verify Twitter
      </Heading>
      <Heading f={[3]}>
        Self-Sovereign Digital Identity
      </Heading>
    </Flex>
</Section>
