const MeetupEvent = artifacts.require('./MeetupEvent.sol');

const deploy = true

module.exports = !deploy ? null : (deployer) => {
  deployer.deploy(MeetupEvent,
    "10000000000000000", "0x33A464CdA2CA86710b6d37F20DB92192E4595DCE", 
    75, 1523469745);
};
