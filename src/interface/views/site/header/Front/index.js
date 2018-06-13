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
          The World Personalized
        </Heading>
        <Heading level={[3]} f={[2,3]}mb={25}  >
          The Internet How It Was Supposed To Built
        </Heading>
          <Paragraph f={[2]}>
            Manage personal information in the smartphone. Personalize the world around you. Build a digital identity.
          </Paragraph>
          <Paragraph f={[1]}>
          Praesent consequat cursus libero, sed vestibulum ipsum molestie luctus. Morbi sodales magna id nisl fermentum viverra. Ut quam eros, rhoncus ac risus vel, tempus congue lorem. Maecenas euismod tincidunt ipsum, nec varius quam viverra sit amet. Sed sit amet lobortis sapien, vel bibendum justo. Suspendisse venenatis gravida nisi eget tincidunt. Proin eleifend justo sed libero molestie lacinia.
          </Paragraph>
          <Box my={20} >
            <UPortLoginFirebase
              display="cardAccount"
              requested={[
                'email', 'location', 'phone',
                'name', 'avatar'
              ]}
              notifications={true}
              styled={{
                w: 200
              }}
            />
          </Box>
        </Container>
      </Box>

      <Box w={[1,1,0, 0.5]} >
        <Box w={[1,1,0, '170%']} >
        <Absolute left top h={[1,1,400]} mt={[50,80]} w={[240,270,290]} z={50}  >
  
          <SmartphoneiPhone w={260} >
            <Image src={PhoneTransaction} />
          </SmartphoneiPhone>
        </Absolute>
          <MacbookDisplay>
            <Image src={buidlboxProfile}/>
          </MacbookDisplay>

        </Box>
      </Box>


    </Flex>
  </Container>

</Section>
