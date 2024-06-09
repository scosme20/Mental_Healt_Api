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
    idDestinatário: {
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
    createdAt: 'criadoEm',
    updatedAt: 'atualizadoEm',
});

User.hasMany(Message, { foreignKey: 'idRemetente' });
User.hasMany(Message, { foreignKey: 'idDestinatário' });
Message.belongsTo(User, { as: 'remetente', foreignKey: 'idRemetente' });
Message.belongsTo(User, { as: 'destinatário', foreignKey: 'idDestinatário' });

export default Message;
