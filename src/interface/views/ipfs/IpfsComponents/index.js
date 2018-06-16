/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container,
  Heading,
} from 'atomic'
// Features 
import IpfsJSONUpload from 'features/ipfs/IpfsJSONUpload'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box>
  <Container w={[1220]} >
    <Heading f={[3]}>
      The IPFS Components
    </Heading>

  <Box bg='grayLight' br={15} p={15} >
    <IpfsJSONUpload/>
  </Box>  
  </Container>
</Box>