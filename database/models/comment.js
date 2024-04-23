'use strict';
import { sequelize, Sequelize } from './index'

const Comments = sequelize.define('comment', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  commentId: {
    allowNull: true,
    type: Sequelize.INTEGER,
    references: {
      model: 'comments',
      key: 'id'
    }
  },
  commentIdFb: {
    type: Sequelize.STRING,
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
}, {});

export default Comments
