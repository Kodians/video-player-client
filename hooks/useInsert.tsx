import { api } from "../services/api.service"
import { useMutation } from "react-query";

const insertData = (uri: string, { data, options }: any) => {
  return api.post(uri, data, options);
};

export const useInsert = (uri: string, properties: object) => {
  return useMutation((options: object) => insertData(uri, options), {
    ...properties,
  });
};
