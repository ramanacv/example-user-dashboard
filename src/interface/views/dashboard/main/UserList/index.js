/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { svg } from 'assets'

/*-* Atoms *-*/
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Container from 'atoms/Container'
import Paragraph from 'atoms/Paragraph'
import SVG from 'atoms/SVG'
import Button from 'atoms/Button'

/*-* Foundry *-*/
import AdminUserList from 'features/AdminUserList'
/* ------------------------------- Component -------------------------------- */
export default props => (<div>
  <Container w={[1120]} py={[15,25]} px={40} >
    <AdminUserList/>
  </Container>
</div>)