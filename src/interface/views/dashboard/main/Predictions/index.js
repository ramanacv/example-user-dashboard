/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */

/*-* Atoms *-*/
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Container from 'atoms/Container'

/*-* Foundry *-*/

/* ------------------------------- Component -------------------------------- */
export default props => (<div>

  <Flex
      justify='space-evenly'
    >

      {/*Item 1*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.48]}
      >

l      </Box>

      {/*Item 2*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.48]}
      >

      </Box>

    </Flex>

    {/*<GraphAreaToolTip width={880} height={480} />*/}
    <Container w={[880]} my={50} >

    </Container>
    <Container w={[880]} my={50} >

    </Container>
    <Container w={[880]} my={50} >

    </Container>

</div>)