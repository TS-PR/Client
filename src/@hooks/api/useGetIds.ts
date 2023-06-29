import { useQuery } from "@tanstack/react-query";
import ContentService from "~/@services/main/main.service";

export const useGetAllID = () => {
  return useQuery(["all_ids"], () => ContentService.getAllID(), {
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });
};
