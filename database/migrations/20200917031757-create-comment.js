'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      commentIdFb: {
        type: Sequelize.STRING,
      },
      commentId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'comments',
          key: 'id'
        }
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
      commentVideoLink: {
        type: Sequelize.TEXT
      },
      commentGIFLink: {
        type: Sequelize.TEXT
      },
      commentPictureLink: {
        type: Sequelize.TEXT
      },
      time: {
        type: Sequelize.TEXT
      },
      content: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('comments');
  }
};