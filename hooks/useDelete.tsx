import { api } from "../services/api.service";
import { useMutation } from "react-query";

const deleteData = (id: string, uri: string) => {
  return api.delete(`${uri}/${id}`);
};

export const useDelete = (uri: string, properties: object) => {
  return useMutation((id: string) => deleteData(id, uri), { ...properties });
};
