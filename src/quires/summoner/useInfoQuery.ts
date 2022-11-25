// quires/useInfoQuery.ts
import { useQuery } from 'react-query';
import { getInfo } from '@/services/summoner';

export const QUERY_KEY_INFO = 'summoner/info';

const useInfoQuery = (name: any) => {
  return useQuery(QUERY_KEY_INFO, () => getInfo({ name }), {
    staleTime: Infinity,
  });
};

export default useInfoQuery;
