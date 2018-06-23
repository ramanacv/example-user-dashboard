/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import {
  Box, Flex,
  Heading
} from 'atomic'

import { 
  databaseReadRequest,
} from 'store/departments/actions'
import { fromDatabase } from 'store/departments/selectors'

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {

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
  <Heading f={[3]}>
    Token Balances
  </Heading>
  <Flex>

  </Flex>
</Box>


/*-- Export ---*/
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(ComponentRender);