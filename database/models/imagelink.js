'use strict';
import { sequelize, Sequelize } from './index'

const ImageLinks = sequelize.define('imageLink', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  postId: {
    type: Sequelize.INTEGER
  },
  link: {
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

export default ImageLinks