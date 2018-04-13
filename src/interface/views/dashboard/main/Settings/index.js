/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'

import FormSettingsGeneral from 'forms/FormSettingsGeneral'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box p={30} >
  <Heading f={[4,5]}>
    Settings
  </Heading>
  <FormSettingsGeneral/>
</Box>