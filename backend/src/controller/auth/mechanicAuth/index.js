import MechanicModel from "../../../model/mechanic/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Joi from "joi";

const mech_authController = {
  mechLogin: async (req, res) => {
    try {
      const payload = req.body;

      const schema = Joi.object({
        Email: Joi.string().min(10).max(30).required().email(),
        Password: Joi.string().min(8).max(15).required(),
      });

      const { error } = schema.validate(payload);
      if (error) {
        return res
          .status(400)
          .json({ message: "Invalid data", error: error.details });
      }

      const mechanic = await MechanicModel.findOne({
        where: { Email: payload.Email },
      });
      if (!mechanic) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const validPass = await bcrypt.compare(
        payload.Password,
        mechanic.Password
      );
      if (!validPass) {
        return res.status(401).json({ message: "Invalid password" });
      }

      const data = {
        id: mechanic.id,
        Email: mechanic.Email,
      };

      const expirationTime = Math.floor(Date.now() / 1000) + 2 * 60 * 60;

      jwt.sign({ ...data, exp: expirationTime }, "secret", (err, gettoken) => {
        if (err) {
          console.log(err);
          res.status.json(401)({
            message: " Internal Server Error",
          });
        } else {
          res.json({
            message: "Mechanic Logged In",
            data,
            gettoken,
          });
        }
      });

      // res.json({ message: "Mechanic Logged In", token, data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  mechRegister: async function (req, res) {
    try {
      const payload = req.body;

      const schema = Joi.object({
        FirstName: Joi.string().min(3).max(30).alphanum().required(),
        LastName: Joi.string().min(3).max(30).alphanum(),
        Username: Joi.string().min(3).max(20).required().alphanum(),
        Email: Joi.string().min(10).max(30).required().email(),
        Password: Joi.string().min(8).max(15).required(),
        Phone: Joi.string().min(11).max(15).required(),
        CNIC: Joi.string().min(12).max(15).required(),
        Address: Joi.string().required(),
      });

      const { error } = schema.validate(payload);
      if (error) {
        return res
          .status(400)
          .json({ message: "Invalid data", error: error.details });
      }

      let check = await MechanicModel.findOne({
        where: { Username: payload.Username },
      });
      if (check) {
        return res
          .status(400)
          .json({ message: "User with this username already exists" });
      }

      check = await MechanicModel.findOne({ where: { Email: payload.Email } });
      if (check) {
        return res
          .status(400)
          .json({ message: "User with this email already exists" });
      }

      check = await MechanicModel.findOne({ where: { Phone: payload.Phone } });
      if (check) {
        return res
          .status(400)
          .json({ message: "User with this phone number already exists" });
      }

      check = await MechanicModel.findOne({ where: { CNIC: payload.CNIC } });
      if (check) {
        return res
          .status(400)
          .json({ message: "User with this CNIC already exists" });
      }

      const saltround = 10;
      const hashedPassword = await bcrypt.hash(payload.Password, saltround);

      const mechanic = await MechanicModel.create({
        FirstName: payload.FirstName,
        LastName: payload.LastName,
        Username: payload.Username,
        Email: payload.Email,
        Password: hashedPassword,
        Phone: payload.Phone,
        CNIC: payload.CNIC,
        Address: payload.Address,
      });

      res.json({ message: "User Created", mechanic });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default mech_authController;
