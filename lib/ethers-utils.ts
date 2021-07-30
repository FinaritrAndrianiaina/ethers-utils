import {ethers, Wallet} from 'ethers';

/**
 * Exemple:
 * ```
 *  const provider = createProvider("http://localhost:8545")
 * ```
 * @param url
 * @returns ethers.providers.BaseProvider
 */
export const createProvider = (url: string): ethers.providers.BaseProvider => {
  return new ethers.providers.JsonRpcProvider(url);
};

/**
 * Exemple:
 *  ```
 *  const provider = createProvider("http://localhost:8545")
 *  const wallet = getWallet(
 *     'avocado fade corn demand system nuclear march hair abandon panic inject loud',
 *      provider
 *  );
 *  ```
 * @param mnemonic
 * @param provider
 * @returns ethers.Wallet
 */
export const getWallet = (
  mnemonic: string,
  provider?: ethers.providers.BaseProvider,
): Wallet => {
  const w = Wallet.fromMnemonic(mnemonic);
  if (provider) {
    return w.connect(provider);
  }
  return w;
};
