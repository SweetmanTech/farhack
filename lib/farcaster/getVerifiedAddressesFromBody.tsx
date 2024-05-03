import { FrameRequest } from '@coinbase/onchainkit';
import {
  getFarcasterUserAddress,
  GetFarcasterUserAddressResponse,
} from '@coinbase/onchainkit/farcaster';
import { Address } from 'viem';

const getVerifiedAddressesFromBody = async (body: FrameRequest) => {
  const { untrustedData } = body;
  const { fid } = untrustedData;
  const userAddress = await getFarcasterUserAddress(fid);
  const { verifiedAddresses } = userAddress as GetFarcasterUserAddressResponse;
  return verifiedAddresses as Address[];
};

export default getVerifiedAddressesFromBody;
