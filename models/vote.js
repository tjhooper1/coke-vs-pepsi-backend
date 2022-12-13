"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vote.init(
    {
      voteId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      vote: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["coke", "pepsi"]],
        },
      },
    },
    {
      sequelize,
      modelName: "Vote",
      setterMethods: {
        vote(value) {
          this.setDataValue("vote", value.toLowerCase());
        },
      },
      getterMethods: {
        totalVotes() {
          return Vote.count();
        },
        totalCokeVotes() {
          return Vote.count({ where: { vote: "coke" } });
        },
        totalPepsiVotes() {
          return Vote.count({ where: { vote: "pepsi" } });
        },
      },
    }
  );
  return Vote;
};
