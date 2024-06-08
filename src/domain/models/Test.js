import { DataTypes } from 'sequelize';
import sequelize from '../../../config/db.js';

const Test = sequelize.define('Test', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    perguntas: {
        type: DataTypes.JSON,
        allowNull: false,
    },
}, {
    timestamps: true,
    createdAt: 'criadoEm',
    updatedAt: 'atualizadoEm',
});

export default Test;
