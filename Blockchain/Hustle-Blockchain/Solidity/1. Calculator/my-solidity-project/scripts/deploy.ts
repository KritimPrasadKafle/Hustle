import { ethers } from "hardhat";

async function main() {
  const DonationTracker = await ethers.getContractFactory("DonationTracker");
  const tracker = await DonationTracker.deploy();
  await tracker.waitForDeployment();
  console.log("DonationTracker deployed to:", await tracker.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
