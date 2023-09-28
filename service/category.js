import { api } from "./baseService";

const CategoryService = {
  getCategory() {
    return api.get("/categories_news");
  },
};
export default CategoryService;
