import React from 'react'
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'
import { MenuAsideItem } from 'foundry'
import { MenuMainDashboard } from 'static/menus'
import UPortLoginFirebase from 'assimilation/containers/uport/UPortLoginFirebase'
export default props => <div>
<Box py={15} >
  <BackgroundGradient bg='white' o={0.1}/>
  <UPortLoginFirebase
    display="cardAccount"
    requested={[
      'name', 'verifcationTwitter', 
      'screenName', 'followers'
    ]}
    notifications={true}
  />
</Box>
{MenuMainDashboard.map(item=> <MenuAsideItem {...props} {...item}/> )}
</div>