/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import {
 Flex, Box,
 Button, Heading, Link, Paragraph, SVG, List
} from 'atomic'

import { PopoverPure } from 'containers'
import MenuSmartContracts from 'components/menus/MenuSmartContracts'
import DialogOpen from 'containers/dialog/DialogOpen'
import PopoverClose from 'containers/popover/PopoverClose'
/* ------------------------------- Component -------------------------------- */
const Body = props => <Box w={[1,1,675]} boxShadow={2} hover={{boxShadow: 3}}  br={10} >
  <Flex direction={['column', 'row']} >
    <Box w={[1,1,0.45]} gradient='white' color='white' p={[10,20]} bs={1} >
      <PerfectScrollbar>
        <Heading level={[3]} f={[3,4]}>Interface Categories</Heading>
        <List>
          <Link>Atomic</Link>
          <Link>Components</Link>
          <Link>Containers</Link>
          <Link>Features</Link>
          <Link>Routes</Link>
          <Link>Views</Link>
        </List>
        <Heading level={[3]} f={[3,4]}>Smart Contract Components</Heading>
        <List>
          <Link>ERC20</Link>
          <Link>ERC721</Link>
          <Link>ENS</Link>
        </List>
      </PerfectScrollbar>
    </Box>
    <Box w={[1,1,0.7]} bg='white' color='charcoal'p={[10,15]} bs={1}>
        <Box h={[300, 450]}>
          <Heading f={[4]} color="blue" >
            Interface
          </Heading>
          <Paragraph f={[1]}>
            Phasellus malesuada, ante elementum vehicula pretium, nisi turpis consequat nunc, vitae faucibus massa nulla a dolor. Nullam nec velit a nisi sodales dictum. Sed ac sem quis turpis molestie laoreet quis sed arcu. Aenean ligula risus, bibendum vel commodo vitae, dapibus vel nisl. Sed interdum tortor vitae sapien porttitor gravida eget et risus.
          </Paragraph>
          <Heading f={[3]} color="blue">
            Modular Frontend
          </Heading>
          <Paragraph f={[1]}>
            Sed ac sem quis turpis molestie laoreet quis sed arcu. Aenean ligula risus, bibendum vel commodo vitae, dapibus vel nisl. Sed interdum tortor vitae sapien porttitor gravida eget et risus.
          </Paragraph>
        </Box>
    </Box>
  </Flex>
</Box>


export default props => <Flex diretion={['column', 'row']} >
  <Box px={[10]}>
    <PopoverPure delta='MenuInterface' body={Body} >
      <Heading level={[3]} f={[2]} color='white' >
        Interface
      </Heading>
    </PopoverPure>
    </Box>
</Flex>