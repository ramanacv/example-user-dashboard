/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { fromDialog } from 'store/departments/selectors'
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'
import { connect } from 'react-redux'
import { QRCode } from 'react-qr-svg'
/* ------------------------------- Component -------------------------------- */

const mapStateToProps = (state, props) => ({
  data: fromDialog.getData(state),
})

const Component = props =>
<Flex>
  <Box w={[1,1,0.5]} >
    <QRCode
      level="Q"
      value={props.data.QR}
      bgColor="#FFFFFF"
      fgColor="#5d3592"
      style={{ width: "100%" }}
    />
  </Box>
  <Box w={[1,1,0.5]} >
    <Heading f={[3]}>
      Self-Sovereign Identity
    </Heading>
    <Paragraph f={[1]}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem purus, dignissim eget nibh vel, vestibulum pharetra sapien. Vivamus rutrum, ante in eleifend volutpat, neque magna aliquam quam, at elementum lacus ex eu dolor. Aliquam in consequat nisi. Sed vitae purus ultricies orci cursus convallis et tempus nisi. In elementum ornare velit dignissim ultricies. Vivamus ac turpis ac magna fringilla ornare sed rutrum turpis. Praesent ultricies neque placerat turpis mattis, eu ultricies lorem facilisis. Maecenas dictum urna arcu, sed placerat est luctus non.
    </Paragraph>
  </Box>
</Flex>

export default connect(mapStateToProps)(Component)
