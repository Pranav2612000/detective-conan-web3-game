const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Conan", "Heiji", "Akai", "Bourbon"],
    ["https://i.imgur.com/wIvuNZy.png", "https://i.imgur.com/ysxT4XK.png", "https://i.imgur.com/Jw9heDt.jpg", "https://i.imgur.com/PTL7uAv.jpg"],
    [100, 150, 200, 175],
    [70, 80, 55, 65],
    [85, 70, 90, 85],
    "Black Organization",
    "https://i.imgur.com/vSCxItw.jpg",
    10000,
    70
  );
  await gameContract.deployed();

  console.log('Contract deployed to ', gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Done");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

runMain();
