import { IDProp } from "~/@interfaces/api";
import { MainApi } from "./main.api";

const ContentService = {
  getContents: async (id: IDProp) => {
    try {
      const result = await MainApi.get("/api/post", { params: { id } });

      return result;
    } catch (e: any) {
      console.error(e);
    }
  },
  getAllID: async () => {
    try {
      const result = await MainApi.get("/api/post/id");
      return result;
    } catch (e: any) {
      console.error(e);
    }
  },
};

export default ContentService;
