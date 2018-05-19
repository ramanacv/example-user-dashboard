/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import Button from 'atoms/Button'
import {
  Flex, Box, Container,
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'
import IdentityBalance from 'features/IdentityBalance'
import IdentityToken from 'features/IdentityToken'
/* ---------------------------- Module Package ------------------------------ */
export default props => props.status && !props.data ? null :
<Flex align='center' justify='center' color="charcoal" >
    <Container bg="white" boxShadow={2} br={20} mt={50} w={[220]} ta="center" >
      <Box
        borderRadius={9999999}
        bc="white"
        b="2px solid #FFF"
        boxShadow={2}
        of="hidden"
        mt={-50}
        ml="auto"
        mr="auto"
        h={100}
        w={100}
      >
        <BackgroundImage 
          src={idx(props, _=>_.data.avatar.uri)}
        />
      </Box>
      <Box
        p={15}
        ta="center"
      >
        <Heading level={[3]} f={[3,4]} color="purple" >
          {idx(props, _=>_.data.name)}
        </Heading>
        <Paragraph f={[1]}>
          {idx(props, _=>_.data.email)}
        </Paragraph>
        <Paragraph f={[1]}>
          {idx(props, _=>_.data.phone)}
        </Paragraph>
        <Paragraph f={[1]}>
        {idx(props, _=>_.data.country)}
        </Paragraph>
      </Box>
      <Box mt={5} mb={25} >
        <Box>
          Ξ Balance: <IdentityBalance/>
        </Box>
        <Box>
          UPRT Token: <IdentityToken contractName="UPRT" contractAddress="0x0be678095e348b4bfda93d50af16b29cd0df3d3e" />
        </Box>
      </Box>
    </Container>
</Flex>