import { Apply } from "../models/Apply.js";

export default {
  add: async (req, res) => {
    try {
      const { product, price, manager, area } = req.body;
      await Apply.create({
        product: product,
        price: price,
        manager: manager,
        area: area,
      });
      res.json("Apply added success!!!");
    } catch {
      res.status(404).send("---not found---");
    }
  },
  list: async (req, res) => {
    try {
      const list = await Apply.findAll({});
      res.json(list);
    } catch (err) {
      console.log(err);
      res.status(404).send("---not found---");
    }
  },
  complete: async (req, res) => {
    const { id, product, price, manager, area } = req.body;

    try {
      const TodoExist = await Apply.findOne({ where: { id: id }, raw: true });
      if (!TodoExist) {
        res.status(400).send("There is not Apply");
        return false;
      }

      await Apply.update(
        {
          product: product,
          price: price,
          manager: manager,
          area: area,
        },
        { where: { id: id } }
      ).then(() => {
        res.status(200).json("Apply update success!!!");
      });
    } catch {
      res.status(404).send("---not found---");
    }
  },
  suclist: async (req, res) => {
    try {
      const suclist = await Apply.findAll({ where: { status: true } });
      res.json(suclist);
    } catch (err) {
      console.log(err);
      res.status(404).send("---not found---");
    }
  },
  delete: async (req, res) => {
    const { id } = req.body;

    try {
      await Apply.destroy({ where: { id: id } }).then(() => {
        res.status(200).json("Apply delete success!!!");
      });
    } catch {
      res.status(404).send("---not found---");
    }
  },
};
