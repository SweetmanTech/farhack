import { NEXT_PUBLIC_URL } from '@/app/config';
import { FrameMetadataType } from '@coinbase/onchainkit';

const getBallFrame = (isCollector: boolean) => {
  const actionLabel = 'start over';
  const src = `${NEXT_PUBLIC_URL}/unlock.gif`;
  const image = {
    src,
    aspectRatio: '1:1',
  } as any;
  return {
    buttons: [
      {
        label: actionLabel,
      },
      {
        action: 'link',
        label: 'github',
        target: 'https://github.com/SweetmanTech/ESTADOS-CORRELACIONADOS',
      },
    ],
    image,
    postUrl: `${NEXT_PUBLIC_URL}/api/home`,
    state: {
      time: new Date().toISOString(),
    },
  } as FrameMetadataType;
};

export default getBallFrame;
