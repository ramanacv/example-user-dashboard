/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import { compose, lifecycle, withProps, withState, withHandlers, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, Button,
  BackgroundImage, BackgroundGradient
} from 'atomic'

import { 
  databaseWriteRequest,
  databaseReadRequest,
} from 'store/departments/actions'
import { fromDatabase } from 'store/departments/selectors'

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
    console.log(this.props)
    const eid = this.props.match.params.eid
    this.props.databaseReadRequest(eid)
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    console.log(this.props)
  }
})

/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => ({
  data: fromDatabase.getDeltaData(state, `person|${props.match.params.eid}`)
})
const mapDispatchToProps = (dispatch, props) => {
  return {
  databaseReadRequest: (eid)=>dispatch(databaseReadRequest({
    payload:{},
    metadata: {
      branch: ['users', eid],
      delta: `person|${eid}`
    } 
  })),
}}


const ComponentRender = props => !props.data ? null :
<Box {...props.styled} >
  <Flex align="center" direction="column" gradient="purple" {...props.styled.header} >
    <Box
      borderRadius={9999999} bc="white" b="2px solid #FFF"
      boxShadow={2}
      of="hidden"
      mt={0} ml="auto" mr="auto"
      h={100} w={100}>
      <BackgroundImage src={idx(props, _=>_.data.profile.avatar.uri)} />
    </Box>
    <Heading f={[4,5]} >
      {props.data.profile.name}
    </Heading>
    <Heading f={[3]}  >
      {props.data.profile.address}
    </Heading>
  </Flex>
  <Flex align='center' boxShadow={0} bg='grayLight' p={10} w={1} mb={15} >
    <Flex  w={[1,0.2]} align='center' >
    
    </Flex>
    <Flex w={[1,0.6]} justify='space-evenly' >
      <Span>{props.data.profile.email}</Span>
      <Span>{props.data.profile.phone}</Span>
      <Span>{props.data.profile.country}</Span>
    </Flex>
    <Flex w={[1,0.2]} >
      <Button>Request Attestation</Button>
    </Flex>
  </Flex>
</Box>


/*-- Export Form ---*/
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(ComponentRender);