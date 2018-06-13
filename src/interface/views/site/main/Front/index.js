/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { city, codingOutside } from 'assets/images'
import {
  Box, Container, Flex,  Button, Image, Absolute,
  Heading, Paragraph, Section, 
  BackgroundGradient, BackgroundImage,
  BrowserDisplay
} from 'atomic'

import Features from './features'
import Intergations from './integrations'
import Attestations from './attestations'
import Events from './events'
import Contract from './contract'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box>
  <Features/>
  <Attestations/>
  <Contract/>
  <Events/>
  <Intergations/>
</Box>