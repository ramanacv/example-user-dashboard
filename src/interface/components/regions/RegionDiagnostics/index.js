/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Flex, Box, Heading
} from 'atomic'
import DrawerOpen from 'containers/drawer/DrawerOpen'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box w={[1]} >
  <Flex direction={['column', 'row']} align={"stretch"} bg="purple" height={'90px'} color={['charcoal']} pos='relative'>
    <Flex align="center" justify='space-evenly' color='white'  w={[1, 1, 0.3]} display={['none', 'none', 'flex']} py={[10]} >

    </Flex>

    <Flex align="center"  pr={[null, null, 15]} py={[5, 5, 'inherit']} w={[1, 1, 0.55]}>

    </Flex>
    
    <Flex align="center" justify='center' py={[10]} color='white' w={[1, 1, 0.15]} textAlign="center">
      <DrawerOpen><Heading f={[2]} level={[4]}><a>Menu</a></Heading></DrawerOpen>
    </Flex>
    
  </Flex>

</Box>
