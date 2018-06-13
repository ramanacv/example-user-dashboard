/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Component from './component'
import { fromAuthentication, fromDatabase } from 'store/departments/selectors'
import { 
  databaseReadRequest,
} from 'store/departments/actions'

// Ethers
import ethers from 'assimilation/store/ethers/actions'
import { fromEthers } from 'assimilation/store/selectors'
// uPort
import { fromUport } from 'assimilation/store/selectors'
// Contract | ERC20
import {ERC20} from 'contracts'
/* ---------------------------- Module Package ------------------------------ */

/*-* State Management *-*/
const IdentityLoaded = withState(
  'identityLoaded',
  'identityLoadToggle',
  false
)

const IdentityDetailsLoaded = withState(
  'identityLoaded',
  'identityLoadToggle',
  false
)

const TokenLoaded = withState(
  'tokenLoaded',
  'tokenLoadToggle',
  false
)

/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {
    this.props.contractCreate(this.props.ethAbi)
    if(this.props.identityDetailsStatus && !this.props.tokenLoaded) {
      // this.props.getTokenBalance(this.props.identityData.addressDecoded.address)
      // this.props.identityLoadToggle(toggle=>!toggle)
    }
  },
  componentDidUpdate(prevProps)
  {
    if(this.props.identity && !this.props.identityLoaded) {
      this.props.identityDetailsRequest(this.props.identity.uid)
      this.props.identityLoadToggle(toggle=>!toggle)
    }
    if(this.props.identityDetailsStatus && !this.props.tokenLoaded) {
      this.props.getTokenBalance(this.props.identityDetails.profile.addressDecoded.address)
      this.props.tokenLoadToggle(toggle=>!toggle)
    }
    
  }
})

/*-* Redux *-*/
const mapStateToProps = (state, props) => {
  return {
    identity: fromAuthentication.getUser(state),
    identityDetails: fromDatabase.getDeltaData(state, 'user'),
    identityDetailsStatus: fromDatabase.getDeltaStatus(state, 'user'),
    identityData: fromUport.getDeltaData(state, `credentials`),
    identityStatus: fromUport.getDeltaStatus(state, `credentials`),
    tokenBalanceData: fromEthers.getDeltaData(state,  `contract|${props.contract}|${props.address}|balanceOf`),
    tokenBalanceStatus: fromEthers.getDeltaStatus(state,  `contract|${props.contract}|${props.address}|balanceOf`),
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  identityDetailsRequest: (uid)=>dispatch(databaseReadRequest({
    payload:{},
    metadata: {
      branch: ['users', uid ],
      delta: 'user'
    } 
  })),
  /**
   * Contract Create
   * Initialize a contract via a Saga callback
   */
  contractCreate: ()=>dispatch(ethers.contractCreate('REQUEST')(
    {
      ethAddress: props.address,
      ethAbi: ERC20.abi,
      contractName: props.contract
    },
    {
      delta: `contract|${props.contract}|${props.address}|create`,
      network: {
        provider: 'infura',
        chain: props.chain || 'rinkeby',
      }
    }
  )),

  /**
   * Token Balance
   * Scan the MeetupEvent Smart Contract for registered attendees
   */
  getTokenBalance: (address)=>dispatch(ethers.contractCall('REQUEST')(
    {
      contractName: props.contract,
      contractFunction: 'balanceOf',
      contractParams: [
        address
      ]
    },
    {
      delta: `contract|${props.contract}|${props.address}|balanceOf`,
      network: 'rinkeby'
    }
  )),
})

/* ----------------------------- Export -------------------------------- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  IdentityLoaded,
  IdentityDetailsLoaded,
  TokenLoaded,
  QueryLifecycle,
)(Component);