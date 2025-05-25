import job_CompletionModel from "../../model/mechanic/jobComplete.js";
import Joi from "joi";
const job_CompletionController = {
  create: async (req, res) => {
    try {
      const payload = req.body;
      console.log(payload);

      const schema = Joi.object({
        Description: Joi.string().required(),
        laborCost: Joi.number().required(),
        serviceCharge: Joi.number(),
        MechanicId: Joi.number(),
        requestServiceId: Joi.number(),
      });

      const { error } = schema.validate(payload);
      if (error) {
        return res.status(400).json({ message: "Invalid data", error: error });
      }

      const totalBill = payload.laborCost + payload.serviceCharge;

      const jobCompletion = await job_CompletionModel.create({
        Description: payload.Description,
        laborCost: payload.laborCost,
        serviceCharge: payload.serviceCharge,
        totalBill: totalBill,
        MechanicId: payload.MechanicId,
        requestServiceId: payload.requestServiceId,
      });

      res.json({
        message: "Job completion record created",
        jobCompletion,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },

  read: async (req, res) => {
    try {
      const jobCompletions = await job_CompletionModel.findAll({});
      res.json({ jobCompletions });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};
export default job_CompletionController;
