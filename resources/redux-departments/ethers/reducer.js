/* ------------------------- ENTITY -------------------------- */
const entity = 'ethers'
const entityUppercase = 'ETHERS'

const entityTypes = [
  'account',
  'blockchain',
  'contract',
  'ens',
  'provider',
  'wallet',
]

const actions = {
  account: [
    'balance_get',
    'transaction_count_get',
    'address_lookup',
    'name_resolve',
  ],
  blockchain: [
    'block_number',
    'gas_price',
    'block',
    'transaction',
    'transaction_receipt',
  ],
  contract: [
    'create',
    'call',
    'estimate_gas',
    'send_transaction',
    'deploy',
  ],
  ens: [
    'resolve',
    'lookup',
  ],
  // events: [

  // ],
  provider: [
    'etherscan',
    'jsonrpc',
    'infura',
  ],
  wallet: [
    'generate_random',
    'generate_json',
    'generate_mnemonic',
    'generate_brain',
    'address',
    'sign',
    'sign_message',
    'encrypt'
  ],
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(`
import actions from ./actions
import { initialState } from './selectors'
export default (state = initialState, {type, payload, metadata}) => {
  if(batch) {
    return {
      ...state,
      [metadata.delta]: {
        ...state[metadata.delta],
        status: undefined
      }
    }
  }else{ 
  switch (type) {
`)
entityTypes.map(type=>{
  const actionsRendered = actions[type].map(entityActions=> {

    let functionHeader = entityActions[0].toUpperCase() 
    const split = entityActions.slice(1).split("_")
    if (split[1]) {
      const split = entityActions.slice(1).split("_")
      functionHeader = functionHeader + split[0] +  capitalizeFirstLetter(split[1])
    } else {
      functionHeader = functionHeader + entityActions.slice(1)
    }


    const reduce = `
      case actions.${type.toUpperCase()}_${entityActions.toUpperCase()}.REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case actions.${type.toUpperCase()}_${entityActions.toUpperCase()}.SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case actions.${type.toUpperCase()}_${entityActions.toUpperCase()}.FAILURE:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: false,
            error: payload
          }
        }
`
console.log(reduce)
})
})
  console.log(`
    default:
      return state
  }
  }
}
  `)