import mech_ImageModel from "../../model/mechanic/images.js";

const mech_ImageController = {
  uploadImage: async (req, res) => {
    console.log(req.body);
    const imageName = req.file.filename;
    try {
      await mech_ImageModel.create({ image: imageName });
      res.json({ status: "ok" });
    } catch (error) {
      res.json({ status: error });
    }
  },

  getImage: async (req, res) => {
    try {
      const data = await mech_ImageModel.find({});
      res.send({ status: "ok", data: data });
    } catch (error) {
      res.json({ status: error });
    }
  },
};
export default mech_ImageController;
