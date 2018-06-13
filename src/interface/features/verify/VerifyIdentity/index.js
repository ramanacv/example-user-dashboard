/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
// import idx from './idx'
/* ------------------------- Internal Dependencies -------------------------- */
import {socialGoogle, socialTwitterBird, socialGithub, socialPhone, socialPassport, socialEmail} from 'assets/svg'
import {
  Flex, Box, Container, SVG,
  Heading,
} from 'atomic'


import { AuthorizationLogin } from 'containers'
import { FormImageUpload } from 'forms'
import IdentityToken from 'features/IdentityToken'
import IdentityBalance from 'features/IdentityBalance'
import UPortLoginFirebase from 'assimilation/containers/uport/UPortLoginFirebase'

const ProfileVIew = props =>
<Box br={10} gradient="purple" p={15} >
  <Heading f={[3,4]} color="white" >
    Account Information
  </Heading>
  <Flex direction='column' color='white' >
    <IdentityToken address='0xfdd3a21e78cb0c58f817d9e6b3fcc5def050fc3e' contract="BCK" />
    <IdentityToken address='0xfdd3a21e78cb0c58f817d9e6b3fcc5def050fc3e' contract="HLX" />
    <IdentityToken address='0xfdd3a21e78cb0c58f817d9e6b3fcc5def050fc3e' contract="PAK" />
  </Flex>
  <IdentityBalance/>
</Box>

// Verify Identity
const VerifyIdentity = props =>
<Box br={10} p={35} {...props.styled} >
  <Flex gradient="" wrap="wrap" justify="space-between" >
    <AuthorizationLogin providerSelection='twitter' styled={{w: [1,1,0.5]}} >
      <Item title='Twitter' svg={socialTwitterBird} />
    </AuthorizationLogin>
    <AuthorizationLogin providerSelection='google' styled={{w: [1,1,0.5]}} >
      <Item title='Google' svg={socialGoogle} />
    </AuthorizationLogin>
    <AuthorizationLogin providerSelection='github' styled={{w: [1,1,0.3]}} >
      <Item title='GitHub' svg={socialGithub} />
    </AuthorizationLogin>
  </Flex>

  <Flex gradient="" wrap="wrap" justify="space-between" mt={20} >
    <AuthorizationLogin providerSelection='twitter' styled={{w: [1,1,0.3]}} >
      <Item title='Email' svg={socialEmail} />
    </AuthorizationLogin>
    <AuthorizationLogin providerSelection='google' styled={{w: [1,1,0.3]}} >
      <Item title='Phone' svg={socialPhone} />
    </AuthorizationLogin>
    <AuthorizationLogin providerSelection='github' styled={{w: [1,1,0.3]}} >
      <Item title='Passport' svg={socialPassport} />
    </AuthorizationLogin>
  </Flex>

  </Box>


const Item = props =>
<Flex align='center' bg="grayLight" br={10} mb={15} p={10} >
  <Box w={[1,1, 0.3]} >
    <SVG svg={props.svg} w={45} />
  </Box>
  <Box w={[1,1,0.7]} >
    <Heading f={[3]} mb={0} >
      {props.title}
    </Heading>
  </Box>
</Flex>

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box align='center' justify='center' py={100} bg="grayLight" >
  <Container mt={25} w={[1220]} >
    <VerifyIdentity />
  </Container>
  <Container w={[1220]} mt={40} >
      <FormImageUpload />
  </Container>
</Box>