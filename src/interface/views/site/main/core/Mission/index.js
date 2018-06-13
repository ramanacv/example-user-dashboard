/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Box, Container, Blockquote, Button,
  Heading, Paragraph,
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center'>
  <Container w={[680]} py={40} >
    <Heading f={[4,5]}>
      Identity Hubs
    </Heading>
    <Heading f={[2,3]} color='charcoal' >
      Context for the BuidlBox
    </Heading>
    <Paragraph f={[1]}>
      The future of decentralized identity revolves around distributed applications. The decentralized identity specification is currently undergoing review, but no matter what the final specification, applications that integrate with decentralized identity will exist. 
    </Paragraph>
    <Paragraph f={[1]}>
      Hence, the BuidlBox is preemptively preparing for a future with decentralized identity, by helping developers more easily launch applications that integrate decentralized solutions, like the Ethereum blockchain. 
    </Paragraph>
    <Blockquote ta='center'>
      Hubs let you securely store and share data. A Hub is a datastore containing semantic data objects at well-known locations. Each object in a Hub is signed by an identity and accessible via a globally recognized API format that explicitly maps to semantic data objects. Hubs are addressable via unique identifiers maintained in a global namespace.
    </Blockquote>
    <Paragraph f={[1]} ta='center' >
      <a href="https://github.com/decentralized-identity/hubs/blob/master/explainer.md" target="_blank" >
        <Button> Decentralized Identity Hubs</Button>
      </a>
    </Paragraph>
    <Paragraph f={[1]}>
      The BuidlBox is the first step towards a shared platform for distributed application developers to easily start experimenting with new 
    </Paragraph>
  </Container>
</Box>