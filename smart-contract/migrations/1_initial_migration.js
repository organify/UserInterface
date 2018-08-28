var Migrations = artifacts.require("./Migrations.sol");
var MonthlySubscription = artifacts.require("../MonthlySubscription.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MonthlySubscription);
};
