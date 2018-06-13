/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { buidlboxProfile, PhoneTransaction } from 'assets/images'
import { 
  Flex, Box, Absolute, Button, Image,
  Container, Heading, Paragraph, Section,
  MacbookDisplay, SmartphonePixel, SmartphoneiPhone
} from 'atomic'
import UPortLoginFirebase from 'assimilation/containers/uport/UPortLoginFirebase'
import UPortCredentialRequest from 'assimilation/containers/uport/UPortCredentialRequest'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Section {...props} px={[20,40]} color='white' pos='relative' >
  <Container w={[1200]} >
    <Flex direction={['column', 'row']}  mh={['80vh']} align='center' justify={['center']} >
      <Box w={[1,1,0, 0.5]} color='white' px={[20,40]}  >
        <Container mt={25} w={[560]} >
        <Heading level={[3]} f={[4,5]}mb={15}  >
          About
        </Heading>
        <Heading level={[3]} f={[2,3]}mb={25}  >
          A uPort Community Organizing Tool
        </Heading>
        <Paragraph f={[2]}>
          The BuidlBox is a platform for developers to easily launch new distributed applications. Let's grow the Ethereum ecosystem together. 
        </Paragraph>
        <Paragraph f={[1]}>
          Praesent consequat cursus libero, sed vestibulum ipsum molestie luctus. Morbi sodales magna id nisl fermentum viverra. Ut quam eros, rhoncus ac risus vel, tempus congue lorem. Maecenas euismod tincidunt ipsum, nec varius quam viverra sit amet. Sed sit amet lobortis sapien, vel bibendum justo. Suspendisse venenatis gravida nisi eget tincidunt. Proin eleifend justo sed libero molestie lacinia.
        </Paragraph>
        </Container>
      </Box>

      <Box w={[1,1,0, 0.5]} >
        <Box w={[1,1,0, '130%']} >
          <MacbookDisplay>
            <Image src={buidlboxProfile}/>
          </MacbookDisplay>
        </Box>
      </Box>

    </Flex>
  </Container>

</Section>
