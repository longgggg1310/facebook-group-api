'use strict';
import { sequelize, Sequelize } from './index'

const Posts = sequelize.define('post', {
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
}, {});

export default Posts

// sequelize model:generate --name post --attributes content:text,timeStamp:string,datePosting:string
// sequelize model:generate --name imageLink --attributes postId:integer,link:text
// sequelize model:generate --name comment --attributes postId:integer,username:text,userProfileLink:text,commentVideoLink:text,commentGIFLink:text,commentPictureLink:text,time:text,content:text

