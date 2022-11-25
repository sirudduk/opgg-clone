import { useRouter } from 'next/router';

import Avatar, { AvatarSizeType } from '@/components/ui/Avatar';

import useMatchDetailQuery from '@/quires/summoner/useMatchDetailQuery';

export default function MatchTeams({ gameId }: { gameId: string }) {
  const router = useRouter();
  const summonerName = router.query.summoner;

  const { data } = useMatchDetailQuery(summonerName, gameId);

  return (
    <div className="flex gap-[12px]">
      {data?.teams.map((item: any, idx: number) => (
        <div className="flex flex-col gap-[4px]" key={idx}>
          {item.players.map((team: any, i: number) => (
            <div className="flex items-center gap-[8px]" key={i}>
              <Avatar
                key={idx}
                imgUrl={team.champion.imageUrl}
                size={AvatarSizeType.small}
              />
              <span className="text-11 w-[70px] text-ellipsis overflow-hidden whitespace-nowrap">
                {team.summonerName}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
