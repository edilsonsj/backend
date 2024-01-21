const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const response = await ServiceModel.create(service);

      res.status(201).json({ response, msg: "Service created with success!" });
    } catch (error) {
      console.log(error);
    }
  },

  getALl: async (req, res) => {
    try {
      const services = await ServiceModel.find();
      res.json(services);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findById(id);

      if(!service) {
        res.status(404).json({msg: "Service not found (get by id func) !!!!!!!!!!"});
        return;
      }

      res.json(service);
    } catch (error) {
      console.log(error);
    }
  },

  delete: async(req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findById(id);

      if(!service) {
        res.status(404).json({ msg: "Service not found (delete func)!!!!"});
        return;
      }

      const deletedService = await ServiceModel.findByIdAndDelete(id);

      res.status(200).json({deletedService, msg: "Service deleted with success"});

    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    const id = req.params.id;

    const service = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: req.body.image,
    }

    const updatedService = await ServiceModel.findByIdAndUpdate(id, service);


    if (!updatedService) {
      res.status(404).json({msg: "Service not found (update function)"});
      return;
    }

    res.status(200).json({service, msg: "Service updated with success!"})
  }

};
module.exports = serviceController;
