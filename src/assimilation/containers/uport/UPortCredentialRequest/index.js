/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import {compose, lifecycle, withState} from 'recompose'
import { connect } from 'react-redux'
/* ------------------------- Internal Dependencies -------------------------- */
import Component from './component'
import { fromUport } from 'assimilation/store/selectors'
import { fromDatabase } from 'store/departments/selectors'
import { 
  authLoginWithIdentity,
  authLogout,
  dialogOpen,
  dialogClose,
} from 'store/departments/actions'
import { 
  databaseWriteRequest,
  databaseChannelRequest,
} from 'store/departments/actions'
/* --------------------------- Component Entry ------------------------------ */
const DialogState = withState(
  'dialogInitialized',
  'dialogInitializedToggle',
  false
)

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({
  componentDidUpdate(prevProps)
  {
    if(this.props.loginChannel 
       && this.props.loginChannel.data 
       && this.props.loginChannel.data.JWT) {
      this.props.dialogClose()
      this.props.identityLogin(this.props.loginChannel.data.JWT)
    }
    if(this.props.loginStatus && this.props.login) {
      this.props.requestChannel(this.props.login)
    }
    if(!this.props.dialogInitialized && idx(this.props, _=>_.loginChannel.data.qr)) {
      this.props.dialogOpen(idx(this.props, _=>_.loginChannel.data.qr))
      this.props.dialogInitializedToggle(toggle=>!toggle)
    }
  }
})


/* ----------------------------- State Management -------------------------------- */
const mapStateToProps = (state, props) => ({
    user: state.authentication.user,
    data: fromUport.getDeltaData(state, `credentials`),
    status: fromUport.getDeltaStatus(state, `credentials`),
    login: fromDatabase.getDeltaData(state,'write|login|request'),
    loginStatus: fromDatabase.getDeltaData(state,'write|login|request'),
    loginChannel: fromDatabase.getDeltaData(state,'write|login|channel'),
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  // Authentiction
  identityLogin: (accessToken) => dispatch(authLoginWithIdentity({
    payload: accessToken
  })),
  logout: () => dispatch(authLogout()),

  // Dialog
  dialogClose: () => dispatch(dialogClose()),
  dialogOpen: (QR) => dispatch(dialogOpen({
    payload:{
      foundry: "DialogQRCode",
      QR: QR
    }
  })),

  // Login 
  loginRequest: ()=>dispatch(databaseWriteRequest({
    payload: {
      input: {
        requested: props.requested,
      },
      meta: {
        type: 'credential',
        status: 'initialized',
        uid: props.mnid
      }
    },
    metadata: {
      branch: ['request', 'credential'],
      delta: 'write|login|request',
      writeType: 'create',
    }
  })),

  // Channel : Database
  requestChannel: (eid) =>dispatch(databaseChannelRequest({
    payload: {},
    metadata: {
      branch: [
        'request', 'login', eid
      ],
      delta: 'write|login|channel',
    }
  })),
})

/* ----------------------------- Export -------------------------------- */
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DialogState,
  QueryLifecycle,
)(Component);
