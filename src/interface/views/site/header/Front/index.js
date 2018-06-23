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
  <Container mt={25} py={[100,200]} w={[560]} >
    <Heading level={[3]} f={[4,5]}mb={15} ta='center' >
      Decentralized Identity Login
    </Heading>
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
</Section>
