module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(30),
        allowNull: true, //null 허용
      },
      subtitle: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("now()"),
      },
      group_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        // Reference: {
        //   model: TodoGroup,
        //   key: "id",
        // },
      },
    },
    {
      timestamps: false,
    }
  );
  return Todo;
};
