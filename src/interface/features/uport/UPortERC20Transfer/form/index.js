/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
// import idx from './idx'
/* ------------------------- Internal Dependencies -------------------------- */
import { Box, Flex, Button, Heading, ReduxField } from 'atomic'
import Form from 'molecules/Form'
import StyleFieldDefault from 'static/style/StyleFieldDefault'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) => (
<Form {...styled}>
    <Field name="amount" placeholder="Amount" component={ReduxField} type="text" {...StyleFieldDefault} />
    <Field name="address" placeholder="Ethereum Address (0x.....)" component={ReduxField} type="text" {...StyleFieldDefault} />
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >
      {
        props.uid ? "Request Transaction Request" : 'Generate QR Code'
      }
    </Button>
  </Box>
</Form>
)