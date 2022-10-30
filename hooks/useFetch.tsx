import { useQuery } from "react-query";
import { api } from "../services/api.service";

const fetch = (url: string) =>
  api.get(url, {
    params: { page: 1, limit: 10, cacheId: url.replaceAll("/", "-") },
  });

export const useFetch = (url: string, properties: any = {}) => {
  const queryKey = url.replace(/\//g, "");
  return useQuery(queryKey, () => fetch(url), {
    ...properties,
  });
};
