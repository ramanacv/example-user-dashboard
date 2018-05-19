/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Flex,  Button,
  Heading, Paragraph,
  BackgroundGradient
} from 'atomic'


import UPortLoginFirebase from 'assimilation/containers/uport/UPortLoginFirebase'
import UPortCredentialsRequest from 'assimilation/containers/uport/UPortCredentialsRequest'
import {AuthorizationLogin, UserProfile} from 'containers'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center'>
<Container w={[720]} py={50} >
  <UPortLoginFirebase
    display="cardAccount"
    requested={['name']}
    notifications={true}
  />
  </Container>
</Box>