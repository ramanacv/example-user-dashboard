/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react';
import {
  compose,
  lifecycle,
  withState
} from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import Component from './component'
/*--- Redux Store ---*/
// Assimilation
import { fromUport } from 'assimilation/store/selectors'
// Store
import { fromAuthentication, fromDatabase } from 'store/departments/selectors'
import { uPortGetAttestCredentialsRequest } from 'assimilation/store/actions'
import { 
  authLoginWithIdentity,
  authLogout,
  dialogOpen,
  dialogClose,
} from 'store/departments/actions'
// Database
import { 
  databaseWriteRequest,
  databaseReadRequest,
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
  /*--- Component Mount ---*/
  componentDidMount()
  {

  },

  /*--- Component Update ---*/
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
  dialogClose: () => dispatch(dialogClose()),
  dialogOpen: (QR) => dispatch(dialogOpen({
    payload:{
      foundry: "DialogQRCode",
      QR: QR
    }
  })),
  logout: () => dispatch(authLogout()),
  identityLogin: (accessToken) => dispatch(authLoginWithIdentity({
    payload: accessToken
  })),
  loginRequest: ()=>dispatch(databaseWriteRequest({
    payload: {
      input: {
        requested: props.requested,
        notifications: props.notifications,
      },
      meta: {
        type: 'login',
        status: 'initialized',
      }
    },
    metadata:{
      branch: ['request', 'login'],
      delta: 'write|login|request',
      writeType: 'create',
    }
  })),
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
