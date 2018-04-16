/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import idx from './idx'
/* ------------------------- Internal Dependencies -------------------------- */
// files
import { ethereum } from 'assets/shapes'
// atoms
import SVG from 'atoms/SVG'
import StyleFieldDefault from 'static/style/StyleFieldDefault'
import Box from 'atoms/Box'
import Flex from 'atoms/Flex'
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import Span from 'atoms/Span'
import List from 'atoms/List'
import Form from 'molecules/Form'
import ReduxField from 'organisms/ReduxField'
import ens from 'logic/forms/normalize/ens'
import UportCredentialsRequest from 'assimilation/containers/uport/UPortCredentialsRequest'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) =>
<Box w={1}>
  <Flex
    direction='column'
    justify='center'
    ta='center'
    w={1} >
    <Heading level={[3]} f={[5]} fw='300' mr={15} >
      Public Event RSVP
    </Heading>
    <Paragraph f={[1]}>
      Attend an event by adding your name to a public registry.
    </Paragraph>
  </Flex>
  <Box mb={20}>
    <UportCredentialsRequest/>
  </Box>
  <Form {...styled} w={1}>
    <Box >
      <Field name="nameDisplay" 
        placeholder="Name" 
        component={ReduxField} type="text" 
        {...StyleFieldDefault} h={50}
      />
    </Box>
    <Box mt={10} >
      <Button type="submit" onClick={handleSubmit} disabled={!props.identityCredentialsRequest} gradient={!props.identityStatus ? 'cherry' : 'blue'} w={1} py={15} >
        {
          !props.identityCredentialsRequest ? "Please Login First" :
          !props.buttonText ? "Submit" : props.buttonText
        }
      
      </Button>
    </Box>
  </Form>
    <Button 
      onClick={props.arrival}
      gradient={!props.identityStatus ? 'cherry' : 'blue'} w={1} py={15} >
      Arrival
    </Button>
    <Heading f={[4,5]} mt={25} >
      Current Attendees
    </Heading>
    <Flex direction="column" >
      {!props.registeredEntityRequestStatus ? null : props.registeredEntityRequest.map((address, i)=>
      !idx(props, _=>_.entityList[i]) ? null :
      <Box bg="grayLight" boxShadow={0} color="charcoal" ta="left" mb={10} p={15} >
        <Heading f={[3,4]} color="purple" >
          <Span py={10} >{ idx(props, _=>_.entityList[i][0])}</Span>
        </Heading>
        <Span py={10} >{address}</Span>
        {console.log(idx(props, _=>_.entityList[i]))}
        <Paragraph f={[1]}>
          <Span py={10} >Approved: { `${props.entityList[i][1]}`}</Span>
        </Paragraph>
        <Paragraph f={[1]}>
          <Span py={10} >Arrivals: { 
            idx(props, _=>_.entityList[i][2])
            ? props.entityList[i][2].toNumber()
            : null
            }</Span>
        </Paragraph>
        <Paragraph f={[1]}>
          <Span py={10} >Departures: { 
            idx(props, _=>_.entityList[i][3])
            ? props.entityList[i][3].toNumber()
            : null
            }</Span>
        </Paragraph>
      </Box>
      )}
    </Flex>
</Box>