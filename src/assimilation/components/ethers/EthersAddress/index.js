/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
/* ---------------------------- Module Package ------------------------------ */
export default props => !props.data ? null :
<Box bs={0} br={10} p={[15,25]} >
  <Heading level={[3]} f={[3]} color='blue' >
    {idx(props, _=>_.data.address)}
  </Heading>
</Box>