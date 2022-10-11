import { useQuery } from "react-query";
import { api } from "../services/api.service";

const fetch = (url: string) => api.get(url);

export const useFetch = (url: string, properties: object) => {
  const queryKey = url.replace(/\//g, "");
  return useQuery(queryKey, () => fetch(url), {
    ...properties,
  });
};
