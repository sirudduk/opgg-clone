import { IChampion } from '@/interface/summoner';
import Champion from './Champion';

interface ChampionsRateProps {
  champions: IChampion[];
}

export default function ChampionsRate(props: ChampionsRateProps) {
  const { champions } = props;

  return (
    <div>
      {champions.map((champion: IChampion) => (
        <Champion key={String(champion.rank)} champion={champion} />
      ))}
    </div>
  );
}
