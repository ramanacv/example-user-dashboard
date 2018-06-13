/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import {
  compose,
  lifecycle,
} from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'
/*--- Redux Store ---*/
import { fromAuthentication } from 'store/departments/selectors'
import { fromDatabase } from 'store/departments/selectors'
import { fromUport } from 'assimilation/store/selectors'
import { uPortGetAttestCredentialsRequest } from 'assimilation/store/actions'
import Form from './form'

// Database
import { 
  databaseWriteRequest,
  databaseReadRequest,
  databaseChannelRequest,
} from 'store/departments/actions'
import {Connect} from 'uport-connect'
/* --------------------------- Component Entry ------------------------------ */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  const metadata = {
    branch: ['request', 'contract'],
    delta: 'write|contract|request',
    writeType: 'create',
  }
  dispatch(databaseWriteRequest({
  payload: {
    input:{
      ...data
    },
    meta: {
      contract: 'ERC20',
      type: 'function',
      status: 'initialized',
      uid: props.uid
    }
  }, 
  metadata}))
})

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount()
  {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps)
  {
    if(this.props.attestionSubmitStatus && this.props.attestionSubmit) {
    this.props.databaseChannel(this.props.attestionSubmit)
    }
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})


/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

const config = {
  form: 'UPortERC20Transfer',
  fields: [
    'address',
    'amount',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    data: fromUport.getDeltaData(state, `credentials`),
    status: fromUport.getDeltaStatus(state, `credentials`),
    uid: fromAuthentication.getUserId(state),
    attestionSubmit: fromDatabase.getDeltaData(state,'contract|ERC20||request'),
    attestionSubmitStatus: fromDatabase.getDeltaData(state,'contract|ERC20||request'),
    attestationRequest: fromDatabase.getDeltaData(state,'contract|ERC20||channel'),
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  databaseChannel: (eid) =>dispatch(databaseChannelRequest({
    payload: {},
    metadata: {
      branch: [
        'request', 'contract', eid
      ],
      delta: 'contract|ERC20||channel',
    }
  }))
})

/* ----------------------------- Export -------------------------------- */
const FormConfiguration = reduxForm(config)
const FormRedux = props => <Form { ...props} />

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  FormConfiguration,
  QueryLifecycle,
)(FormRedux);
