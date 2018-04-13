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

/* ------------------------------- Component -------------------------------- */
export default props => (<div>

  <Container w={[1120]} py={[15,25]} >
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
        w={[1,1, 0.333333]}
      >
        <SVG svg={svg.conversion} svgColor='blue' h={100} />
        <Paragraph f={[1]}>
          Maecenas aliquam, urna ut porta blandit, mauris enim ultricies elit, sed ornare dui nibh vel felis. 
        </Paragraph>
        <Button gradien='blueLight' >Run Predictions</Button>
      </Box>
      {/*Item 1*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.333333]}
      >
        <SVG svg={svg.automation} svgColor='blue' h={100} />
        <Paragraph f={[1]}>
          Maecenas aliquam, urna ut porta blandit, mauris enim ultricies elit, sed ornare dui nibh vel felis. 
        </Paragraph>
        <Button gradien='blueLight' >Analyze Data</Button>
      </Box>
      {/*Item 1*/}
      <Box
        bg='white'
        bs={1}
        ta='center'
        py={[15,20]}
        px={[15,25]}
        w={[1,1, 0.3]}
      >
        <SVG svg={svg.city} svgColor='blue' h={100} />
        <Paragraph f={[1]}>
          Maecenas aliquam, urna ut porta blandit, mauris enim ultricies elit, sed ornare dui nibh vel felis. 
        </Paragraph>
        <Button gradien='blueLight' >Find Tokens</Button>
      </Box>

    </Flex>
  </Container>
  

</div>)