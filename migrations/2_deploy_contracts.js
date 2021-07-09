const BlockFile = artifacts.require("BlockFile");

module.exports = function(deployer) {
  deployer.deploy(BlockFile);
};
