/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
// import idx from './idx'
/* ------------------------- Internal Dependencies -------------------------- */
// files
import { ethereum } from 'assets/shapes'
// atoms
import StyleFieldDefault from 'static/style/StyleFieldDefault'
import {
  Flex, Box, 
  Button, Heading, Image, Paragraph, Link, Span, SVG, List,
  BackgroundImage, BackgroundGradient,
  Form, ReduxField
} from 'atomic'
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
      A Primary Trust Anchor
    </Heading>
    <Paragraph f={[1]}>
      Please claim ownership of an email handle.
    </Paragraph>
  </Flex>
  <Box my={20}>
    <UportCredentialsRequest/>
  </Box>
  <Form {...styled} w={1}>
    <Box >
      <Field name="nameDisplay" 
        placeholder="Name" 
        component={ReduxField} type="text" 
        {...StyleFieldDefault} h={50}
      />
      <Field name="contactEmail" 
        placeholder="Email" 
        component={ReduxField} type="email" 
        {...StyleFieldDefault} h={50}
      />
    </Box>
    <Box mt={10} >
      <Button type="submit" onClick={handleSubmit} disabled={!props.identityStatus} gradient={!props.identityStatus ? 'cherry' : 'blue'} w={1} py={15} >
        {
          !props.identityStatus ? "Login with uPort" :
          !props.buttonText ? "Submit for Verification" : props.buttonText
        }
      
      </Button>
    </Box>
  </Form>
</Box>