import { useInfiniteQuery } from 'react-query';
import { api } from '../services/api.service';

const fetchInfinitely = async (url: string, { pageParam = 1 }) => {
  return api.get(url, {
    params: {
      page: pageParam,
      limit: 4,
      cacheId: `${url.replaceAll('/', '-')}${pageParam}`,
    },
  });
};

export const useInfiniteFetch = (url: string, properties: any) => {
  return useInfiniteQuery(
    [url],
    (pageParams) => fetchInfinitely(url, pageParams),
    properties
  );
};
