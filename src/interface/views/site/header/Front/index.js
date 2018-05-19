/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box,
  Button, Container, Heading, Image, Paragraph, Section,
} from 'atomic'
import DialogOpen from 'containers/dialog/DialogOpen'
import UportCredentialsRequest from 'assimilation/containers/uport/UPortCredentialsRequest'
import UPortLoginFirebase from 'assimilation/containers/uport/UPortLoginFirebase'
import EnsResolve from 'assimilation/containers/ens/EnsResolve'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Section {...props} px={[20,40]}color='white' pos='relative' >
  <Container w={[1200]} >
    <Flex direction={['column', 'row']}  mh={['80vh']} align='center' justify={['center']} >
      <Box w={[1]} color="white" ta="center" >
      <Heading level={[3]} f={[4,5]}mb={25} ta='center' >
        Start Buidling
      </Heading>
        <Container mt={25} w={[560]} >
          <Box my={20} >
            <UPortLoginFirebase
              display="cardAccount"
              requested={['name', 'avatar', 'country', 'location', 'phone', 'email']}
              notifications={true}
            />
          </Box>
          <Paragraph f={[1]}>
            Launch a decentralized application quickly and easily.<br/>
          </Paragraph>
        </Container>
      </Box>
    </Flex>
  </Container>
</Section>
