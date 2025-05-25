import CategoriesModel from "../../model/mechanic/categories.js";

const categories_Controller = {
  create: async (req, res) => {
    try {
      const payload = req.body;

      const categories = new CategoriesModel();

      categories.CategoryType = payload.CategoryType;

      await categories.save();
      res.json({ message: "Category Created", categories });
    } catch {
      (error) => {
        console.log(error);
        res.status(500).json({
          message: "Internal Server Error",
        });
      };
    }
  },
  read: async (req, res) => {
    try {
      const getCategories = await CategoriesModel.findAll({});
      res.json({
        getCategories,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something bad happened to server",
      });
    }
  },
};
export default categories_Controller;
