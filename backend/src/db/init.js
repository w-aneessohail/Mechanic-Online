import CustomerModel from "../model/customer/index.js";
import requestServices_Model from "../model/customer/request_Service.js";
import CategoriesModel from "../model/mechanic/categories.js";
import MechanicModel from "../model/mechanic/index.js";
import cust_ImageModel from "../model/customer/images.js";
import mech_ImageModel from "../model/mechanic/images.js";
import job_CompletionModel from "../model/mechanic/jobComplete.js";

const intitDB = async () => {
    await MechanicModel.sync({
    alter: true,
    force: false,
  });
  await CustomerModel.sync({
    alter: true,
    force: false,
  });
  await requestServices_Model.sync({
    alter: true,
    force: false,
  });
  await CategoriesModel.sync({
    alter: true,
    force: false,
  });
  await cust_ImageModel.sync({
    alter: true,
    force: false,
  });
  await mech_ImageModel.sync({
    alter: true,
    force: false,
  });
  await job_CompletionModel.sync({
    alter: true,
    force: false,
  });
};
export default intitDB;
