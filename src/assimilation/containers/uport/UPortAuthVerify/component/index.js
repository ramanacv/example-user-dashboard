/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
// import idx from './idx'

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
export default props => !props.user ? null :
<Button 
  w={1}
  py={15}
  onClick={()=>props.verifyRequest()} 
  {...props.styledButton} >
  {
    props.text ? props.text : 'Verify'
  }
</Button>