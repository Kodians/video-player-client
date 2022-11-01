import { useQuery } from "react-query";
import { api } from "../services/api.service";

const fetchById = (url: string) => api.get(url);

export const useFetchById = (url: string, properties: object) => {
  const [queryKey, dataId] = url.split("/");
  return useQuery([queryKey, dataId], () => fetchById(url), {
    ...properties,
  });
};
