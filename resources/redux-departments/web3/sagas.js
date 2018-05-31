/* ------------------------- ENTITY -------------------------- */
const entityTypes = require('./shared').entityTypes
const actions = require('./shared').actions
const capitalizeFirstLetter = require('./shared').capitalizeFirstLetter
const changeCase = require('change-case')

const entity = 'ethers'
const entityUppercase = 'ETHERS'

entityTypes.map(type=>{
  const actionsRendered = actions[type].map(entityActions=> {
    const functionName = changeCase.camelCase(type + '_' + entityActions)
    return (
`
export function * ${functionName} ({payload, metadata}) {
  try {

    yield put(actions.${functionName}("SUCCESS")(
      payload,
      metadata,
    ))
  } catch (err) {
    yield put(actions.${functionName}("FAILURE")(
      {
        error: err.message,
      },
      metadata,
    ))
  }
}

`
    )

  })
  console.log(...actionsRendered)
})


console.log(`export default function* ${entity}Saga() {
  yield [`)

entityTypes.map(type=>{
  const actionsRendered = actions[type].map(entityActions=> {
    const actionName = changeCase.constantCase(type + '_' + entityActions)
    const functionName = changeCase.camelCase(type + '_' + entityActions)

    return ( `   takeEvery(actions.${actionName}.REQUEST, ${functionName}),\n`
    )

  })
  console.log(...actionsRendered)
})



console.log(`  ];
}
`)
