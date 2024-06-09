import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import config from './config.json';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const { username, password, database, host, dialect } = config[env];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect
});

export default sequelize;
