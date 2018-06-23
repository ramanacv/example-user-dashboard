/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Flex, Box, Absolute, Container,
  Heading, Image, Paragraph, Link, Span, 
} from 'atomic'

import DrawerOpen from 'containers/drawer/DrawerOpen'

/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex>
    <Container w={[1280]} >
      <Flex
      direction={['column', 'row']} align={"stretch"} justify="center"
      bs={[3]} 
      height={'60px'}
      color={['charcoal']}
      pos='relative'
      >
        <Flex align="center" justify="left" w={[1, 1, 0.2]} pl={[15]} py={[7]} direction={['row']} >
          <Link to="/">
            <Heading level={4} color='white' mb={0} fontSize={[3,4]} fontWeight={'100'}>
              <strong>BuidlBox</strong> Lite
            </Heading>
          </Link>
        </Flex>
        
        <Flex align="center" w={[1, 1, 0.6]} justify="center" display={['none', 'none', 'Flex']} py={[15]} >

        </Flex>
  
        <Flex align="center" justify='flex-end' py={[10]} color='white' w={[1, 1, 0.2]} textAlign="center">
          <DrawerOpen>
            <Heading f={[2]} level={[4]} fw={300} ><a>MENU</a></Heading>
          </DrawerOpen>
        </Flex>
      
    </Flex>
    </Container>


</Flex>