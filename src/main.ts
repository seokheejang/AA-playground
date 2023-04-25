import "module-alias/register";
import { Wallet } from "@eth-infinitism-bundler/node_modules/ethers";
import {
  DeterministicDeployer,
  HttpRpcClient,
  SimpleAccountAPI,
} from "@eth-infinitism-bundler/packages/sdk";

import { runBundler } from "@eth-infinitism-bundler/packages/bundler/src/runBundler";

class Runner {
  bundlerProvider!: HttpRpcClient;
  accountApi!: SimpleAccountAPI;
}

function main() {
  const OwnerA = new Wallet("0x".padEnd(66, "1"));
  console.log("OwnerA", OwnerA);

  console.log("OwnerA", new HttpRpcClient("", "", 15));

  // const argv = [
  //   "node",
  //   "exec",
  //   "--config",
  //   "./localconfig/bundler.config.json",
  //   "--unsafe",
  // ];

  // const run = runBundler(argv);
}

main();
