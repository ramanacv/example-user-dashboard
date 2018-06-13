/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import {
  Flex, Box, Absolute,
  Heading, Image, Paragraph, Link,
  BackgroundGradient, BackgroundImageIpfs
} from 'atomic'

import { 
  databaseReadRequest,
} from 'store/departments/actions'
import { fromDatabase } from 'store/departments/selectors'

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
    this.props.databaseReadRequest()
  },
})

/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => ({
  data: fromDatabase.getDeltaData(state,  'projects|search')
})
const mapDispatchToProps = (dispatch, props) => ({
  databaseReadRequest: ()=>dispatch(databaseReadRequest({
    payload:{},
    metadata: {
      branch: ['projects'],
      delta: 'projects|search'
    } 
  })),
})


const Card = props => 
<Box boxShadow={1} mb={30} w={[1,1,0.475]} >
  <Flex align="bottom" justify="bottom"  h={160} p={15} >
    <BackgroundImageIpfs src={idx(props, _=>_.images.gallery[0].data[0].hash)}/>
    <BackgroundGradient gradient="purple" o={0.5} />
      <Absolute bottom left ml={[15]} >
        <Link to={`/dashboard/projects/${props.eid}`} >
        <Heading f={[3,4]} color="white" fw={300} ts={1} >
          {idx(props, _=>_.entity.entityName)}
        </Heading>
        <Heading f={[1]} color="white" ts={1} >
          {idx(props, _=>_.entity.entityTagline)}
        </Heading>
        </Link>
      </Absolute>
      <Absolute top right mr={[-15]} mt={[-15]} >
        <Image w={[50]} h={[50]} br={9999} boxShadow={0} src={idx(props, _=>_.person.avatar)}/>
      </Absolute>
  </Flex>

  <Box p={[15,20]} >
    <Paragraph f={[1]}>
    {idx(props, _=>_.entity.entityDescription)}
    </Paragraph>
    <Flex>
      {/* {props.tags.map(item=><Span>{item}</Span>)} */}
    </Flex>
  </Box>

</Box>



const ComponentRender = props => !props.data ? null :
<Flex direction="row" justify="space-evenly" wrap='wrap' {...props.styled} >
  {Object.keys(props.data).map(item => <Card eid={item} {...props.data[item]} />)}
</Flex>

/*-- Export Form ---*/
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(ComponentRender);