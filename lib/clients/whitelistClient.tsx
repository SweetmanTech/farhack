import { Address, createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { zoraSepolia } from 'viem/chains';

export const whitelistAccount = privateKeyToAccount(process.env.PRIVATE_KEY as Address);

export const whitelistClient = createWalletClient({
  account: whitelistAccount,
  chain: zoraSepolia,
  transport: http(),
});
