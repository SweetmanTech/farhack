import { NextRequest, NextResponse } from 'next/server';
import { Address, encodeAbiParameters, encodeFunctionData, parseEther } from 'viem';
import { zora } from 'viem/chains';
import type { FrameTransactionResponse } from '@coinbase/onchainkit/frame';
import { zora1155Implementation } from '@/lib/abi/zora1155Implementation';
import { FrameRequest } from '@coinbase/onchainkit';
import getVerifiedAddressesFromBody from '@/lib/farcaster/getVerifiedAddressesFromBody';

async function getResponse(req: NextRequest): Promise<NextResponse | Response> {
  const body: FrameRequest = await req.json();
  const verifiedAddresses = await getVerifiedAddressesFromBody(body)
  const minter = "0x04E2516A2c207E84a1839755675dfd8eF6302F0a" as Address
  const tokenId = BigInt(Math.floor(Math.random() * 6))
  const quantity = 1n
  if (!verifiedAddresses?.[0]) return new Response("No verified address", { status: 400 });
  const minterArguments  = encodeAbiParameters(
    [
      { name: 'mintTo', type: 'address' },
      { name: 'comment', type: 'string' },
    ],
    [verifiedAddresses[0], "FARCASTER FRAME COLLECT!!!"]
  )
  const data = encodeFunctionData({
    abi: zora1155Implementation,
    functionName: 'mintWithRewards',
    args: [minter, tokenId, quantity, minterArguments, "0xcfBf34d385EA2d5Eb947063b67eA226dcDA3DC38"],
  });

  const BUENOS_AIRES_SONG_CAMP = "0xe88035cbc6703b18e2899fe2b5f6e435f00ade41"
  const txData: FrameTransactionResponse = {
    chainId: `eip155:${zora.id}`,
    method: 'eth_sendTransaction',
    params: {
      abi: zora1155Implementation,
      data,
      to: BUENOS_AIRES_SONG_CAMP,
      value: parseEther('0.001554').toString(), 
    },
  };
  return NextResponse.json(txData);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
