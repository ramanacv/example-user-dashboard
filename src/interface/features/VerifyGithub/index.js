/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose'
import { reduxForm, change } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'
import Form from './form'

// uPort
import { fromUport } from 'assimilation/store/selectors'
import { uPortSendTransactionRequest } from 'assimilation/store/actions'

// Contract | MeetupEvent
import {MeetupEvent} from 'contracts'
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

  },
  componentDidUpdate(prevProps)
  {
    if(this.props.identityStatus && !this.props.identityLoaded) {
      this.props.dispatch(change("FormMeetupEvent", "nameDisplay", this.props.identityData.name))
      this.props.dispatch(change("FormMeetupEvent", "contactEmail", this.props.identityData.email))
      this.props.identityLoadToggle(toggle=>!toggle)
    }
  }
})

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
  identityData: fromUport.getDeltaData(state, `credentials`),
  identityStatus: fromUport.getDeltaStatus(state, `credentials`),
})


const mapDispatchToProps = (dispatch, props) => ({

})


/* ----------------------------- Redux Form -------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {

})

const validate = createValidator({
  'contactEmail': required,
})

const config = {
  form: 'FormVerifyEmail',
  fields: [
    'contactEmail',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/* ----------------------------- Export -------------------------------- */
const FormConfiguration = reduxForm(config)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  FormConfiguration,
  IdentityLoaded,
  QueryLifecycle,
)(Form);