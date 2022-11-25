// quires/useMatchQuery.ts
import { useQuery } from 'react-query';
import { getMatches } from '@/services/summoner';

export const QUERY_KEY_MATCHES = 'summoner/matches';

const useMatchQuery = (name: any) => {
  return useQuery(QUERY_KEY_MATCHES, () => getMatches({ name }), {
    staleTime: Infinity,
  });
};

export default useMatchQuery;
