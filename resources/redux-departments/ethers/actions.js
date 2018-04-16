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

console.log(`import {createRequestTypes, action} from '../utils'
export const actions = {`)
entityTypes.map(type=>{
  const actionsRendered = actions[type].map(entityActions=> {
    return (
`${type.toUpperCase()}_${entityActions.toUpperCase()}: createRequestTypes('${type.toUpperCase()}_${entityActions.toUpperCase()}'),
`
    )

  })
  console.log(...actionsRendered)
})

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
    return (
`${type}${functionHeader}: status => (payload, metadata) => action(actions.${type.toUpperCase()}_${entityActions.toUpperCase()}[status], payload, metadata, true),
`
    )

  })
  console.log(...actionsRendered)
})
console.log(`}
export default actions
`)
