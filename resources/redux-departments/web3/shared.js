const actions = {
  web3: [
    'set_provider'
  ],
  eth: [
    'set_provider',
    'get_protocolVersion',
    'is_syncing',
    'get_coinbase',
    'is_mining',
    'get_hashrate',
    'get_gas_price',
    'get_accounts',
    'get_block_number',
    'get_balance',
    'get_storage_at',
    'get_code',
    'get_block',
    'get_block_transaction_count',
    'get_uncle',
    'get_transaction',
    'get_transaction_from_block',
    'get_transaction_receipt',
    'get_transaction_count',
    'send_transaction',
    'send_signed_transaction',
    'sign',
    'sign_transaction',
    'estimate_gas',
    'get_past_logs',
    'get_compilers',
    'get_work',
    'submit_work',
    'subscribe',
    'clear_subscriptions'
  ],
  eth_contract: [
    'create',
    'clone',
    'deploy',
    'call',
    'send',
    'estimate_gas',
    'encode_abi',
    'get_past_events'
  ],
  eth_accounts: [
    'create',
    'private_key_to_account',
    'sign_transaction',
    'recover_transaction',
    'hash_message',
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
  eth_personal: [
    'set_provider',
    'providers',
    'given_provider',
    'current_provider',
    'new_account',
    'sign',
    'ec_recover',
    'sign_transaction'
  ],
  eth_iban: [
    'create',
    'to_address',
    'to_iban',
    'from_ethereumAddress',
    'from_iban',
    'create_indirect',
    'is_valid',
    'is_direct',
  ],
  eth_abi: [
    'encode_function_signature',
    'encode_event_signature',
    'encode_parameter',
    'encode_function_call',
    'decode_parameter',
    'decode_parameters',
    'decode_log'
  ],
  net: [
    'get_id',
    'is_listening',
    'get_peer_count'
  ]
}

const entityTypes = Object.keys(actions)


module.exports = {
  entityTypes,
  actions
}
