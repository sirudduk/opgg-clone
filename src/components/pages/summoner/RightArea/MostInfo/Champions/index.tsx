import { IChampion } from '@/interface/summoner';
import MostChampion, { Empty } from './Champion';

interface MostChampionsProps {
  champions: IChampion[];
}

export default function MostChampions(props: MostChampionsProps) {
  const { champions } = props;

  const championsTemp = [0, 1, 2];

  return (
    <div className="p-[16px] flex flex-col gap-[16px] justify-between border-r border-gray-3 last:bottom-r-0">
      {championsTemp.map(idx => {
        const champion = champions[idx];
        if (champion) return <MostChampion key={idx} champion={champion} />;
        return <Empty key={idx} />;
      })}
    </div>
  );
}
