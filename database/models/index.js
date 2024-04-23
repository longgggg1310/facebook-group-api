import path from 'path';
import Sequelize from 'sequelize';
import envConfigs from '../config/config';

const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize
  .authenticate()
  .then(() => {
    console.log('PostgreSQL connection has been established successfully.')
  })
  .catch((err) => {
    console.log('Unable to connect to the database: ', err)
  })


export {
  sequelize,
  Sequelize
};
