import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";

const job_CompletionModel = sequelize.define(
  "job_Details",
  {
    Description: {
      type: DataTypes.STRING,
    },
    laborCost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    serviceCharge: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalBill: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);

export default job_CompletionModel;
