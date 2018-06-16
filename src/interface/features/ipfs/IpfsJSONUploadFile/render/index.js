/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Flex, Box, ReduxField, Button,
  Heading, Form, Paragraph
} from 'atomic'

/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) =>
<Form {...props.style}>
  <Box bg='white' boxShadow={1} p={25} br={5} mb={20} >
    <Heading f={[2]} ta='center' >
      JSON Upload
    </Heading>
    {console.log(props.JSONHash)}
    {
      !(props.JSONHash && props.JSONHash[0]) ? null :
      <Box>
        <Paragraph f={[1]}>
          Path: {props.JSONHash[0].path}
        </Paragraph>
        <Paragraph f={[1]}>
          Infura: <a href={`https://ipfs.infura.io/ipfs/${props.JSONHash[0].path}`}>Link</a>
        </Paragraph>
      </Box>
    }
    <Flex direction="column" w={1} >
      <Flex w={[1]} justify='center' >
        <Field
          component={ReduxField}
          name="json"
          type='textarea'
          placeholder=''
        />
      </Flex>
    </Flex>
    <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
  </Box>
</Form>