/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { compose, lifecycle, } from 'recompose'
import { connect } from 'react-redux'
import {
  Flex, Span
} from 'atomic'

import { 
  databaseReadRequest,
} from 'store/departments/actions'
import { fromDatabase } from 'store/departments/selectors'

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
    const eid = this.props.match.params.eid
    this.props.databaseReadRequest(eid)
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
<Flex direction="column" boxShadow={0} bg='grayLight' color='charcoal' {...props.styled}  >
  <Span>{props.data.profile.email}</Span>
  <Span>{props.data.profile.phone}</Span>
  <Span>{props.data.profile.country}</Span>
</Flex>


/*-- Export Form ---*/
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(ComponentRender);