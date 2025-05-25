import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";

const cust_ImageModel = sequelize.define("cust_ImageDetails", {
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default cust_ImageModel;
