import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { FrameMetadataType } from '@coinbase/onchainkit';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const hash = [
    "bafybeidz67btzjqpafmdv2dszraw4a5iqhqexerzomx7zek5bykhvepnmy", 
    "bafybeig2bfjagttxrfbbmboposh5ghmwxugnnugk2c4snyxn3epinlai5y", 
    "bafybeigk7xpxe6zm76e74fqipdmgpy2uturank2dkgnshqxhuvg5htnaki", 
    "bafkreifu73mes36vcuyayptrs5fsivg56nscqow25uqbqpz4xooud6v4by"
  ]

  const src = `https://cloudflare-ipfs.com/ipfs/${hash[Math.floor(Math.random() * hash.length)]}`
  const image = {
    src,
    aspectRatio: "1:1"
  } 
  const successFrame = {
    buttons: [
      {
        label: "START OVER",
      },
      {
        action: 'tx',
        label: "Collect New Prize",
        target: `${NEXT_PUBLIC_URL}/api/tx`,
        postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
      },
    ],
    image ,
    postUrl: `${NEXT_PUBLIC_URL}/api/home`,
    state: {
      time: new Date().toISOString(),
    },
  } as FrameMetadataType

  return new NextResponse(
    getFrameHtmlResponse(successFrame),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
