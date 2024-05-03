import { Address, encodeFunctionData, maxUint64 } from 'viem';
import { merkleMinterAbi } from '../abi/merkleMinter';
import { FUNDS_RECIPIENT } from '@/app/config';

const getSetSaleMerkleData = (tokenId: bigint, root: Address) => {
  const myStruct = {
    presaleStart: 0n,
    presaleEnd: maxUint64,
    fundsRecipient: FUNDS_RECIPIENT,
    merkleRoot: root,
  };
  const args = [tokenId, myStruct] as any;
  const encodedCall = encodeFunctionData({
    abi: merkleMinterAbi,
    functionName: 'setSale',
    args,
  });
  return encodedCall;
};

export default getSetSaleMerkleData;
