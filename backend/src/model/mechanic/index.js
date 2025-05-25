import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
import CategoriesModel from "./categories.js";
import requestServices_Model from "../customer/request_Service.js";
import mech_ImageModel from "./images.js";
import job_CompletionModel from "./jobComplete.js";

const MechanicModel = sequelize.define(
  "Mechanic",
  {
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    Username: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    CNIC: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    Address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);

// CategoriesModel.hasOne(MechanicModel);
// MechanicModel.belongsTo(CategoriesModel);

MechanicModel.hasOne(mech_ImageModel);
mech_ImageModel.belongsTo(MechanicModel);

MechanicModel.hasMany(job_CompletionModel);
job_CompletionModel.belongsTo(MechanicModel);

MechanicModel.hasMany(requestServices_Model);
requestServices_Model.belongsTo(MechanicModel);

export default MechanicModel;
