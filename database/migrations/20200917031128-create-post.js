'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      district: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      content: {
        type: Sequelize.TEXT
      },
      timeStamp: {
        type: Sequelize.STRING
      },
      datePosting: {
        type: Sequelize.STRING
      },
      postLink: {
        type: Sequelize.TEXT
      },
      groupId: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.TEXT
      },
      userAvatar: {
        type: Sequelize.TEXT
      },
      userProfileLink: {
        type: Sequelize.TEXT
      },
      lng: {
        type: Sequelize.DOUBLE
      },
      lat: {
        type: Sequelize.DOUBLE
      },
      isForRenter: {
        type: Sequelize.BOOLEAN
      },
      isNeedToCheck: {
        type: Sequelize.BOOLEAN
      },
      phone: {
        type: Sequelize.STRING
      },
      count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};