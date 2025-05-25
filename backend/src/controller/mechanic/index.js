import MechanicModel from "../../model/mechanic/index.js";
import Joi from "joi";
import bcrypt from "bcrypt";
const mechanicController = {
  create: async (req, res) => {
    try {
      const payload = req.body;
      console.log(payload);

      const schema = Joi.object({
        FirstName: Joi.string().min(3).max(30).alphanum().required(),
        LastName: Joi.string().min(3).max(30).alphanum(),
        Username: Joi.string().min(3).max(20).required().alphanum(),
        Email: Joi.string().min(10).max(30).required().email(),
        Password: Joi.string().min(8).max(15).required(),
        Phone: Joi.string().min(11).max(15).required(),
        CNIC: Joi.string().min(12).max(15).required(),
        Address: Joi.string().required(),
        // CategoryId: Joi.number().required(),
      });

      const { error } = schema.validate(payload);
      if (error) {
        return res.status(400).json({ message: "Invalid data", error: error });
      }

      let check = await MechanicModel.findOne({
        where: { Username: payload.Username },
      });
      if (check) {
        return res
          .status(400)
          .json({ message: "User with this username already exists" });
      }

      check = await MechanicModel.findOne({
        where: { Email: payload.Email },
      });
      if (check) {
        return res
          .status(400)
          .json({ message: "User with this email already exists" });
      }

      check = await MechanicModel.findOne({
        where: { Phone: payload.Phone },
      });
      if (check) {
        return res
          .status(400)
          .json({ message: "User with this phone number already exists" });
      }

      check = await MechanicModel.findOne({
        where: { CNIC: payload.CNIC },
      });
      if (check) {
        return res
          .status(400)
          .json({ message: "User with this CNIC already exists" });
      }

      const saltround = 10;
      const Password = await bcrypt.hash(payload.Password, saltround);

      const mechanic = await MechanicModel.create({
        FirstName: payload.FirstName,
        LastName: payload.LastName,
        Username: payload.Username,
        Email: payload.Email,
        Password: Password,
        Phone: payload.Phone,
        CNIC: payload.CNIC,
        Address: payload.Address,
        // CategoryId: payload.CategoryId,
      });

      res.json({ message: "User Created", mechanic });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  read: async (req, res) => {
    try {
      const getMechanic = await MechanicModel.findAll({});
      res.json({
        getMechanic,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something bad happened to server",
      });
    }
  },
  update: async (req, res) => {
    try {
      const mech_Id = req.params.mech_id;
      const payload = req.body;

      const schema = Joi.object({
        FirstName: Joi.string().min(3).max(30).alphanum().required(),
        LastName: Joi.string().min(3).max(30).required(),
        Username: Joi.string().min(3).max(20).required().alphanum(),
        Email: Joi.string().min(10).max(30).required().email(),
        Password: Joi.string().min(8).max(15).required(),
        Phone: Joi.string().min(11).max(15).required(),
        CNIC: Joi.string().min(12).max(15).required(),
        Address: Joi.string().required(),
      });

      const isValidate = schema.validate(payload);
      if (isValidate.error) {
        return res
          .status(400)
          .json({ message: "Invalid data", error: isValidate.error });
      }

      const updateMechanic = await MechanicModel.findByPk(mech_Id);
      if (!updateMechanic) {
        return res.status(400).json({
          message: "No such user exist.",
        });
      }
      const saltround = 10;
      const Password = await bcrypt.hash(payload.Password, saltround);

      updateMechanic.FirstName = payload.FirstName;
      updateMechanic.LastName = payload.LastName;
      updateMechanic.Username = payload.Username;
      updateMechanic.Password = Password;
      updateMechanic.Email = payload.Email;
      updateMechanic.Phone = payload.Phone;
      updateMechanic.CNIC = payload.CNIC;
      updateMechanic.Address = payload.Address;
      await updateMechanic.save();

      res.json({ message: "User information updated", updateMechanic });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Something bad happened to server",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const mech_id = req.params.mech_id;
      const deleteMechanic = await MechanicModel.destroy({
        where: { id: mech_id },
      });
      if (deleteMechanic === 1) {
        return res.status(200).json({
          message: "User deleted successfully",
        });
      } else {
        return res.status(404).json({
          message: "User not found",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Something bad happened to server",
      });
    }
  },
};

export default mechanicController;
