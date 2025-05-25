import CustomerModel from "../../model/customer/index.js";
import Joi from "joi";
import bcrypt from "bcrypt";

const customerController = {
  create: async (req, res) => {
    console.log("Request Body:", req.body);
    try {
      const payload = req.body;
      const schema = Joi.object({
        FirstName: Joi.string().min(3).max(30).alphanum().required(),
        LastName: Joi.string().min(3).max(30).alphanum(),
        Username: Joi.string().min(3).max(20).required().alphanum(),
        Email: Joi.string().min(10).max(30).required().email(),
        Password: Joi.string().min(8).max(15).required(),
      });
      const { error } = schema.validate(payload);
      if (error) {
        return res.status(400).json({ message: "Invalid data", error: error });
      }

      let check = await CustomerModel.findOne({
        where: {
          Email: payload.Email,
        },
      });
      if (check) {
        return res.status(400).json({
          message: "User with this email already exist",
        });
      }
      check = await CustomerModel.findOne({
        where: {
          Username: payload.Username,
        },
      });
      if (check) {
        return res.status(400).json({
          message: "User with this username already exist",
        });
      }

      const saltround = 10;
      const Password = await bcrypt.hash(payload.Password, saltround);
      const user = new CustomerModel();
      user.FirstName = payload.FirstName;
      user.LastName = payload.LastName;
      user.Username = payload.Username;
      user.Password = Password;
      user.Email = payload.Email;
      await user.save();

      res.json({ message: "User Created", user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  read: async (req, res) => {
    try {
      const getCustomer = await CustomerModel.findAll({});
      res.json({
        getCustomer,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something bad happened to server",
      });
    }
  },

  update: async (req, res) => {
    try {
      const cust_Id = req.params.cust_id;
      const payload = req.body;
      const schema = Joi.object({
        FirstName: Joi.string().min(3).max(30).alphanum().required(),
        LastName: Joi.string().min(3).max(30).required(),
        Username: Joi.string().min(3).max(20).required().alphanum(),
        Email: Joi.string().min(10).max(30).required().email(),
        Password: Joi.string().min(8).max(15).required(),
      });
      const { error } = schema.validate(payload);
      if (error) {
        return res.status(400).json({ message: "Invalid data", error: error });
      }

      const updatedUser = await CustomerModel.findByPk(cust_Id);
      if (!updatedUser) {
        return res.status(400).json({ message: "No such user exist." });
      }
      const saltround = 10;
      const Password = await bcrypt.hash(payload.Password, saltround);
      updatedUser.FirstName = payload.FirstName;
      updatedUser.LastName = payload.LastName;
      updatedUser.Username = payload.Username;
      updatedUser.Password = Password;
      updatedUser.Email = payload.Email;
      await updatedUser.save();

      res.json({ message: "User information updated", updatedUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  delete: async (req, res) => {
    try {
      const cust_id = req.params.cust_id;
      const deletedCustomer = await CustomerModel.destroy({
        where: { id: cust_id },
      });
      if (deletedCustomer === 1) {
        return res.status(200).json({ message: "User deleted successfully" });
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default customerController;
