/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import {
  compose,
  lifecycle,
} from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import Form from './form'
import { createValidator, required } from 'logic/forms/validation'

// Ethers
import ethers from 'assimilation/store/ethers/actions'
import EthersContractInformation from 'assimilation/components/ethers/EthersContractInformation'
import { fromEthers } from 'assimilation/store/selectors'

// uPort
import { fromUport } from 'assimilation/store/selectors'
import { uPortSendTransactionRequest } from 'assimilation/store/actions'

// Contacts
import {ERC20} from 'contracts'
/* --------------------------- Component Entry ------------------------------ */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  const { address, amount } = data
  dispatch(uPortSendTransactionRequest({
    payload: {
      contractABI: ERC20.abi,
      contractAddress: props.address, // Smart Contract Address
      contractFunction: "approve",
      contractParams: [
        address, // Receipient Address 
        amount // Token Amount
      ]
    },
    metadata: {
      delta: 'contract|erc20|transfer'
    }
  }))
  props.reset() // Reset Redux Form
}).catch(err=>console.log(err))

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount()
  {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps)
  {

  }
})


/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

const config = {
  form: 'FormERC20Transfer',
  fields: [
    'address',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    identity: fromUport.getDeltaData(state, `credentials`),
    identityStatus: fromUport.getDeltaStatus(state, `credentials`),
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  transfer: (address, amount)=>dispatch(uPortSendTransactionRequest({
    payload: {
      contractABI: ERC20.abi,
      contractAddress: props.address,
      contractFunction: "transfer",
      contractParams: [
        address,
        amount
      ]
    },
    metadata: {
      delta: 'contract|erc20|transfer'
    }
  })),
})

/* ----------------------------- Export -------------------------------- */
const FormConfiguration = reduxForm(config)
const FormRedux = props => <Form { ...props} />

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  FormConfiguration,
  QueryLifecycle,
)(FormRedux);
