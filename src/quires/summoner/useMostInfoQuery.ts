// quires/useMostInfoQuery.ts
import { useQuery } from 'react-query';
import { getMostInfo } from '@/services/summoner';

export const QUERY_KEY_MOST_INFO = 'summoner/mostInfo';

const useMostInfoQuery = (name: any) => {
  return useQuery(QUERY_KEY_MOST_INFO, () => getMostInfo({ name }), {
    staleTime: Infinity,
  });
};

export default useMostInfoQuery;
