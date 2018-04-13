/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Flex,
  Heading, Paragraph, BackgroundGradient,
} from 'atomic'
import VerifyGithub from 'features/VerifyGithub'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center'>
  <Container w={[680]} py={150} >
  <Box p={40} bg="github" color="white" boxShadow={3} >
    <VerifyGithub/>
  </Box>
  </Container>
</Box>