/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Flex,
  Heading, Paragraph, BackgroundGradient,
} from 'atomic'
import VerifyTwitter from 'features/VerifyTwitter'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center'>
  <Container w={[680]} py={150} >
  <Box p={40} bg="twitter" color="white" boxShadow={3} >
    <VerifyTwitter/>
  </Box>
  </Container>
</Box>