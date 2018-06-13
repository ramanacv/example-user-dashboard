/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {Box} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default props => <Box onClick={props.authLogin} {...props} >{props.children}</Box>
