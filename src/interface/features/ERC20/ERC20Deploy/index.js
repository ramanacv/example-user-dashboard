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

// Ethers
import ethers from 'assimilation/store/ethers/actions'

// uPort
import { fromUport } from 'assimilation/store/selectors'
import { uPortSendTransactionRequest } from 'assimilation/store/actions'

// Contacts
import {ERC20} from 'contracts'
/* --------------------------- Component Entry ------------------------------ */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  dispatch(ethers.contractDeploy("REQUEST")(
    {
      abi: ERC20.abi,
      bytecode: ERC20.bytecode,
      params: data
    },
    {
      delta: 'contract|deploy|erc20',
      network: {
        provider: 'infura',
        chain: props.chain || 'rinkeby',
      }
    }
   ))
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
const config = {
  form: 'FormERC20Deploy',
  fields: [
    'address',
  ],
  destroyOnUnmount: true,
  onSubmit,
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
