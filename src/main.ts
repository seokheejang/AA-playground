import "module-alias/register";
import { Wallet } from "@eth-infinitism-bundler/ethers";

function main() {
  console.log("Hello AA");
  const OwnerA = new Wallet("0x".padEnd(66, "1"));
  console.log("OwnerA", OwnerA);
}

main();
