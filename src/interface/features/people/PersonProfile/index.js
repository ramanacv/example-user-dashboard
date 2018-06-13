/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import { compose, lifecycle} from 'recompose'
import { connect } from 'react-redux'
import {
  Flex, Box, 
  Heading, BackgroundImage
} from 'atomic'
import { earth } from 'assets/images'
import { 
  databaseReadRequest,
} from 'store/departments/actions'
import { fromDatabase } from 'store/departments/selectors'

import VerifyIdentity from 'features/verify/VerifyIdentity'
/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
    const eid = this.props.match.params.eid
    this.props.databaseReadRequest(eid)
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    // console.log(this.props)
  }
})

/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => ({
  data: fromDatabase.getDeltaData(state, `person|${props.match.params.eid}`)
})
const mapDispatchToProps = (dispatch, props) => ({
  databaseReadRequest: (eid)=>dispatch(databaseReadRequest({
    payload:{},
    metadata: {
      branch: ['users', eid],
      delta: `person|${eid}`
    } 
  })),
})


const ComponentRender = props => !props.data ? null :
<Box {...props.styled} >
  <Flex align="center" direction="column" gradient="purple" {...props.styled.header} >
  <BackgroundImage src={earth} o={0.2} />
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
    <Heading f={[2]}  >
      MNID: {props.data.profile.address}
    </Heading>
    <Heading f={[1]} fw={300} >
      Address: {props.data.profile.addressDecoded.address}
    </Heading>
    <Heading f={[1]} fw={300} >
      Network: {props.data.profile.addressDecoded.network}
    </Heading>
  </Flex>
  <VerifyIdentity/>
</Box>


/*-- Export Form ---*/
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(ComponentRender);