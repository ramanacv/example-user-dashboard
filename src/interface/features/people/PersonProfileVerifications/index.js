/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { compose} from 'recompose'
import { connect } from 'react-redux'
import {
  Box, Flex, HorizontalRule,
  Heading, SVG
} from 'atomic'
import { 
  brandMetaMask,
  socialTwitterBird, socialGithub, socialGoogle, socialFacebook, socialReddit, socialDomain
} from 'assets/svg'


export default props =>
<Box {...props.styled} >
  <Heading f={[3,4]} fw={300} color='purple' >
    Account Verifications
  </Heading>
  <HorizontalRule bc='purple' />
  <Flex direction='column' >


    <Flex align='center' mb={10} >
      <SVG svg={brandMetaMask} svgColor='charcoal' h={15} w={15} />
      <Heading f={[2]} ml={15} mb={0} fw={300} >
        Prove MetaMask Account
      </Heading>
    </Flex>

    <Flex align='center' mb={10} >
      <SVG svg={socialTwitterBird} svgColor='charcoal' h={15} w={15} />
      <Heading f={[2]} ml={15} mb={0} fw={300} >
        Prove Twitter Identity
      </Heading>
    </Flex>

    <Flex align='center' mb={10} >
      <SVG svg={socialGithub} svgColor='charcoal' h={15} w={15} />
      <Heading f={[2]} ml={15} mb={0} fw={300} >
        Prove Github Identity
      </Heading>
    </Flex>
    
    <Flex align='center' mb={10} >
      <SVG svg={socialGoogle} svgColor='charcoal' h={15} w={15} />
      <Heading f={[2]} ml={15} mb={0} fw={300} >
        Prove Google Identity
      </Heading>
    </Flex>
    
    <Flex align='center' mb={10} >
      <SVG svg={socialFacebook} svgColor='charcoal' h={15} w={15} />
      <Heading f={[2]} ml={15} mb={0} fw={300} >
        Prove Facebook Identity
      </Heading>
    </Flex>
    
    <Flex align='center' mb={10} >
      <SVG svg={socialReddit} svgColor='charcoal' h={15} w={15} />
      <Heading f={[2]} ml={15} mb={0} fw={300} >
        Prove Reddit Identity
      </Heading>
    </Flex>
    
    <Flex align='center' mb={10} >
      <SVG svg={socialDomain} svgColor='charcoal' h={15} w={15} />
      <Heading f={[2]} ml={15} mb={0} fw={300} >
        Prove Domain Ownership
      </Heading>
    </Flex>
    

  </Flex>
</Box>