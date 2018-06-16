/* ------------------------- External Dependencies -------------------------- */
import uuid from 'uuid/v1'
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import {
  compose,
  lifecycle,
} from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { fromUport } from 'assimilation/store/selectors'
import { uPortGetAttestCredentialsRequest } from 'assimilation/store/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormComponent from './component'

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
    dispatch(uPortGetAttestCredentialsRequest({
      payload: {
        credentials: {
          sub: props.identity.address,
          claim: {
            questKey: data.firebaseUID
          },
        }
      }, 
      metadata: 
      {
        delta: 'attest'
      } 
    }
  ))
})

const mapStateToProps = (state) => ({
  identity: fromUport.getDeltaData(state, 'credentials'),
  initialValues: {
    firebaseUID: uuid(),
  }
})

const mapDispatchToProps = dispatch => ({

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
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})

/* -------------------------- Form Configuration ---------------------------- */
const config = {
  form: 'Form',
  fields: [
    '',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-- Export Form ---*/
const FormConfiguration = reduxForm(config)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  FormConfiguration,
  QueryLifecycle,
)(FormComponent);