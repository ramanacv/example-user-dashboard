/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import idx from './idx'

import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, Button,
  BackgroundImage, BackgroundGradient
} from 'atomic'
import UPortIdentityCard from 'assimilation/components/uport/UPortIdentityCard'
import UPortIdentityCardAcount from 'assimilation/components/uport/UPortIdentityCardAcount'
import UPortIdentityBlockchain from 'assimilation/components/uport/UPortIdentityBlockchain'
import UPortAvatar from 'assimilation/components/uport/UPortAvatar'
import UPortAvatarMenu from 'assimilation/components/uport/UPortAvatarMenu'
import UPortIdentityAccount from 'assimilation/components/uport/UPortIdentityAccount'
import { QRCode } from 'react-qr-svg'
import DialogOpen from 'containers/dialog/DialogOpen'
/* ---------------------------- Module Package ------------------------------ */
export default props => props.user ?
<Flex {...props} direction={['row']} justify='center' align={['center', null, 'center']} wrap='wrap' textAlign={['center']} w={[1]} >
  {console.log(props.user)}
  <Box flex={['1 1 0', '2 1 auto']}  >
    <Span>{props.user.displayName}</Span>
  </Box>
  <Box flex={['1 1 0', '1 1 auto']}  >
    <Box
        borderRadius={9999999}
        bc="white"
        b="2px solid #FFF"
        boxShadow={2}
        of="hidden"
        ml="auto"
        mr="auto"
        h={50}
        w={50}
      >
        <BackgroundImage 
          src={idx(props, _=>_.user.photoURL)}
        />
    </Box>
  </Box>
  <Box flex={['1 1 0', '2 1 auto']}  >
    <Button onClick={props.logout} f={[0]} >Logout</Button>
  </Box>
</Flex>
: props.loginStatus
? 
  !idx(props, _=>_.loginChannel.data.qr) ? null :
  // <QRCode
  //   bgColor="#FFFFFF"
  //   fgColor="#000000"
  //   level="Q"
  //   style={{ width: 400 }}
  //   value={props.loginChannel.data.qr}
  // /> 
  <Box>
    
  </Box>
  

: !props.loginRequest 
  ? 
  <div>Login Disabled</div>
  :
  <Button 
    w={1}
    py={15}
    onClick={()=>props.loginRequest()} 
    {...props.styledButton} >
    {
      props.text ? props.text : 'ΞID Login'
    }
  </Button>