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
import ipfs from 'assimilation/store/ipfs/actions'
/*--- Redux Store ---*/
import { fromIpfs } from 'assimilation/store/selectors'
/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'
/* --------------------------- Component Entry ------------------------------ */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  const file = data.json
  dispatch(ipfs.filesAdd('REQUEST')(
    file,
    {
      delta: `ipfs|json|upload`,
      type: 'json',
      inputType: 'string'
  }))

})
.catch(err=> console.log(err))

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    console.log(this.props)
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})


/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({
  nameDisplay: required,
})
const config = {
  form: 'FormProjectAdd',
  fields: [
    'nameProject',
    'nameProjectAlias',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

const mapStateToProps = (state, props) => ({
  JSONHash: fromIpfs.getDeltaData(state, `ipfs|json|upload`),
})

const mapDispatchToProps = (dispatch, props) => ({

})

/* --------------------------- Export Component ------------------------------ */
const FormRedux = props => <FormRender { ...props} />
const FormConfiguration = reduxForm(config)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  FormConfiguration,
  QueryLifecycle,
)(FormRedux);
