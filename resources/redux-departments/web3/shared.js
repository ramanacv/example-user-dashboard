
const entityTypes = [
  'subscribe',
  'Contract',
  'accounts',
  'personal',
  'Iban',
  'abi'
]

const actions = {
  subscribe: [
    'subscribe',
    'clearSubscriptions',
    'subscribe',
    'recoverTransaction'
  ],
  Contract: [

  ],
  accounts: [
    'create',
    'privateKeyToAccount',
    'signTransaction',
    'recoverTransaction',
    'hashMessage',
    'sign',
    'recover',
    'encrypt',
    'decrypt',
    'wallet',
    'wallet_create',
    'wallet_add',
    'wallet_remove',
    'wallet_clear',
    'wallet_encrypt',
    'wallet_decrypt',
    'wallet_save',
    'wallet_load'
  ],
  personal: [
    'setProvider',
    'providers',
    'givenProvider',
    'currentProvider',
    'newAccount',
    'sign',
    'ecRecover',
    'signTransaction'
  ],
  Iban: [

  ],
  abi: [

  ]
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  entityTypes,
  actions,
  capitalizeFirstLetter
}
