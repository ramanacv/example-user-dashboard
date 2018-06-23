/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { smartphoneUport, smartphoneUportFlipped } from 'assets/images'
import {
  Flex, Box, Absolute, Section, Container, 
  Heading, Image, Paragraph,
} from 'atomic'
import UPortAttestAddressForm from 'features/uport/UPortAttestAddressForm'

export default props =>
<Section gradient="purple" py={[50,150]} >

  <Container w={[720]} pos='relative' >

    <Heading color='white' f={[4,5]} ta='center'  >
      Create A Private Attestation
    </Heading>

    <Box bg='white' br={15} boxShadow={1} p={25} >
      <UPortAttestAddressForm/>
    </Box>

  </Container>

</Section>