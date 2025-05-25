import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";

const CategoriesModel = sequelize.define(
  "Categories",
  {
    CategoryType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);

export default CategoriesModel;
