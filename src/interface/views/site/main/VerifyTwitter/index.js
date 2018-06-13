/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Flex,
  Heading, Paragraph, BackgroundGradient,
} from 'atomic'
import { UserProfile } from 'containers'
import UPortAuthVerify from 'assimilation/containers/uport/UPortAuthVerify'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center'>
  <Container w={[680]} py={40} >
    <UserProfile/>
    <Box mt={30} >
      <UPortAuthVerify requested={['name']} notifications={true} />
    </Box>
  </Container>
</Box>