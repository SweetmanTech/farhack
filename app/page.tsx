import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { HOME_FRAME, NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata(HOME_FRAME);

export const metadata: Metadata = {
  title: 'estados-correlacionados',
  description: 'de Newtro',
  openGraph: {
    title: 'estados-correlacionados',
    description: 'de Newtro',
    images: [`${NEXT_PUBLIC_URL}/giphy.gif`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>estados-correlacionados.vercel.app</h1>
    </>
  );
}
