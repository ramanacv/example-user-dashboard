import React from 'react';
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import UPortAttestAddressForm from 'features/uport/UPortAttestAddressForm'
import { compose, lifecycle, withState, withStateHandlers } from 'recompose'

// const TabSelection = withState(
//   'tab',
//   'TabSwitch',
//   0
// )

const TabSelection = withStateHandlers(
  ({ initialTab = 0 }) => ({
    tab: initialTab,
  }),
  {
    tabSwitch: ({ counter }) => (value) => ({
      tab: value,
    }),
  }
)


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

const Component = props =>
<Box w={1} >
  <AppBar position="static">
    <Tabs>
      <Tab label="Address Information" onClick={() => props.tabSwitch(0)} />
      <Tab label="Music Selection" onClick={() => props.tabSwitch(1)} />
      <Tab label="Personal Preferences" onClick={() => props.tabSwitch(2)}/>
    </Tabs>
  </AppBar>
  {console.log(props.tab)}
  {props.tab === 0 && 
  <TabContainer>
    <Heading f={[3]}>
      Address Information
    </Heading>
    <UPortAttestAddressForm/>
  </TabContainer>}
  {props.tab === 1 && 
  <TabContainer>
    <Heading f={[3]}>
      Music Favorites
    </Heading>
    <UPortAttestAddressForm/>
  </TabContainer>}
  {props.tab === 2 && 
  <TabContainer>
    <Heading f={[3]}>
      Personal Preferences
    </Heading>
    <UPortAttestAddressForm/>
  </TabContainer>}
</Box>


export default compose(
  TabSelection
)(Component)