/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'

import DrawerOpen from 'containers/drawer/DrawerOpen'
import MenuPredictPopover from 'components/menus/MenuPredictPopover'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex>
  <Box w={[1]} >
    <Flex
      direction={['column', 'row']} align={"stretch"} 
      bg="purple"
      height={'90px'}
      color={['charcoal']}
      pos='relative'
      >

    <Flex align="center" justify='space-evenly'  w={[1, 1, 0.3]} display={['none', 'none', 'flex']} py={[15]} >
      <MenuPredictPopover/>
    </Flex>

    <Flex align="center"  pr={[null, null, 15]} py={[5, 5, 'inherit']} w={[1, 1, 0.55]}>

    </Flex>
    <Flex align="center" justify='center' py={[10]} color='white' w={[1, 1, 0.15]} textAlign="center">
      <DrawerOpen><Heading f={[2]} level={[4]}><a>Menu</a></Heading></DrawerOpen>
    </Flex>
    
  </Flex>
  
  <Box height={'60px'} >
    
  </Box>

  </Box>


</Flex>