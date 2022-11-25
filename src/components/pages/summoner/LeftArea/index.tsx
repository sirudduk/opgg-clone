import { useRouter } from 'next/router';

import useMatchQuery from '@/quires/summoner/useMatchQuery';
import Tier from './Tier';
import Rate from './Rate';
import { ITier } from '@/interface/summoner';

interface LeftAreaProps {
  leagues: ITier[];
}

export default function LeftArea(props: LeftAreaProps) {
  const router = useRouter();
  const { leagues } = props;
  const summonerName = router.query.summoner;

  const { data: matchInfo } = useMatchQuery(summonerName);

  return (
    <div className="min-w-[300px] flex flex-col gap-[8px]">
      <div className="flex flex-col gap-[8px]">
        {leagues.map((item: ITier, idx: number) => {
          const position = matchInfo.positions[idx];

          return <Tier tier={item} key={idx} position={position.position} />;
        })}
      </div>

      <Rate />
    </div>
  );
}
