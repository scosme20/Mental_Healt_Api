import { DataTypes } from 'sequelize';
import sequelize from '../../../config/db.js';

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
    createdAt: 'criadoEm',
    updatedAt: 'atualizadoEm',
});

export default Tip;
