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
import IdentityToken from 'features/IdentityToken'

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
    <IdentityToken address='0x9660fab3ca763f2fa6cf85a19ffc423cc53c0523' contract="BCK" />
    <IdentityToken address='0x9660fab3ca763f2fa6cf85a19ffc423cc53c0523' contract="DNA" />
    <IdentityToken address='0x9660fab3ca763f2fa6cf85a19ffc423cc53c0523' contract="PAK" />
  </Flex>
</Box>


/*-- Export ---*/
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(ComponentRender);