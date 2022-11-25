import { useMemo } from 'react';
import Image from 'next/image';

import usePosition from '@/hooks/usePosition';
import { IPositions } from '@/interface/summoner';

import useRate from '@/hooks/useRate';

interface MostPositionProps {
  position: IPositions;
  gameTotal: number;
}

export default function MostPosition(props: MostPositionProps) {
  const { position, gameTotal } = props;

  const { winRate } = useRate({
    games: position.games,
    wins: position.wins,
    losses: position.losses,
  });

  const { positionText, positionImgUrl } = usePosition(position.position);

  const pickRate = useMemo(
    () => Math.floor((position.games / gameTotal) * 100),
    [gameTotal, position.games],
  );

  return (
    <div className="flex gap-[8px] items-center">
      <Image
        src={positionImgUrl}
        width="28"
        height="28"
        alt={position.positionName}
      />
      <div className="flex flex-col">
        <span className="text-14">{positionText}</span>
        <div className="text-11">
          <span className="font-bold text-[#1f8ecd]">{`${pickRate}%`}</span>
          <span className="border-r border-gray-3 mx-[8px]" />
          <span>승률</span>
          <span className="font-bold">{` ${winRate}%`}</span>
        </div>
      </div>
    </div>
  );
}
