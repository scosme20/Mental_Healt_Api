import { DataTypes } from 'sequelize';
import sequelize from '../../../config/database.js';

const Tip = sequelize.define('Tip', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  conteudo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
});

export default Tip;

