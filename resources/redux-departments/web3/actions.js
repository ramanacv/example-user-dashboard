/* ------------------------- ENTITY -------------------------- */
const entityTypes = require('./shared').entityTypes
const actions = require('./shared').actions
const capitalizeFirstLetter = require('./shared').capitalizeFirstLetter

const entity = 'web3'
const entityUppercase = 'WEB3'


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
