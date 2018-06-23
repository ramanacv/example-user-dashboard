/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import {
  Flex, Box,
  Heading, Image, Paragraph, Link, Span, Button,
  BackgroundImage, BackgroundGradient
} from 'atomic'

import { 
  databaseReadRequest,
} from 'store/departments/actions'
import { fromDatabase } from 'store/departments/selectors'
import UPortCredentialRequest from 'assimilation/containers/uport/UPortCredentialRequest'
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
        <Flex  w={[1,0.4]} align='center' >
        <Box
          borderRadius={9999999}
          bc="white"
          b="2px solid #FFF"
          boxShadow={2}
          of="hidden"
          mt={0}
          mr={20}
          h={60}
          w={60}
        >
          <BackgroundImage 
            src={idx(props, _=>_.data[item].profile.avatar.uri)}
          />
        </Box>
        <Link to={`/dashboard/people/${props.data[item].profile.address}`}>
          <Heading f={[3]}>
            {props.data[item].profile.name}
          </Heading>
          </Link>
        </Flex>
        <Flex w={[1,0.4]} justify='space-evenly' direction='column' >
          <Span>{props.data[item].profile.country}</Span>
        </Flex>
        <Flex w={[1,0.2]} direction="column" >
          <UPortCredentialRequest
            requested={[
              'name', 'email', 'phone'
            ]}
            mnid={props.data[item].profile.address} 
            text="Request Contact"
          />
          <Box mt={15} >
            <UPortCredentialRequest
              requested={[
                'addressVerification',
              ]}
              mnid={props.data[item].profile.address} 
              text="Request Address"
            />
          </Box>
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