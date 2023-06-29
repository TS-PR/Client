import { useQuery } from "@tanstack/react-query";
import { IDProp } from "~/@interfaces/api";
import ContentService from "~/@services/main/main.service";

export const useGetSection = (id = undefined) => {
  return useQuery(["contents_per_section"], () => ContentService.getContents(id), {
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });
};
