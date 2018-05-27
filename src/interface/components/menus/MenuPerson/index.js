import React from 'react'
import { MenuAsideItem } from 'foundry'
import { MenuPerson } from 'static/menus'
import {
  Box, 
} from 'atomic'
export default props => 
<Box {...props.styled}>
  {MenuPerson(props.match.params.eid).map(item=> 
    <MenuAsideItem dimensions={40} {...props} {...item}/> 
  )}
</Box>