import ethers from 'assimilation/store/ethers/sagas'
import uport from 'assimilation/store/uport/sagas'
import ipfs from 'assimilation/store/ipfs/sagas'
export default [
  ipfs(),
  ethers(),
  uport(),
]