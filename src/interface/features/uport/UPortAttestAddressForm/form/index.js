/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import { QRCode } from 'react-qr-svg'
import idx from './idx'
/* ------------------------- Internal Dependencies -------------------------- */
import { Box, Flex, Button, Heading, ReduxField } from 'atomic'
import Form from 'molecules/Form'
import StyleFieldDefault from 'static/style/StyleFieldDefault'
import DialogOpen from 'containers/dialog/DialogOpen'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) => (
<Form {...styled}>
<Flex bg={'white'} align="center" justify="center" p={20} >
  {
    !idx(props, _=>_.attestationRequest.admin.issued) ? null : 
    <Box>
      <DialogOpen foundry='WrapperMeetupEvent'>
        <Button gradient='purple' w={1} >
          Meetup RSVP
        </Button>
      </DialogOpen>
      {/* <QRCode
        bgColor="#FFFFFF"
        fgColor="#000000"
        level="Q"
        style={{ width: 400 }}
        value={props.attestationRequest.admin.attestation}
      />  */}
    </Box>
  }

</Flex>
  <Heading level={[3]} f={[3]}>
    Address Attestation
  </Heading>
    <Field name="addressStreet" placeholder="Street" component={ReduxField} type="text" {...StyleFieldDefault} />
    <Field name="addressCity" placeholder="City" component={ReduxField} type="text" {...StyleFieldDefault} />
    <Field name="addressState" placeholder="State" component={ReduxField} type="text" {...StyleFieldDefault} />
    <Field name="addressCountry" placeholder="Country" component={ReduxField} type="text" {...StyleFieldDefault} />
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} disabled={!props.uid} gradient='cherry'w={1} >Submit</Button>
  </Box>
</Form>
)