export const buildRequestURI = (txObject, {callbackUrl, type} = {}) => {
  if (!mnid.isMNID(txObject.to)) throw new Error('To address must be MNID')
  const uri = `https://id.uport.me/${txObject.to}`

  const pairs = []
  if (txObject.value)    pairs.push(['value', parseInt(txObject.value, 16)])
  if (txObject.function) pairs.push(['function', txObject.function])
  if (callbackUrl)       pairs.push(['callback_url', callbackUrl])
  if (txObject.gasPrice) pairs.push(['gasPrice', txObject.gasPrice])
  if (type)              pairs.push(['type',type])

  return `${uri}?${pairs.map(kv => `${kv[0]}=${encodeURIComponent(kv[1])}`).join('&')}`
}