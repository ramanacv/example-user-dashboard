/* ------------------------- External Dependencies -------------------------- */
import React from 'react';

import {
  Button,
} from 'atomic'
/* ---------------------------- Module Package ------------------------------ */
export default props =>
<Button 
w={1}
py={15}
onClick={()=>props.loginRequest()} 
{...props.styledButton} >
{
  props.text ? props.text : 'Request Credential'
}
</Button>