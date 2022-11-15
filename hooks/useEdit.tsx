import { api } from "../services/api.service";
import { useMutation } from "react-query";

const editData = (uri: string, { data, options }: any) => {
  return api.put(uri, data, options);
};

export const useEdit = (uri: string, properties: object = {}) => {
  return useMutation((options: object) => editData(uri, options), {
    ...properties,
  });
};
