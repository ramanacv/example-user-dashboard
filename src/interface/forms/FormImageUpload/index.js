/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import {
  branch,
  compose,
  lifecycle,
  withProps,
  withState,
  renderComponent
} from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { SpinnerSquares } from 'atomic'
import { createValidator, required } from 'logic/forms/validation'
import {  fromAuthentication } from 'store/departments/selectors'
import ipfs from 'assimilation/store/ipfs/actions'
/*--- Redux Store ---*/
// Database
import { 
  databaseWriteRequest,
} from 'store/departments/actions'
import { fromIpfs } from 'assimilation/store/selectors'
/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'
console.log(fromIpfs)
/* --------------------------- Component Entry ------------------------------ */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {

  // /*--- Extraction ---*/
  const submission = {}
  submission.created = _.pickBy(data, (value, key)=> key.startsWith("created"));
  submission.name = _.pickBy(data, (value, key)=> key.startsWith("name"));
  submission.entity = _.pickBy(data, (value, key)=> key.startsWith("entity"));
  submission.contact = _.pickBy(data, (value, key)=> key.startsWith("contact"));
  submission.taxonomy = _.pickBy(data, (value, key)=> key.startsWith("taxonomy"));

  submission.images = {
    gallery: props.galleryUpload
  }

  const metadata = {
    branch: ['projects'],
    delta: 'write|project|request',
    writeType: 'create',
  }
  dispatch(databaseWriteRequest({payload: submission, metadata}))

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

const mapStateToProps = (state, props) => { 
  return {
    initialValues: {
      createdBy: fromAuthentication.getUserId(state)
    },
    logoUpload: fromIpfs.getDeltaStarting(state, `ipfs|file|logo`),
    galleryUpload: fromIpfs.getDeltaStarting(state, `ipfs|file|gallery`),
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  uploadFile: (files, path) => 
  files.map(file => dispatch(ipfs.filesAdd('REQUEST')(
    file,
    {
      delta: `ipfs|file|${path}|${file.name}|add`
  })))
})

const spinnerWhileLoading = (test) => branch(test,renderComponent(()=><SpinnerSquares gradient='cherry' />))

const FormRedux = props => <FormRender { ...props} />
const FormConfiguration = reduxForm(config)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  spinnerWhileLoading(
    (props) => !props.initialValues.createdBy ? true : false
  ),
  FormConfiguration,
  QueryLifecycle,
)(FormRedux);
