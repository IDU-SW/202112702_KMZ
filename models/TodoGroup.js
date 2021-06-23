module.exports = (sequelize, DataTypes) => {
  const TodoGroup = sequelize.define(
    "TodoGroup",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
  return TodoGroup;
};
