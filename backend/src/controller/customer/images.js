import cust_ImageModel from "../../model/customer/images.js";

const cust_ImageController = {
  uploadImage: async (req, res) => {
    console.log(req.body);
    const imageName = req.file.filename;
    try {
      await cust_ImageModel.create({ image: imageName });
      res.json({ status: "ok" });
    } catch (error) {
      res.json({ status: error });
    }
  },

  getImage: async (req, res) => {
    try {
      const data = await cust_ImageModel.find({});
      res.send({ status: "ok", data: data });
    } catch (error) {
      res.json({ status: error });
    }
  },
};
export default cust_ImageController;
