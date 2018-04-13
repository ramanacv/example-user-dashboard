/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import StyleFieldDefault from 'static/style/StyleFieldDefault'
import Box from 'atoms/Box'
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import Form from 'molecules/Form'
import ReduxField from 'organisms/ReduxField'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) => !(props.identity && props.identity.address) ? null : (
<Form {...styled}>
  <Heading level={[3]} f={[4,5]} ta='center' >
    Quest Key
  </Heading>
  <Field name="firebaseUID" placeholder="Unique Identifier Preview" component={ReduxField} type="text" {...StyleFieldDefault}/>
  <Field name="firebaseUID" placeholder="Unique Identifier" component={ReduxField} type="password" {...StyleFieldDefault}/>
  <Box mt={10} >
    <Button onClick={handleSubmit} gradient='cherry'w={1} small p={7} >Quest Key Attestation</Button>
  </Box>
</Form>
)