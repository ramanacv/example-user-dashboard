/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
// import idx from './idx'
/* ------------------------- Internal Dependencies -------------------------- */
import { Box, Flex, Button, Heading, ReduxField } from 'atomic'
import Form from 'molecules/Form'
import StyleFieldDefault from 'static/style/StyleFieldDefault'
import DialogOpen from 'containers/dialog/DialogOpen'
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle
} from 'redux-form-material-ui'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) => (
<Form {...styled}>
  <Heading level={[3]} f={[3]}>
    Event Attestation
  </Heading>
  <Field name="eventName" placeholder="Event Name" component={ReduxField} type="text" {...StyleFieldDefault} />
  <Field name="eventDescription" placeholder="Event Description" component={ReduxField} type="text" {...StyleFieldDefault} />
  <Field
    name="eventDate"
    component={DatePicker}
    format={null}
    fullWidth={true}
    hintText="Event Date"
  />
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} disabled={!props.uid} gradient='cherry'w={1} >Submit</Button>
  </Box>
</Form>
)