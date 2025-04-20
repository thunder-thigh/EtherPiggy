async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const SavingsVault = await ethers.getContractFactory("SavingsVault");
  const contract = await SavingsVault.deploy();
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log("SavingsVault deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
