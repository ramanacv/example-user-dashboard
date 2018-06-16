/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { city } from 'assets/images'
import {
  Flex, Box, Section, Container,
  Heading, Image, Paragraph, Link, Span, SVG, BackgroundImage
} from 'atomic'
// Features 
import UPortAttestEvent from 'features/uport/UPortAttestEvent'
import EventsList from 'features/events/EventsList'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Section gradient="purple" py={[50,150]} >
<BackgroundImage src={city} o={0.5} z={0} />

<Container w={[980]} color="charcoal" bg="white" p={45} br={5} boxShadow={2} z={5} pos='relative' >
  <Flex>
    <Box w={[1,1,0.5]} >
      <Heading f={[4,5]}>
        Create Event Attestation
      </Heading>
      <Paragraph f={[2]}>
        Create a proof of attendance system to reward event participants.
      </Paragraph>
    </Box>
    <Box w={[1,1,0.5]} >
      <UPortAttestEvent/>
    </Box>
  </Flex>
  <Box mt={20} >
    <EventsList/>
  </Box>
</Container>

</Section>