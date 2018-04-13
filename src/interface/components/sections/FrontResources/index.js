/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Flex, Box, Container,
  Heading, Paragraph, Section, HorizontalRule
} from 'atomic'

import UportCredentialsRequest from 'assimilation/containers/uport/UPortCredentialsRequest'
import UPortAttestCredentialsRequest from 'assimilation/containers/uport/UPortAttestCredentialsRequest'
import UPortAttestIdentityForm from 'assimilation/containers/uport/UPortAttestIdentityForm'
import UPortAttestAddressForm from 'features/uport/UPortAttestAddressForm'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Section color='white' gradient='purple' py={80} w={[1]} >
  <Container w={[620]} >
      <Box ta="center" py={60} >
        <Heading f={[5,6]}>
          uPort
        </Heading>
      <Paragraph f={[1]}>
        uPort is an interoperable identity network for a secure, private, decentralized web.
      </Paragraph>
      <HorizontalRule bi='crimson' />
      </Box>
  
      <Heading level={[3]} f={[4,5]} mt={25} ta='center' >
        Credential Request
      </Heading>
      <HorizontalRule bi='crimson' />
      <Box ta='center' >
        <UportCredentialsRequest/>
      </Box>
  
      <Heading level={[3]} f={[4,5]} mt={150} ta='center' >
        Identity Attestation Form
      </Heading>
      <HorizontalRule bi='crimson' />
      <Box>
        <UPortAttestIdentityForm/>
      </Box>
  
      <Heading level={[3]} f={[4,5]} mt={150} ta='center' >
        Address Attestation Form
      </Heading>
      <HorizontalRule bi='crimson' />
      <Box>
        <UPortAttestAddressForm/>
      </Box>
  </Container>
</Section>
