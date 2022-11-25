import { useMemo } from 'react';
import MostPosition from './Position';
import { IPositions } from '@/interface/summoner';

interface MostPositionsProps {
  positions: IPositions[];
}

export default function MostPositions(props: MostPositionsProps) {
  const { positions } = props;

  const gameTotal = useMemo(
    () => positions.reduce((a, b) => a + b.games, 0),
    [positions],
  );

  return (
    <div className="flex flex-col p-[16px] gap-[22px]">
      <span className="text-12 text-gray-5">선호 포지션 (랭크)</span>
      <div className="flex flex-col gap-[22px]">
        {positions.map((item: IPositions, idx: number) => (
          <MostPosition key={idx} position={item} gameTotal={gameTotal} />
        ))}
      </div>
    </div>
  );
}
