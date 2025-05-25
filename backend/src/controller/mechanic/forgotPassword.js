import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import MechanicModel from "../../model/mechanic/index.js";
let otp = null;

const mech_PasswordController = {
  getotp: async (req, res) => {
    try {
      let hi = Math.floor(Math.random() * 9000) + 1000;
      otp = hi;

      const getemail = req.body.email;

      const transport = new nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "2f25506d3210e7",
          pass: "850d4e75ac4345",
        },
      });

      const info = transport.sendMail({
        from: "Sender@gmail.com",
        to: `${getemail}`,
        subject: "Hello ✔",
        text: `Your OTP is: ${otp} `,
      });

      res.json({
        message: "Otp generated",
        otp,
      });
    } catch (error) {
      console.log(error);
      res.json({
        message: "Server Error",
      });
    }
  },
  ForgetPassword: async (req, res) => {
    try {
      let generatedotp = otp;
      const payload = req.body;
      const recievedotp = payload.otp;
      if (generatedotp != recievedotp) {
        return res.json({
          message: "Your OTP is incorrect.",
        });
      }
      const hashpassword = await bcrypt.hash(payload.password, 10);
      const getemail = payload.email;
      const user = await MechanicModel.findOne({
        where: {
          Email: getemail,
        },
      });
      user.Password = hashpassword;
      await user.save();

      res.json({
        message: "Password Updated Successfully",
      });
    } catch (error) {
      console.log(error);
      res.json({
        message: "Server Error",
      });
    }
  },
};

export default mech_PasswordController;
