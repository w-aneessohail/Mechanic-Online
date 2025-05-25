import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
import job_CompletionModel from "../mechanic/jobComplete.js";

const requestServices_Model = sequelize.define(
  "request_Services",
  {
    serviceType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Location: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    serviceStatus: {
      type: DataTypes.ENUM("Active", "Inactive", "Completed"),
      allowNull: false,
      defaultValue: "Inactive",
    },
  },
  {
    paranoid: true,
  }
);

requestServices_Model.hasOne(job_CompletionModel);
job_CompletionModel.belongsTo(requestServices_Model);

export default requestServices_Model;
