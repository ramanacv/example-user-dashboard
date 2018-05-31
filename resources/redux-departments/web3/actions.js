/* ------------------------- ENTITY -------------------------- */
const entityTypes = require('./shared').entityTypes
const actions = require('./shared').actions
const capitalizeFirstLetter = require('./shared').capitalizeFirstLetter
const changeCase = require('change-case')

const entity = 'web3'
const entityUppercase = 'WEB3'


console.log(`import {createRequestTypes, action} from '../utils'
export const actions = {`)
entityTypes.map(type=>{
  const actionsRendered = actions[type].map(entityActions=> {
    const actionName = changeCase.constantCase(type + '_' + entityActions)
    return (
`${actionName}: createRequestTypes('${actionName}'),
`
    )

  })
  console.log(...actionsRendered)
})

entityTypes.map(type=>{
  const actionsRendered = actions[type].map(entityActions=> {
    const actionName = changeCase.constantCase(type + '_' + entityActions)
    const functionName = changeCase.camelCase(type + '_' + entityActions)

    return (
`${functionName}: status => (payload, metadata) => action(actions.${actionName}[status], payload, metadata, true),
`
    )

  })
  console.log(...actionsRendered)
})
console.log(`}
export default actions
`)
