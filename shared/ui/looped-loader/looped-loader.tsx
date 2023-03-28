import Image from 'next/image';
import { ILoopedLoader } from './types';

export const LoopedLoader = ({
  hasLoading,
  src = '/loading.gif',
  width = 320,
  height = 240,
}: ILoopedLoader) => {
  if (!hasLoading) return null;
  return <Image src={src} alt="loading" width={width} height={height} />;
};
