/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import { compose, lifecycle, } from 'recompose'
import Markdown from 'react-remarkable'
import { connect } from 'react-redux'
import {
  Flex, Box, Absolute, Container,
  Heading, Image, Paragraph, Link, Span, Button,
  BackgroundImage, BackgroundGradient, BackgroundImageIpfs
} from 'atomic'

import { 
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
  data: fromDatabase.getDeltaData(state, `projects|${props.match.params.eid}`)
})
const mapDispatchToProps = (dispatch, props) => {
  return {
  databaseReadRequest: (eid)=>dispatch(databaseReadRequest({
    payload:{},
    metadata: {
      branch: ['projects', eid],
      delta: `projects|${eid}`
    } 
  })),
}}


const ComponentRender = props => !props.data ? null :
<Box boxShadow={1} w={[1]}  {...props.styled} >
  <Flex align="center" justify="center"  mh={'40vh'} p={15} >
    <BackgroundImageIpfs src={idx(props.data, _=>_.images.gallery[0].data[0].hash)}/>
    <BackgroundGradient gradient="purple" o={0.5} />
    <Container w={[980]} ta='center' >
      <Heading f={[4,5]} color="white" fw={300} ts={1} >
        {idx(props.data, _=>_.entity.entityName)}
      </Heading>
      <Heading f={[1]} color="white" ts={1} >
        {idx(props.data, _=>_.entity.entityTagline)}
      </Heading>
    </Container>
  </Flex>

  <Container w={[920]} >
    <Box p={[15,20]} >
      <Paragraph f={[1]}>
      <Markdown source={idx(props.data, _=>_.entity.entityBody)} />
      </Paragraph>
      <Flex>
        {/* {props.tags.map(item=><Span>{item}</Span>)} */}
      </Flex>
    </Box>
  </Container>

</Box>


/*-- Export Form ---*/
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(ComponentRender);