import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";

const mech_ImageModel = sequelize.define("mech_ImageDetails", {
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default mech_ImageModel;
