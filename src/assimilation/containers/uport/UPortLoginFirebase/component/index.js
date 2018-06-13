/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import idx from './idx'
import {
  Flex, Box, Span, Button,
  BackgroundImage,
} from 'atomic'
/* ---------------------------- Module Package ------------------------------ */
export default props => props.user ?
<Flex {...props} direction={['row']} justify='center' align={['center', null, 'center']} wrap='wrap' textAlign={['center']} w={[1]} >
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