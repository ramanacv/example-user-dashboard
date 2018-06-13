/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { smartphoneUport, smartphoneUportFlipped } from 'assets/images'
import {
  Flex, Box, Absolute, Section, Container, 
  Heading, Image, Paragraph,
} from 'atomic'
import AttestationsForms from './attestationForms'

export default props =>
<Section gradient="purple" py={[50,150]} >
  <Absolute left ml={60} mt={'70px'} mb={'70px'} z={0} >
    <Image src={smartphoneUport} w={380} />
  </Absolute>

  <Absolute right ml={60} mt={'70px'} mb={'100px'} z={0} >
    <Image src={smartphoneUportFlipped} w={380} />
  </Absolute>
  
  <Container w={[720]} pos='relative' >

    <Heading color='white' f={[4,5]} ta='center'  >
      The Distributed Web
    </Heading>
    <Paragraph color='white' f={[1]} ta='center' >
      With the uPort a Distributed Application can save private information directly in users smartphones.
    </Paragraph> 

    <Flex  color="charcoal" bg="white" p={45} br={5} boxShadow={2} mt={40} z={5} >
      <AttestationsForms/>
    </Flex>


    <Flex justify='space-between' my={[20,30]} color='white' ta='center' >
      
      <Box w={[1,1,0.3]}>
        <Heading f={[3]}>
          Private Information
        </Heading>
        <Paragraph f={[1]}>
          Sed sit amet lobortis sapien, vel bibendum justo. Suspendisse venenatis gravida nisi eget tincidunt. Proin eleifend justo sed libero molestie lacinia.
        </Paragraph>
      </Box>
      <Box w={[1,1,0.3]} >
        <Heading f={[3]}>
          Universal Database
        </Heading>
        <Paragraph f={[1]}>
          Sed sit amet lobortis sapien, vel bibendum justo. Suspendisse venenatis gravida nisi eget tincidunt. Proin eleifend justo sed libero molestie lacinia.
        </Paragraph>
      </Box>
      <Box w={[1,1,0.3]} >
        <Heading f={[3]}>
          Private Information
        </Heading>
        <Paragraph f={[1]}>
          Sed sit amet lobortis sapien, vel bibendum justo. Suspendisse venenatis gravida nisi eget tincidunt. Proin eleifend justo sed libero molestie lacinia.
        </Paragraph>
      </Box>

    </Flex>

  </Container>

</Section>