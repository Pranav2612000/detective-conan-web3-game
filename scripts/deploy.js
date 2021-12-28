const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Conan", "Heiji", "Akai", "Bourbon"],
    ["https://i.imgur.com/wIvuNZy.png", "https://i.imgur.com/ysxT4XK.png", "https://i.imgur.com/Jw9heDt.jpg", "https://i.imgur.com/PTL7uAv.jpg"],
    [100, 150, 200, 175],
    [70, 80, 55, 65],
    [85, 70, 90, 85]
  );
  await gameContract.deployed();

  console.log('Contract deployed to ', gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  txn = await gameContract.mintCharacterNFT(3);
  await txn.wait();
  console.log("Minted NFT #4");


  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);

  console.log("Done deploying and minting");
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
