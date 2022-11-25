import { useMemo } from 'react';

export enum PositionTypes {
  TOP = 'TOP',
  JNG = 'JNG',
  MID = 'MID',
  ADC = 'ADC',
  SUP = 'SUP',
}

export default function usePosition(position: string) {
  const positionText = useMemo(() => {
    return {
      [PositionTypes.TOP]: '탑',
      [PositionTypes.JNG]: '정글',
      [PositionTypes.MID]: '미드',
      [PositionTypes.ADC]: '바텀',
      [PositionTypes.SUP]: '서포터',
    }[position];
  }, [position]);

  const positionImgUrl = useMemo((): any => {
    if (!position) return '/assets/imgs/positions/top.png';

    return {
      [PositionTypes.TOP]: '/assets/imgs/positions/top.png',
      [PositionTypes.JNG]: '/assets/imgs/positions/jng.png',
      [PositionTypes.MID]: '/assets/imgs/positions/mid.png',
      [PositionTypes.ADC]: '/assets/imgs/positions/adc.png',
      [PositionTypes.SUP]: '/assets/imgs/positions/sup.png',
    }[position];
  }, [position]);

  return {
    positionText,
    positionImgUrl,
  };
}
