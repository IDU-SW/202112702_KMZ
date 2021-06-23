import { TodoGroup, Todo } from "../models";

export default {
  add: async (req, res) => {
    try {
      const { title } = req.body;
      await TodoGroup.create({ title: title });
      res.json("group added success!!!");
    } catch {
      res.status(404).send("---not found---");
    }
  },
  list: async (req, res) => {
    try {
      const list = await TodoGroup.findAll({});
      res.json(list);
    } catch (err) {
      console.log(err);
      res.status(404).send("---not found---");
    }
  },
  complete: async (req, res) => {
    const { id, title } = req.body;

    try {
      const GroupExist = await TodoGroup.findOne({
        where: { id: id },
        raw: true,
      });
      if (!GroupExist) {
        res.status(400).send("There is not group");
        return false;
      }

      await TodoGroup.update({ title: title }, { where: { id: id } }).then(
        () => {
          res.status(200).json("group update success!!!");
        }
      );
    } catch {
      res.status(404).send("---not found---");
    }
  },
  intodo: async (req, res) => {
    try {
      const { id } = req.body;
      const list = await Todo.findAll({ where: { group_id: id } });
      res.json(list);
    } catch (err) {
      console.log(err);
      res.status(404).send("---not found---");
    }
  },
  delete: async (req, res) => {
    const { id } = req.body;

    try {
      await TodoGroup.destroy({ where: { id: id } }).then(() => {
        res.status(200);
      });
      await Todo.destroy({ where: { group_id: id } }).then(() => {
        res.status(200).json("group delete success!!!");
      });
    } catch {
      res.status(404).send("---not found---");
    }
  },
};
