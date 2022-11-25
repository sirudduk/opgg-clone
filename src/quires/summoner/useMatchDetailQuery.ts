// quires/useMatchDetailQuery.ts
import { useQuery } from 'react-query';
import { getMatchDetail } from '@/services/summoner';

export const QUERY_KEY_MATCH_DETAIL = 'summoner/matchDetail';

const useMatchDetailQuery = (name: any, gameId: string) => {
  return useQuery(
    [QUERY_KEY_MATCH_DETAIL, gameId],
    () => getMatchDetail({ name, gameId }),
    {
      staleTime: Infinity,
    },
  );
};

export default useMatchDetailQuery;
