# ETHERS_UTILS

Example with React Native:

Install:

- react-native-get-random-values
- @ethersproject/shims
- ethers

Import `react-native-get-random-values` and `@ethersproject/shims` before using ethers
Example:

```jsx
import "react-native-get-random-values";
import "@ethersproject/shims";
import { AppRegistry } from "react-native";
import App from "./App/App";
import { name as appName } from "./app.json";
import React from "react";

const Index = () => {
  return <App />;
};

AppRegistry.registerComponent(appName, () => Index);
```

Example of `EthersContext` :

```jsx
import React, { createContext } from "react";
import { createProvider, getWallet } from "./lib/ethers-utils"; // Add this repository in your project
import { erc20 } from "./lib/erc20-contract"; // Add this repository in your project
import { ethers } from "ethers";

export type EthersContextType = {
  wallet: ethers.Wallet,
  erc20: ethers.Contract,
  provider: ethers.providers.BaseProvider,
};

export const EthersContext = createContext<EthersContextType>({
    provider: null,
    erc20: null,
    wallet: null,
  });
const provider = createProvider("http://localhost:8545");
const wallet = getWallet(
  "avocado fade corn demand system nuclear march hair abandon panic inject loud",
  provider
);
const dizziToken = erc20("0x7fC187f5Aa819E9486dDe067835fd83017E70f56", wallet);

export const EthersProvider = ({ children }) => {
  return (
    <EthersContext.Provider value={{ erc20: dizziToken, wallet, provider }}>
      {children}
    </EthersContext.Provider>
  );
};
```
