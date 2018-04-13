/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box,
  Button, Container, Heading, Image, Paragraph, Section,
} from 'atomic'
import DialogOpen from 'containers/dialog/DialogOpen'
import UportCredentialsRequest from 'assimilation/containers/uport/UPortCredentialsRequest'
/* ------------------------------- Component -------------------------------- */
export default props => 
<Section {...props} px={[20,40]}color='white' pos='relative' >
  <Container w={[1200]} >
    <Flex direction={['column', 'row']}  mh={['80vh']} align='center' justify={['center']} >
      <Box w={[1]} color="white" ta="center" >
      <Heading level={[3]} f={[4,5]}mb={25} ta='center' >
        Start Buidling
      </Heading>
      <Paragraph f={[1]}>
        Launch a decentralized application quickly and easily.<br/>
        <strong>Win hackathons. Launch an MVP.</strong> Open Source The World.
      </Paragraph>
        <Container mt={25} w={[560]} >
          <Box my={20} >
            <UportCredentialsRequest text="Login with uPort" styledButton={{ gradient: "purple"}} />
          </Box>
          <Flex justify="space-between" >
            <DialogOpen foundry='ViewHowItWorks'>
              <Button gradient='cherry' w={1} >
                How It Works
              </Button>
            </DialogOpen>
            <DialogOpen foundry='ViewDialogGetInvolved'>
              <Button gradient='cherry' w={1} >
                Get Involved
              </Button>
            </DialogOpen>
            <DialogOpen foundry='ViewDialogDocumentation'>
              <Button gradient='cherry' w={1} >
                Documentation
              </Button>
            </DialogOpen>
          </Flex>
        </Container>
      </Box>
    </Flex>
  </Container>
</Section>
