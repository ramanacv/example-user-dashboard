/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose'
import { reduxForm, change } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import Component from './component'
import { fromAuthentication, fromDatabase } from 'store/departments/selectors'
// Ethers
import ethers from 'assimilation/store/ethers/actions'
import { fromEthers } from 'assimilation/store/selectors'
// uPort
import { fromUport } from 'assimilation/store/selectors'
/* ---------------------------- Module Package ------------------------------ */

/*-* State Management *-*/
const IdentityLoaded = withState(
  'identityLoaded',
  'identityLoadToggle',
  false
)

/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {
    if(this.props.identityStatus && !this.props.identityLoaded) {
      this.props.getBalance('0x5c8101a4f850e39885ecbf9f627b60b216eebe93')
      this.props.identityLoadToggle(toggle=>!toggle)
    }
  },
  componentDidUpdate(prevProps)
  {

    if(this.props.identityStatus && !this.props.identityLoaded) {
      this.props.getBalance('0x5c8101a4f850e39885ecbf9f627b60b216eebe93')
      this.props.identityLoadToggle(toggle=>!toggle)
    }
    
  }
})

/*-* Redux *-*/
const mapStateToProps = (state, props) => {
  return {
    identityData: fromUport.getDeltaData(state, `credentials`),
    identityStatus: fromUport.getDeltaStatus(state, `credentials`),
    identity: fromAuthentication.getUser(state),
    identityDetails: fromDatabase.getDeltaData(state, 'user'),
    identityDetailsStatus: fromDatabase.getDeltaStatus(state, 'user'),
    accountBalance: fromEthers.getDeltaData(state,  'account|balance'),
    accountBalanceStatus: fromEthers.getDeltaStatus(state,  'account|balance'),
  }
}


const mapDispatchToProps = (dispatch, props) => ({
  getBalance: (address)=>dispatch(ethers.accountBalance('REQUEST')(
    address,
    {
      delta:'account|balance',
      network: {
        provider: 'infura',
        chain: props.chain || 'rinkeby',
      }
    }
  )),
  
})

/* ----------------------------- Export -------------------------------- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  IdentityLoaded,
  QueryLifecycle,
)(Component);