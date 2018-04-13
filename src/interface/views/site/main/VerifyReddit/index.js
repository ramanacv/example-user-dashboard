/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Flex,
  Heading, Paragraph, BackgroundGradient,
} from 'atomic'
import VerifyReddit from 'features/VerifyReddit'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center'>
  <Container w={[680]} py={150} >
  <Box p={40} gradient="purple" color="white" boxShadow={3} >
    <VerifyReddit/>
  </Box>
  </Container>
</Box>