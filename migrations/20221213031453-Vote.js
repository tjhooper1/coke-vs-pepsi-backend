'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Votes', {
      voteId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      vote: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: [["coke", "pepsi"]],
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Votes');
  }
};
