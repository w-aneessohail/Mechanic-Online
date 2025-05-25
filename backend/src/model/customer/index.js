import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";
import requestServices_Model from "./request_Service.js";
import cust_ImageModel from "./images.js";

const CustomerModel = sequelize.define(
  "Customer",
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
  },
  {
    paranoid: true,
  }
);

CustomerModel.hasOne(cust_ImageModel);
cust_ImageModel.belongsTo(CustomerModel);

CustomerModel.hasMany(requestServices_Model);
requestServices_Model.belongsTo(CustomerModel);

export default CustomerModel;
