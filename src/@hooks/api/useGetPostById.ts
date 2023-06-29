import { useQuery } from "@tanstack/react-query";
import { IDProp } from "~/@interfaces/api";
import ContentService from "~/@services/main/main.service";

export const useGetPostById = (id: IDProp) => {
  return useQuery(["contents_per_section", id], () => ContentService.getContents(id), {
    staleTime: 60000,
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};
