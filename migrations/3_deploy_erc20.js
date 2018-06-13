const EIP20 = artifacts.require('./EIP20.sol');

const deploy = true

module.exports = !deploy ? null : (deployer) => {
  deployer.deploy(EIP20, 1000000, 'Double Helix', 0, 'DNA');
};
