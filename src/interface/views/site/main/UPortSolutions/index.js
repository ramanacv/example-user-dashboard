/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Flex,  Button,
  Heading, Paragraph,
  BackgroundGradient
} from 'atomic'


import UportCredentialsRequest from 'assimilation/containers/uport/UPortCredentialsRequest'
import UPortCredentialsAuthRequest from 'assimilation/containers/uport/UPortCredentialsAuthRequest'

import IdentityBalance from 'features/IdentityBalance'
import IdentityToken from 'features/IdentityToken'
import IdentityLogin from 'features/IdentityLogin'
import UPortAttestFirebase from 'features/UportAttestFirebase'

import AuthorizationLogin from 'containers/authentication/AuthorizationLogin'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center'>
<Container w={[420]} py={50} >
  <UportCredentialsRequest
    display="cardAccount"
    requested={['name', 'avatar', 'country', 'location', 'phone', 'email']}
  />
  </Container>
  <Container w={[620]} py={50} >
    <Heading f={[3]}>
      Login Components
    </Heading>
    Create a decentralized authorization login flow with different displays and components.
      <Box boxShadow={1} br={15} mt={40} p={20} >
        <Heading f={[3]} ta="center" >
          Avatar
        </Heading>
        <UportCredentialsRequest display="avatar" styled={{mt: 30}} requested={['name', 'avatar', 'country', 'location', 'phone', 'email']} />
      </Box>
      <Box boxShadow={1} br={15} mt={40} p={20} >
        <Heading f={[3]} ta="center" >
          Avatar with Menu (Click Avatar)
        </Heading>
        <UportCredentialsRequest display="avatarMenu" styled={{mt: 30}} requested={['name', 'avatar', 'country', 'location', 'phone', 'email']}/>
      </Box>
      <Box boxShadow={1} br={15}  mt={40} p={20} >
        <Heading f={[3]} ta="center" >
          Identity Card
        </Heading>
        <UportCredentialsRequest display="card" styled={{mt: 30}} requested={['name', 'avatar', 'country', 'location', 'phone', 'email']}/>
      </Box>
      <Box boxShadow={1} br={15}  mt={40} p={20} >
        <Heading f={[3]} ta="center" >
          Identity Blockchain
        </Heading>
        <UportCredentialsRequest display="cardBlockchain" styled={{mt: 30}} requested={['name', 'avatar', 'country', 'location', 'phone', 'email']}/>
      </Box>
  </Container>
</Box>