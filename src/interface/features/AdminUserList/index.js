/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
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
  howlHashDomRequest,
} from 'store/departments/actions'
import { fromDatabase } from 'store/departments/selectors'

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
    this.props.databaseReadRequest()
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    
  }
})

/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => ({
  data: fromDatabase.getDeltaData(state, 'users|admin')
})
const mapDispatchToProps = (dispatch, props) => {
  return {
  databaseReadRequest: ()=>dispatch(databaseReadRequest({
    payload:{},
    metadata: {
      branch: ['users'],
      delta: 'users|admin'
    } 
  })),
}}


const ComponentRender = props => <div>
  {
    !props.data ? null :
    Object.keys(props.data).map(item => <Box>
      <Flex align='center' boxShadow={0} bg='grayLight' p={10} w={1} mb={15} >
        <Flex  w={[1,0.2]} align='center' >
        <Box
          borderRadius={9999999}
          bc="white"
          b="2px solid #FFF"
          boxShadow={2}
          of="hidden"
          mt={0}
          ml="auto"
          mr="auto"
          h={100}
          w={100}
        >
          <BackgroundImage 
            src={idx(props, _=>_.data[item].profile.avatar.uri)}
          />
        </Box>
          <Heading f={[3]}  >
            {props.data[item].profile.name}
          </Heading>
        </Flex>
        <Flex w={[1,0.6]} justify='space-evenly' >
          <Span>{props.data[item].profile.email}</Span>
          <Span>{props.data[item].profile.phone}</Span>
          <Span>{props.data[item].profile.country}</Span>
        </Flex>
        <Flex w={[1,0.2]} >
          <Button>Request Attestation</Button>
        </Flex>
      </Flex>
    </Box>
    )}
</div>


/*-- Export Form ---*/
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(ComponentRender);