module.exports = (sequelize, DataTypes) => {
  const Apply = sequelize.define(
    "Apply",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product: {
        type: DataTypes.STRING(30),
        allowNull: true, //null 허용
      },
      price: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      manager: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      area: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("now()"),
      },
    },
    {
      timestamps: false,
    }
  );
  return Apply;
};
