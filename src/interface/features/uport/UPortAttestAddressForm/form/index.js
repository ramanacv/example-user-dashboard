/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { Box, Button, ReduxField } from 'atomic'
import Form from 'molecules/Form'
import StyleFieldDefault from 'static/style/StyleFieldDefault'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) => (
<Form {...styled}>
    <Field name="addressStreet" placeholder="Street" component={ReduxField} type="text" {...StyleFieldDefault} />
    <Field name="addressCity" placeholder="City" component={ReduxField} type="text" {...StyleFieldDefault} />
    <Field name="addressState" placeholder="State" component={ReduxField} type="text" {...StyleFieldDefault} />
    <Field name="addressCountry" placeholder="Country" component={ReduxField} type="text" {...StyleFieldDefault} />
    <Field name="addressPlanet" placeholder="Planet" component={ReduxField} type="text" {...StyleFieldDefault} />
    <Field name="addressGalaxy" placeholder="Galaxy" component={ReduxField} type="text" {...StyleFieldDefault} />
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} disabled={!props.uid} gradient='cherry'w={1} >Submit</Button>
  </Box>
</Form>
)