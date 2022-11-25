import { useRouter } from 'next/router';
import { QueryClient, dehydrate } from 'react-query';

import { getInfo, getMostInfo, getMatches } from '@/services/summoner';
import { ISummoner } from '@/interface/summoner';

import useInfoQuery, { QUERY_KEY_INFO } from '@/quires/summoner/useInfoQuery';
import { QUERY_KEY_MOST_INFO } from '@/quires/summoner/useMostInfoQuery';
import useMatchQuery, {
  QUERY_KEY_MATCHES,
} from '@/quires/summoner/useMatchQuery';

import Profile from '@/components/pages/summoner/Profile';

import Container from '@/components/layout/Container';
import LeftArea from '@/components/pages/summoner/LeftArea';
import RightArea from '@/components/pages/summoner/RightArea';

export default function Summoner() {
  const router = useRouter();

  const summonerName = router.query.summoner;
  const {
    data: { summoner },
  } = useInfoQuery(summonerName);

  const { data: mostInfo } = useMatchQuery(summonerName);

  const {
    name,
    ladderRank,
    previousTiers,
    profileImageUrl,
    profileBorderImageUrl,
    level,
    leagues,
  }: ISummoner = summoner;

  return (
    <>
      <Profile
        name={name}
        level={level}
        ladderRank={ladderRank}
        previousTiers={previousTiers}
        profileImageUrl={profileImageUrl}
        profileBorderImageUrl={profileBorderImageUrl}
      />
      <Container>
        <div className="flex gap-[10px]">
          <LeftArea leagues={leagues} />
          <RightArea mostInfo={mostInfo} />
        </div>
      </Container>
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(QUERY_KEY_INFO, () =>
    getInfo({ name: ctx.query.summoner }),
  );

  await queryClient.prefetchQuery(QUERY_KEY_MOST_INFO, () =>
    getMostInfo({ name: ctx.query.summoner }),
  );

  await queryClient.prefetchQuery(QUERY_KEY_MATCHES, () =>
    getMatches({ name: ctx.query.summoner }),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
