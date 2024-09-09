const { ethers } = require("hardhat");
async function main() {
  console.log("Deploying smart contract...");
  const Medical = await ethers.getContractFactory("MedicalRecords");
  const account = await ethers.getSigners();
  const medical = await Medical.connect(account[0]).deploy();
  await medical.waitForDeployment();
  console.log(`Medical is deployed in address: ${await medical.getAddress()}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });