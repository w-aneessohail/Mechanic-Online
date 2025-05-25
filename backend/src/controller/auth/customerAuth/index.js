import CustomerModel from "../../../model/customer/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Joi from "joi";

const cust_authController = {
  login: async (req, res) => {
    const payload = req.body;

    const schema = Joi.object({
      Email: Joi.string().min(10).max(30).required().email(),
      Password: Joi.string().min(8).max(15).required(),
    });
    const { error } = schema.validate(payload);
    if (error) {
      return res.status(400).json({ message: "Invalid data", error: error });
    }

    const user = await CustomerModel.findOne({
      where: {
        Email: payload.Email,
      },
    });
    if (!user) {
      return res.status(401).json({
        message: "invalid credentional",
      });
    }

    //compare password
    const Password = payload.Password;
    const hashPassword = user.Password;
    const validPass = await bcrypt.compare(Password, hashPassword);
    if (!validPass) {
      return res.status(401).send("Invalid Password");
    } else {
      console.log(validPass, "this is a result");
    }

    const data = {
      id: user.id,
      Email: user.Email,
    };

    const expirationTime = Math.floor(Date.now() / 1000) + 2 * 60 * 60;

    // token Expiry
    jwt.sign({ ...data, exp: expirationTime }, "secret", (err, gettoken) => {
      if (err) {
        console.log(err);
        res.status.json(401)({
          message: " Internal Server Error",
        });
      } else {
        res.json({
          message: "User Logged In",
          data,
          gettoken,
        });
      }
    });
  },
  register: async function (req, res) {
    try {
      const payload = req.body;
      console.log(payload);
      // Validate the request payload
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

      // Check if the Password field exists in the payload
      if (!payload.Password) {
        return res.status(400).json({
          message: "Password is required",
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

      res.json({
        message: "User Created",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Something bad happened to server",
      });
    }
  },
};
export default cust_authController;
