import { Todo } from "../models";

export default {
  add: async (req, res) => {
    try {
      const { title, subtitle, status, group_id } = req.body;
      await Todo.create({
        title: title,
        subtitle: subtitle,
        status: status,
        group_id: group_id,
      });
      res.json("todo added success!!!");
    } catch {
      res.status(404).send("---not found---");
    }
  },
  list: async (req, res) => {
    try {
      const list = await Todo.findAll({});
      res.json(list);
    } catch (err) {
      console.log(err);
      res.status(404).send("---not found---");
    }
  },
  complete: async (req, res) => {
    const { id, title, subtitle, status, group_id } = req.body;

    try {
      const TodoExist = await Todo.findOne({ where: { id: id }, raw: true });
      if (!TodoExist) {
        res.status(400).send("There is not todo");
        return false;
      }

      await Todo.update(
        {
          title: title,
          subtitle: subtitle,
          status: status,
          group_id: group_id,
        },
        { where: { id: id } }
      ).then(() => {
        res.status(200).json("todo update success!!!");
      });
    } catch {
      res.status(404).send("---not found---");
    }
  },
  suclist: async (req, res) => {
    try {
      const suclist = await Todo.findAll({ where: { status: true } });
      res.json(suclist);
    } catch (err) {
      console.log(err);
      res.status(404).send("---not found---");
    }
  },
  delete: async (req, res) => {
    const { id } = req.body;

    try {
      await Todo.destroy({ where: { id: id } }).then(() => {
        res.status(200).json("todo delete success!!!");
      });
    } catch {
      res.status(404).send("---not found---");
    }
  },
};
