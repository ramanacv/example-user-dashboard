/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux'
import { QRCode } from 'react-qr-svg'
/* ------------------------- Internal Dependencies -------------------------- */
import { smartphoneUport } from 'assets/images'
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, Button,
  BackgroundImage, BackgroundGradient
} from 'atomic'

// Redux
import { fromDialog } from 'store/departments/selectors'
/* ------------------------------- Component -------------------------------- */
console.log(smartphoneUport)
const mapStateToProps = (state, props) => ({
  data: fromDialog.getData(state),
})

const Component = props =>
<Flex>
  <Box w={[1,1,0.5]} p={15} >
    <Heading f={[4]} color="purple" >
      Self-Sovereign Identity
    </Heading>
    <Paragraph f={[1]}>
      uPort returns ownership of identity to the individual. uPort's open identity system allows users to register their own identity on Ethereum, send and request credentials, sign transactions, and securely manage keys & data. Take a look at what we’re building:
    </Paragraph>
    {/* <Flex justify="space-between" my={15} >
      <a href="https://itunes.apple.com/us/app/uport-id/id1123434510?mt=8" target="_blank" >
        <Button>
          App Store
        </Button>
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.uportMobile&hl=en" target="_blank" >
        <Button>
          Play Store
        </Button>
      </a>
    </Flex> */}
    <Paragraph f={[1]}>
      Start integrating uPort into your dApp today. Our docs include tutorials to help you get up and running in minutes!
    </Paragraph>
    <Paragraph f={[1]} color="purple" >
      <strong><a href="https://developer.uport.me/" target="_blank" >
        Developer Documentation
      </a></strong>
    </Paragraph>
  </Box>
  <Box w={[1,1,0.5]} >
    <QRCode
      level="Q"
      value={props.data.QR}
      bgColor="#FFFFFF"
      fgColor="#5d3592"
      style={{ width: "100%" }}
    />
  </Box>
</Flex>

export default connect(mapStateToProps)(Component)
