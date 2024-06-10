import { DataTypes } from 'sequelize';
import sequelize from '../../../config/database.js';
import User from './User.js';

const Message = sequelize.define('Message', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idRemetente: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
  },
  idDestinatario: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
  },
  conteudo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
});

User.hasMany(Message, { foreignKey: 'idRemetente' });
User.hasMany(Message, { foreignKey: 'idDestinatario' });
Message.belongsTo(User, { as: 'remetente', foreignKey: 'idRemetente' });
Message.belongsTo(User, { as: 'destinatario', foreignKey: 'idDestinatario' });

export default Message;

