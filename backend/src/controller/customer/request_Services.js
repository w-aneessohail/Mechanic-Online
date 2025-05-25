import requestServices_Model from "../../model/customer/request_Service.js";
import Joi from "joi";

const requestServices_Controller = {
  create: async (req, res) => {
    try {
      const payload = req.body;
      console.log(payload);
      const schema = Joi.object({
        serviceType: Joi.string().required(),
        Name: Joi.string().required(),
        Description: Joi.string().required(),
        Phone: Joi.string().required(),
        Address: Joi.string().required(),
        Location: Joi.object({
          latitude: Joi.number().required(),
          longitude: Joi.number().required(),
        }).required(),
        serviceStatus: Joi.string().valid("Active", "Inactive").required(),
        CustomerId: Joi.number().required(),
      });

      const { error } = schema.validate(payload);
      if (error) {
        return res.status(400).json({ message: "Invalid data", error: error });
      }

      const service = await requestServices_Model.create(payload);

      return res.json({ message: "Service created", service });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  readAll: async (req, res) => {
    try {
      const services = await requestServices_Model.findAll();
      res.json({ services });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  readwhere: async (req, res) => {
    try {
      const payload = req.body;
      console.log(payload.serviceStatus);
      const services = await requestServices_Model.findAll({
        where: {
          serviceStatus: "Inactive",
        },
      });
      res.json({ services });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  // readcomplete: async (req, res) => {
  //   try {
  //     const payload = req.body;
  //     // console.log(payload.serviceStatus);
  //     const services = await requestServices_Model.findAll({
  //       where: {
  //         serviceStatus: "Completed",
  //       },
  //     });
  //     res.json({ services });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: "Internal Server Error" });
  //   }
  // },

  readById: async (req, res) => {
    try {
      const serviceId = req.params.serviceId;
      const service = await requestServices_Model.findByPk(serviceId);

      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }

      res.json({ service });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  update: async (req, res) => {
    try {
      const serviceId = req.params.serviceId;
      const payload = req.body;
      console.log(payload);

      const schema = Joi.object({
        serviceType: Joi.string(),
        Name: Joi.string(),
        Description: Joi.string(),
        Phone: Joi.string(),
        Address: Joi.string(),
        Location: Joi.object({
          latitude: Joi.number().required(),
          longitude: Joi.number().required(),
        }),
        serviceStatus: Joi.string().valid("Active", "Inactive", "Completed"),
        MechanicId: Joi.number(),
      });

      const { error } = schema.validate(payload);
      if (error) {
        return res.status(400).json({ message: "Invalid data", error: error });
      }

      const service = await requestServices_Model.findByPk(serviceId);
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }

      await service.update(payload);

      res.json({ message: "Service updated", service });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  delete: async (req, res) => {
    try {
      const serviceId = req.params.serviceId;
      const deletedRequest = await requestServices_Model.destroy({
        where: { id: serviceId },
      });

      if (deletedRequest === 1) {
        res.json({ message: "Service deleted successfully" });
      } else {
        res.status(404).json({ message: "Service not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default requestServices_Controller;
