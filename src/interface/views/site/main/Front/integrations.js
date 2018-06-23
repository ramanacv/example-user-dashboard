/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { personDashboard } from 'assets/images'
import {
  Flex, Box, Section, Container, Button,
  Heading, Image, Paragraph, Link,
  BrowserDisplay,
} from 'atomic'

const IdentityCore = props =>
<Flex align='center'>
  
  <Box w={[1,1,0, 0.55]} ta='left' px={[20,40]} >
    <Heading f={[4,5]} color='purple' >
      User Dashboard
    </Heading>

    <Heading f={[2,3]} color='charcoal' >
      Request Attestations from Users
    </Heading>
    
    <Paragraph color='charcoal' f={[1]} mb={40} >
      Start requesting private credentials from registered decentralized identities. Using uPort's push notification services you can quickly and easily request attestations and credentials from users at any point in time.
    </Paragraph>
    <Link to='/dashboard/people' >
      <Button>
          View Dashboard
      </Button>
    </Link>
  </Box>

  <Box w={[1,1,0.45]} py={[20,40]}>
    <BrowserDisplay>
      <Image src={personDashboard} w={1} />
    </BrowserDisplay>
  </Box>

</Flex>



export default props =>
<Section py={[50,100]} >
  <Container w={[1220]} >
    <IdentityCore/>
  </Container>
</Section>