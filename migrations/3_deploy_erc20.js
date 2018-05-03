const MeetupEvent = artifacts.require('./EIP20.sol');

const deploy = true

module.exports = !deploy ? null : (deployer) => {
  deployer.deploy(EIP20, 1000000, 'uPort Demo Token', 0, 'UPRT');
};
