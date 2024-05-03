import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { HOME_FRAME } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {

  return new NextResponse(
    getFrameHtmlResponse(HOME_FRAME),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
