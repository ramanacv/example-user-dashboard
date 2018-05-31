/* ------------------------- ENTITY -------------------------- */
const entityTypes = require('./shared').entityTypes
const actions = require('./shared').actions
const changeCase = require('change-case')

const entity = 'web3'
const entityUppercase = 'WEB3'

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

    const functionName = changeCase.camelCase(type + '_' + entityActions)

    const reduce = `
      case actions.${functionName}.REQUEST:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: undefined
          }
        }
      case actions.${functionName}.SUCCESS:
        return {
          ...state,
          [metadata.delta]: {
            ...state[metadata.delta],
            status: true,
            data: payload
          }
        }
      case actions.${functionName}.FAILURE:
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
