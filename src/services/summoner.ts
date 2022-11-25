import request from './request';
import { HTTP_METHOD } from './request';

interface Params {
  name: string | string[] | undefined;
  gameId?: string;
}

export const getInfo = ({ name }: Params) => {
  return request(`summoner/${name}`, HTTP_METHOD.GET);
};

export const getMostInfo = ({ name }: Params) => {
  return request(`summoner/${name}/mostInfo`, HTTP_METHOD.GET);
};

export const getMatches = ({ name }: Params) => {
  return request(`summoner/${name}/matches`, HTTP_METHOD.GET);
};

export const getMatchDetail = ({ name, gameId }: Params) => {
  return request(`summoner/${name}/matchDetail/${gameId}`, HTTP_METHOD.GET);
};
